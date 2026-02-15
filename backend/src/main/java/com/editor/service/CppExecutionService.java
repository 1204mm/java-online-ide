package com.editor.service;

import com.editor.dto.CodeResult;
import com.editor.sandbox.SandboxSecurityManager;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.List;
import java.util.Arrays;
import java.util.concurrent.*;
import java.util.regex.Pattern;

@Service
public class CppExecutionService {
    
    private final ExecutorService executorService = Executors.newCachedThreadPool();
    
    private static final List<String> DANGEROUS_FUNCTIONS = Arrays.asList(
        "system(", "popen(", "pclose(", "exec", "execl", "execlp", "execle", "execv", "execvp", "execve",
        "fork(", "vfork(", "WinExec", "ShellExecute", "CreateProcess", "TerminateProcess",
        "RemoveDirectory", "DeleteFile", "MoveFile", "CopyFile", "CreateFile",
        "GetTickCount", "Sleep(", "ExitWindows", "ExitWindowsEx", "InitiateShutdown",
        "RegOpenKey", "RegSetValue", "RegDeleteKey", "RegDeleteValue",
        "LoadLibrary", "GetProcAddress", "FreeLibrary",
        "VirtualAlloc", "VirtualProtect", "VirtualFree", "WriteProcessMemory", "ReadProcessMemory",
        "CreateThread", "CreateRemoteThread", "OpenProcess", "OpenThread",
        "SetWindowsHookEx", "UnhookWindowsHookEx",
        "socket(", "connect(", "bind(", "listen(", "accept(", "send(", "recv(",
        "WSAStartup", "WSASocket", "closesocket",
        "fopen(", "fclose(", "fread(", "fwrite(", "fprintf(", "fscanf(",
        "freopen(", "remove(", "rename(", "tmpfile(", "tmpnam(",
        "chmod(", "chown(", "unlink(", "mkdir(", "rmdir(", "opendir(", "readdir(",
        "getenv(", "putenv(", "setenv(", "unsetenv(",
        "mmap(", "munmap(", "mprotect(", "brk(", "sbrk(",
        "ptrace(", "prctl(", "seccomp(",
        "clone(", "unshare(", "setns(",
        "chroot(", "chdir(", "fchdir(",
        "setuid(", "setgid(", "seteuid(", "setegid(", "setreuid(", "setregid(",
        "setresuid(", "setresgid(",
        "kill(", "raise(", "signal(", "sigaction(",
        "pthread_create", "pthread_exit", "pthread_cancel", "pthread_kill",
        "dlopen(", "dlsym(", "dlclose(", "dlerror(",
        "system_call", "syscall(", "int 0x80", "sysenter", "sysexit"
    );
    
    private static final List<String> DANGEROUS_KEYWORDS = Arrays.asList(
        "system", "popen", "pclose", "execve", "execl", "execlp", "execv", "execvp",
        "fork", "vfork", "WinExec", "ShellExecute", "CreateProcess", "TerminateProcess",
        "shutdown", "reboot", "halt", "poweroff",
        "RemoveDirectory", "DeleteFile", "MoveFile", "CopyFile", "CreateFile",
        "ExitWindows", "ExitWindowsEx", "InitiateShutdown",
        "RegOpenKey", "RegSetValue", "RegDeleteKey",
        "LoadLibrary", "GetProcAddress", "dlopen", "dlsym",
        "VirtualAlloc", "WriteProcessMemory", "ReadProcessMemory",
        "CreateThread", "CreateRemoteThread", "OpenProcess",
        "socket", "connect", "bind", "listen", "accept",
        "ptrace", "prctl", "seccomp", "syscall"
    );
    
