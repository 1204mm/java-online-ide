package com.editor.dto;

public class CodeResult {
    
    private boolean success;
    
    private String output;
    
    private String error;
    
    private String compileError;
    
    private long executionTime;

    public CodeResult() {
    }

    public CodeResult(boolean success, String output) {
        this.success = success;
        this.output = output;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getOutput() {
        return output;
    }

    public void setOutput(String output) {
        this.output = output;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getCompileError() {
        return compileError;
    }

    public void setCompileError(String compileError) {
        this.compileError = compileError;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }
}
