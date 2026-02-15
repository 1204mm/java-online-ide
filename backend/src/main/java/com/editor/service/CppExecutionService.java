package com.editor.service;

import com.editor.dto.CodeResult;
import com.editor.sandbox.SandboxSecurityManager;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.concurrent.*;

@Service
public class CppExecutionService {
    
    private final ExecutorService executorService = Executors.newCachedThreadPool();
    
    public CodeResult executeCppCode(String code, String input, int timeout) {
        CodeResult result = new CodeResult();
        long startTime = System.currentTimeMillis();
        
        File tempDir = new File(System.getProperty("java.io.tmpdir"), "cpp-ide-" + java.util.UUID.randomUUID().toString());
        
        File sourceFile = null;
        
        try {
            tempDir.mkdirs();
            sourceFile = new File(tempDir, "main.cpp");
            
            Files.write(sourceFile.toPath(), code.getBytes(StandardCharsets.UTF_8));
            
            ProcessBuilder compilePb = new ProcessBuilder("g++", "-o", 
                new File(tempDir, "main").getAbsolutePath(), 
                sourceFile.getAbsolutePath());
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
            
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            ByteArrayOutputStream errorStream = new ByteArrayOutputStream();
            
            PrintStream originalOut = System.out;
            PrintStream originalErr = System.err;
            InputStream originalIn = System.in;
            
            System.setOut(new PrintStream(outputStream, true, "UTF-8"));
            System.setErr(new PrintStream(errorStream, true, "UTF-8"));
            
            if (input != null && !input.isEmpty()) {
                System.setIn(new ByteArrayInputStream(input.getBytes("UTF-8")));
            }
            
            try {
                SandboxSecurityManager.setAllowedDir(tempDir.getAbsolutePath());
                SandboxSecurityManager.enterSandbox();
                
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
                        
                        runProcess.waitFor();
                        
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
                    String output = future.get(timeout, TimeUnit.MILLISECONDS);
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
                    if (cause instanceof SecurityException) {
                        result.setError("安全限制: " + cause.getMessage());
                    } else {
                        result.setError("运行时错误: " + (cause != null ? cause.getMessage() : e.getMessage()));
                    }
                }
                
            } finally {
                SandboxSecurityManager.exitSandbox();
                System.setOut(originalOut);
                System.setErr(originalErr);
                System.setIn(originalIn);
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
        
        File tempDir = new File(System.getProperty("java.io.tmpdir"), "c-ide-" + java.util.UUID.randomUUID().toString());
        
        File sourceFile = null;
        
        try {
            tempDir.mkdirs();
            sourceFile = new File(tempDir, "main.c");
            
            Files.write(sourceFile.toPath(), code.getBytes(StandardCharsets.UTF_8));
            
            ProcessBuilder compilePb = new ProcessBuilder("gcc", "-o", 
                new File(tempDir, "main").getAbsolutePath(), 
                sourceFile.getAbsolutePath());
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
            
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            ByteArrayOutputStream errorStream = new ByteArrayOutputStream();
            
            PrintStream originalOut = System.out;
            PrintStream originalErr = System.err;
            InputStream originalIn = System.in;
            
            System.setOut(new PrintStream(outputStream, true, "UTF-8"));
            System.setErr(new PrintStream(errorStream, true, "UTF-8"));
            
            if (input != null && !input.isEmpty()) {
                System.setIn(new ByteArrayInputStream(input.getBytes("UTF-8")));
            }
            
            try {
                SandboxSecurityManager.setAllowedDir(tempDir.getAbsolutePath());
                SandboxSecurityManager.enterSandbox();
                
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
                        
                        runProcess.waitFor();
                        
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
                    String output = future.get(timeout, TimeUnit.MILLISECONDS);
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
                    if (cause instanceof SecurityException) {
                        result.setError("安全限制: " + cause.getMessage());
                    } else {
                        result.setError("运行时错误: " + (cause != null ? cause.getMessage() : e.getMessage()));
                    }
                }
                
            } finally {
                SandboxSecurityManager.exitSandbox();
                System.setOut(originalOut);
                System.setErr(originalErr);
                System.setIn(originalIn);
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