    private static final List<Pattern> DANGEROUS_PATTERNS = Arrays.asList(
        Pattern.compile("#\\s*include\\s*<windows\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<winbase\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<winuser\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<winreg\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<winsock2\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<sys/socket\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<sys/types\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<unistd\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<sys/mman\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<sys/ptrace\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<dlfcn\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*include\\s*<pthread\\.h>", Pattern.CASE_INSENSITIVE),
        Pattern.compile("__asm__", Pattern.CASE_INSENSITIVE),
        Pattern.compile("__asm\\s*\\{", Pattern.CASE_INSENSITIVE),
        Pattern.compile("asm\\s*\\(", Pattern.CASE_INSENSITIVE),
        Pattern.compile("inline\\s+asm", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+system\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+popen\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+exec\\w*\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+fork\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+WinExec\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+ShellExecute\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+CreateProcess\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+dlopen\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+LoadLibrary\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+socket\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+ptrace\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+syscall\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+shutdown\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("#\\s*define\\s+\\w+\\s+reboot\\b", Pattern.CASE_INSENSITIVE),
        Pattern.compile("\"(system|popen|exec|fork|shutdown|reboot)\"", Pattern.CASE_INSENSITIVE),
        Pattern.compile("'(system|popen|exec|fork|shutdown|reboot)'", Pattern.CASE_INSENSITIVE)
    );
    
    private String checkDangerousCode(String code) {
        String codeWithoutComments = removeComments(code);
        
        for (String func : DANGEROUS_FUNCTIONS) {
            if (codeWithoutComments.contains(func)) {
                return "安全限制：禁止使用危险函数 " + func;
            }
        }
        
        for (String keyword : DANGEROUS_KEYWORDS) {
            Pattern macroPattern = Pattern.compile("#\\s*define\\s+\\w+\\s+" + Pattern.quote(keyword) + "\\b", Pattern.CASE_INSENSITIVE);
            if (macroPattern.matcher(codeWithoutComments).find()) {
                return "安全限制：禁止通过宏定义绕过安全检测 (" + keyword + ")";
            }
            
            Pattern callPattern = Pattern.compile("\\b" + Pattern.quote(keyword) + "\\s*\\(");
            if (callPattern.matcher(codeWithoutComments).find()) {
                return "安全限制：禁止使用危险函数 " + keyword;
            }
        }
        
        for (Pattern pattern : DANGEROUS_PATTERNS) {
            if (pattern.matcher(codeWithoutComments).find()) {
                return "安全限制：禁止使用危险头文件、宏定义绕过或内联汇编";
            }
        }
        
        String[] lines = codeWithoutComments.split("\n");
        for (String line : lines) {
            line = line.trim();
            if (line.startsWith("#define")) {
                String[] parts = line.split("\\s+");
                if (parts.length >= 3) {
                    String replacement = parts[2];
                    for (String keyword : DANGEROUS_KEYWORDS) {
                        if (replacement.equalsIgnoreCase(keyword)) {
                            return "安全限制：禁止通过宏定义绕过安全检测 (" + keyword + ")";
                        }
                    }
                }
            }
        }
        
        return null;
    }
    
    private String removeComments(String code) {
        StringBuilder result = new StringBuilder();
        int i = 0;
        int len = code.length();
        
        while (i < len) {
            if (i + 1 < len && code.charAt(i) == '/' && code.charAt(i + 1) == '/') {
                while (i < len && code.charAt(i) != '\n') {
                    i++;
                }
            } else if (i + 1 < len && code.charAt(i) == '/' && code.charAt(i + 1) == '*') {
                i += 2;
                while (i + 1 < len && !(code.charAt(i) == '*' && code.charAt(i + 1) == '/')) {
                    i++;
                }
                i += 2;
            } else {
                result.append(code.charAt(i));
                i++;
            }
        }
        
        return result.toString();
    }
    
    public CodeResult executeCppCode(String code, String input, int timeout) {
        CodeResult result = new CodeResult();
        long startTime = System.currentTimeMillis();
        
        String securityCheck = checkDangerousCode(code);
        if (securityCheck != null) {
            result.setError(securityCheck);
            return result;
        }
        
        File tempDir = new File(System.getProperty("java.io.tmpdir"), "cpp-ide-" + java.util.UUID.randomUUID().toString());
        
        File sourceFile = null;
        
        try {
            tempDir.mkdirs();
            sourceFile = new File(tempDir, "main.cpp");
            
            Files.write(sourceFile.toPath(), code.getBytes(StandardCharsets.UTF_8));
            
            ProcessBuilder compilePb = new ProcessBuilder("g++", "-o", 
                new File(tempDir, "main").getAbsolutePath(), 
                sourceFile.getAbsolutePath(),
                "-D_CRT_SECURE_NO_WARNINGS");
            compilePb.directory(tempDir);
            compilePb.redirectErrorStream(true);
            
            Process compileProcess = compilePb.start();
            StringBuilder compileOutput = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(compileProcess.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    compileOutput.append(line).append("\n");
                }
            }
            
            int compileExitCode = compileProcess.waitFor();
            if (compileExitCode != 0) {
                result.setCompileError(compileOutput.toString());
                return result;
            }
            
            File execFile = new File(tempDir, "main.exe");
            if (!execFile.exists()) {
                execFile = new File(tempDir, "main");
            }
            
            if (!execFile.exists()) {
                result.setError("编译失败：找不到可执行文件");
                return result;
            }
            
            final File finalExecFile = execFile;
            final String finalInput = input;
            
            Callable<String> task = () -> {
                try {
                    ProcessBuilder runPb = new ProcessBuilder(finalExecFile.getAbsolutePath());
                    runPb.directory(tempDir);
                    runPb.redirectErrorStream(false);
                    
                    Process runProcess = runPb.start();
                    
                    if (finalInput != null && !finalInput.isEmpty()) {
                        try (OutputStreamWriter writer = new OutputStreamWriter(runProcess.getOutputStream())) {
                            writer.write(finalInput);
                            writer.flush();
                        }
                    }
                    
                    StringBuilder output = new StringBuilder();
                    try (BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getInputStream()))) {
                        String line;
                        while ((line = reader.readLine()) != null) {
                            output.append(line).append("\n");
                        }
                    }
                    
                    StringBuilder error = new StringBuilder();
                    try (BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getErrorStream()))) {
                        String line;
                        while ((line = reader.readLine()) != null) {
                            error.append(line).append("\n");
                        }
                    }
                    
