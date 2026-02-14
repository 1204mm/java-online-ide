package com.editor.sandbox;

import java.security.Permission;

public class SandboxSecurityManager extends SecurityManager {
    
    private static final ThreadLocal<Boolean> inSandbox = ThreadLocal.withInitial(() -> false);
    private static final ThreadLocal<String> allowedDir = new ThreadLocal<>();
    
    public static void enterSandbox() {
        inSandbox.set(true);
    }
    
    public static void exitSandbox() {
        inSandbox.set(false);
        allowedDir.remove();
    }
    
    public static void setAllowedDir(String dir) {
        allowedDir.set(dir);
    }
    
    public static boolean isInSandbox() {
        return inSandbox.get();
    }
    
    @Override
    public void checkPermission(Permission perm) {
        if (isInSandbox()) {
            String name = perm.getName();
            if ("setSecurityManager".equals(name) || "createSecurityManager".equals(name)) {
                throw new SecurityException("禁止修改安全管理器");
            }
        }
    }
    
    @Override
    public void checkPermission(Permission perm, Object context) {
        checkPermission(perm);
    }
    
    private boolean isAllowedPath(String file) {
        String allowed = allowedDir.get();
        if (allowed != null && file != null) {
            return file.startsWith(allowed);
        }
        return false;
    }
    
    @Override
    public void checkRead(String file) {
        if (isInSandbox() && !isAllowedPath(file)) {
            throw new SecurityException("禁止读取文件: " + file);
        }
    }
    
    @Override
    public void checkRead(String file, Object context) {
        if (isInSandbox() && !isAllowedPath(file)) {
            throw new SecurityException("禁止读取文件: " + file);
        }
    }
    
    @Override
    public void checkWrite(String file) {
        if (isInSandbox() && !isAllowedPath(file)) {
            throw new SecurityException("禁止写入文件: " + file);
        }
    }
    
    @Override
    public void checkDelete(String file) {
        if (isInSandbox() && !isAllowedPath(file)) {
            throw new SecurityException("禁止删除文件: " + file);
        }
    }
    
    @Override
    public void checkLink(String lib) {
        if (isInSandbox()) {
            throw new SecurityException("禁止加载本地库: " + lib);
        }
    }
    
    @Override
    public void checkExec(String cmd) {
        if (isInSandbox()) {
            throw new SecurityException("禁止执行系统命令: " + cmd);
        }
    }
    
    @Override
    public void checkConnect(String host, int port) {
        if (isInSandbox()) {
            throw new SecurityException("禁止网络连接: " + host + ":" + port);
        }
    }
    
    @Override
    public void checkConnect(String host, int port, Object context) {
        if (isInSandbox()) {
            throw new SecurityException("禁止网络连接: " + host + ":" + port);
        }
    }
    
    @Override
    public void checkListen(int port) {
        if (isInSandbox()) {
            throw new SecurityException("禁止监听端口: " + port);
        }
    }
    
    @Override
    public void checkAccept(String host, int port) {
        if (isInSandbox()) {
            throw new SecurityException("禁止接受网络连接: " + host + ":" + port);
        }
    }
    
    @Override
    public void checkMulticast(java.net.InetAddress maddr) {
        if (isInSandbox()) {
            throw new SecurityException("禁止多播");
        }
    }
    
    @Override
    public void checkPropertiesAccess() {
        if (isInSandbox()) {
            throw new SecurityException("禁止访问系统属性");
        }
    }
    
    @Override
    public void checkPropertyAccess(String key) {
        if (isInSandbox()) {
            if (!key.startsWith("java.") && !key.startsWith("sun.") && !key.startsWith("os.") 
                && !key.startsWith("line.") && !key.startsWith("file.") && !key.startsWith("path.")) {
                throw new SecurityException("禁止访问系统属性: " + key);
            }
        }
    }
    
    @Override
    public void checkPrintJobAccess() {
        if (isInSandbox()) {
            throw new SecurityException("禁止打印");
        }
    }
    
    @Override
    public void checkSystemClipboardAccess() {
        if (isInSandbox()) {
            throw new SecurityException("禁止访问剪贴板");
        }
    }
    
    @Override
    public void checkAwtEventQueueAccess() {
        if (isInSandbox()) {
            throw new SecurityException("禁止访问AWT事件队列");
        }
    }
    
    @Override
    public void checkPackageAccess(String pkg) {
    }
    
    @Override
    public void checkPackageDefinition(String pkg) {
        if (isInSandbox()) {
            if (pkg.startsWith("java.") || pkg.startsWith("javax.")) {
                throw new SecurityException("禁止定义核心包: " + pkg);
            }
        }
    }
    
    @Override
    public void checkSetFactory() {
        if (isInSandbox()) {
            throw new SecurityException("禁止设置工厂");
        }
    }
    
    @Override
    public void checkMemberAccess(Class<?> clazz, int which) {
    }
    
    @Override
    public void checkSecurityAccess(String target) {
        if (isInSandbox()) {
            if ("setSecurityManager".equals(target)) {
                throw new SecurityException("禁止修改安全管理器");
            }
        }
    }
}
