package com.editor.service;

import com.editor.dto.CodeResult;
import com.editor.sandbox.SandboxSecurityManager;
import org.springframework.stereotype.Service;

import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.OutputStreamWriter;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

@Service
public class CodeExecutionService {
    
    private final ExecutorService executorService = Executors.newCachedThreadPool();
    
    public CodeResult executeCode(String code, String className, String input, int timeout) {
        CodeResult result = new CodeResult();
        long startTime = System.currentTimeMillis();
        
        File tempDir = new File(System.getProperty("java.io.tmpdir"), "java-ide-" + UUID.randomUUID().toString());
        
        String actualClassName = extractClassName(code);
        if (actualClassName == null) {
            actualClassName = className != null && !className.isEmpty() ? className : "Main";
        }
        
        File sourceFile = null;
        try {
            tempDir.mkdirs();
            sourceFile = new File(tempDir, actualClassName + ".java");
            
            java.io.FileWriter writer = new java.io.FileWriter(sourceFile);
            writer.write(code);
            writer.close();
            
            JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
            if (compiler == null) {
                result.setError("无法获取Java编译器，请确保使用JDK运行");
                return result;
            }
            
            DiagnosticCollector<JavaFileObject> diagnostics = new DiagnosticCollector<>();
            StandardJavaFileManager fileManager = compiler.getStandardFileManager(diagnostics, Locale.getDefault(), StandardCharsets.UTF_8);
            
            Iterable<? extends JavaFileObject> compilationUnits = fileManager.getJavaFileObjectsFromFiles(Arrays.asList(sourceFile));
            
            List<String> options = new ArrayList<>();
            options.add("-encoding");
            options.add("UTF-8");
            options.add("-d");
            options.add(tempDir.getAbsolutePath());
            
            JavaCompiler.CompilationTask task = compiler.getTask(
                null,
                fileManager,
                diagnostics,
                options,
                null,
                compilationUnits
            );
            
            boolean compiled = task.call();
            fileManager.close();
            
            if (!compiled) {
                StringBuilder errorBuilder = new StringBuilder();
                for (Diagnostic<? extends JavaFileObject> diagnostic : diagnostics.getDiagnostics()) {
                    errorBuilder.append("行 ").append(diagnostic.getLineNumber())
                        .append(": ").append(diagnostic.getMessage(Locale.getDefault()))
                        .append("\n");
                }
                result.setCompileError(errorBuilder.toString());
                return result;
            }
            
            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            ByteArrayOutputStream errorStream = new ByteArrayOutputStream();
            
            PrintStream originalOut = System.out;
            PrintStream originalErr = System.err;
            java.io.InputStream originalIn = System.in;
            
            System.setOut(new PrintStream(outputStream, true, "UTF-8"));
            System.setErr(new PrintStream(errorStream, true, "UTF-8"));
            
            if (input != null && !input.isEmpty()) {
                System.setIn(new java.io.ByteArrayInputStream(input.getBytes("UTF-8")));
            }
            
            SecurityManager existingManager = System.getSecurityManager();
            if (existingManager == null || !(existingManager instanceof SandboxSecurityManager)) {
                System.setSecurityManager(new SandboxSecurityManager());
            }
            
            try {
                SandboxSecurityManager.setAllowedDir(tempDir.getAbsolutePath());
                SandboxSecurityManager.enterSandbox();
                
                URLClassLoader classLoader = new URLClassLoader(new URL[]{tempDir.toURI().toURL()});
                Class<?> compiledClass = classLoader.loadClass(actualClassName);
                
                Callable<String> task1 = () -> {
                    try {
                        Method mainMethod = compiledClass.getMethod("main", String[].class);
                        mainMethod.invoke(null, (Object) new String[]{});
                        return outputStream.toString("UTF-8");
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                };
                
                Future<String> future = executorService.submit(task1);
                
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
            result.setError("系统错误: " + e.getMessage());
        } finally {
            if (sourceFile != null && sourceFile.exists()) {
                sourceFile.delete();
            }
            File classFile = new File(tempDir, actualClassName + ".class");
            if (classFile.exists()) {
                classFile.delete();
            }
            if (tempDir.exists()) {
                tempDir.delete();
            }
        }
        
        result.setExecutionTime(System.currentTimeMillis() - startTime);
        return result;
    }
    
    private String extractClassName(String code) {
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("public\\s+class\\s+(\\w+)");
        java.util.regex.Matcher matcher = pattern.matcher(code);
        if (matcher.find()) {
            return matcher.group(1);
        }
        return null;
    }
}