                    if (!runProcess.waitFor(timeout, TimeUnit.MILLISECONDS)) {
                        runProcess.destroyForcibly();
                        throw new RuntimeException("执行超时");
                    }
                    
                    if (error.length() > 0) {
                        return output.toString() + error.toString();
                    }
                    return output.toString();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            };
            
            Future<String> future = executorService.submit(task);
            
            try {
                String output = future.get(timeout + 1000, TimeUnit.MILLISECONDS);
                result.setSuccess(true);
                result.setOutput(output);
            } catch (TimeoutException e) {
                future.cancel(true);
                result.setError("执行超时（超过" + timeout + "毫秒）");
            } catch (Exception e) {
                Throwable cause = e.getCause();
                if (cause != null) {
                    cause = cause.getCause();
                }
                String errorMsg = cause != null ? cause.getMessage() : e.getMessage();
                if (errorMsg != null && errorMsg.contains("超时")) {
                    result.setError("执行超时（超过" + timeout + "毫秒）");
                } else {
                    result.setError("运行时错误: " + errorMsg);
                }
            }
            
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().contains("g++")) {
                result.setError("系统错误：未安装g++编译器，无法运行C++代码");
            } else {
                result.setError("系统错误: " + e.getMessage());
            }
        } finally {
            if (sourceFile != null && sourceFile.exists()) {
                sourceFile.delete();
            }
            File execFile = new File(tempDir, "main.exe");
            if (!execFile.exists()) {
                execFile = new File(tempDir, "main");
            }
            if (execFile.exists()) {
                execFile.delete();
            }
            if (tempDir.exists()) {
                tempDir.delete();
            }
        }
        
        result.setExecutionTime(System.currentTimeMillis() - startTime);
        return result;
    }
    
    public CodeResult executeCCode(String code, String input, int timeout) {
        CodeResult result = new CodeResult();
        long startTime = System.currentTimeMillis();
        
        String securityCheck = checkDangerousCode(code);
        if (securityCheck != null) {
            result.setError(securityCheck);
            return result;
        }
        
        File tempDir = new File(System.getProperty("java.io.tmpdir"), "c-ide-" + java.util.UUID.randomUUID().toString());
        
        File sourceFile = null;
        
        try {
            tempDir.mkdirs();
            sourceFile = new File(tempDir, "main.c");
            
            Files.write(sourceFile.toPath(), code.getBytes(StandardCharsets.UTF_8));
            
            ProcessBuilder compilePb = new ProcessBuilder("gcc", "-o", 
                new File(tempDir, "main").getAbsolutePath(), 
                sourceFile.getAbsolutePath(),
                "-D_CRT_SECURE_NO_WARNINGS");
            compilePb.directory(tempDir);
            compilePb.redirectErrorStream(true);
            
            Process compileProcess = compilePb.start();
            StringBuilder compileOutput = new StringBuilder();
            try (BufferedReader reader = new BufferedReader(new InputStreamReader(compileProcess.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    compileOutput.append(line).append("\n");
                }
            }
            
            int compileExitCode = compileProcess.waitFor();
            if (compileExitCode != 0) {
                result.setCompileError(compileOutput.toString());
                return result;
            }
            
            File execFile = new File(tempDir, "main.exe");
            if (!execFile.exists()) {
                execFile = new File(tempDir, "main");
            }
            
            if (!execFile.exists()) {
                result.setError("编译失败：找不到可执行文件");
                return result;
            }
            
            final File finalExecFile = execFile;
            final String finalInput = input;
            
            Callable<String> task = () -> {
                try {
                    ProcessBuilder runPb = new ProcessBuilder(finalExecFile.getAbsolutePath());
                    runPb.directory(tempDir);
                    runPb.redirectErrorStream(false);
                    
                    Process runProcess = runPb.start();
                    
                    if (finalInput != null && !finalInput.isEmpty()) {
                        try (OutputStreamWriter writer = new OutputStreamWriter(runProcess.getOutputStream())) {
                            writer.write(finalInput);
                            writer.flush();
                        }
                    }
                    
                    StringBuilder output = new StringBuilder();
                    try (BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getInputStream()))) {
                        String line;
                        while ((line = reader.readLine()) != null) {
                            output.append(line).append("\n");
                        }
                    }
                    
                    StringBuilder error = new StringBuilder();
                    try (BufferedReader reader = new BufferedReader(new InputStreamReader(runProcess.getErrorStream()))) {
                        String line;
                        while ((line = reader.readLine()) != null) {
                            error.append(line).append("\n");
                        }
                    }
                    
                    if (!runProcess.waitFor(timeout, TimeUnit.MILLISECONDS)) {
                        runProcess.destroyForcibly();
                        throw new RuntimeException("执行超时");
                    }
                    
                    if (error.length() > 0) {
                        return output.toString() + error.toString();
                    }
                    return output.toString();
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            };
            
            Future<String> future = executorService.submit(task);
            
            try {
                String output = future.get(timeout + 1000, TimeUnit.MILLISECONDS);
                result.setSuccess(true);
                result.setOutput(output);
            } catch (TimeoutException e) {
                future.cancel(true);
                result.setError("执行超时（超过" + timeout + "毫秒）");
            } catch (Exception e) {
                Throwable cause = e.getCause();
                if (cause != null) {
                    cause = cause.getCause();
                }
                String errorMsg = cause != null ? cause.getMessage() : e.getMessage();
                if (errorMsg != null && errorMsg.contains("超时")) {
                    result.setError("执行超时（超过" + timeout + "毫秒）");
                } else {
                    result.setError("运行时错误: " + errorMsg);
                }
            }
            
        } catch (Exception e) {
            if (e.getMessage() != null && e.getMessage().contains("gcc")) {
                result.setError("系统错误：未安装gcc编译器，无法运行C代码");
            } else {
                result.setError("系统错误: " + e.getMessage());
            }
        } finally {
            if (sourceFile != null && sourceFile.exists()) {
                sourceFile.delete();
            }
            File execFile = new File(tempDir, "main.exe");
            if (!execFile.exists()) {
                execFile = new File(tempDir, "main");
            }
            if (execFile.exists()) {
                execFile.delete();
            }
            if (tempDir.exists()) {
                tempDir.delete();
            }
        }
        
        result.setExecutionTime(System.currentTimeMillis() - startTime);
        return result;
    }
}
