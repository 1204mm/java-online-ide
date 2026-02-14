package com.editor.dto;

import javax.validation.constraints.NotBlank;

public class CodeRequest {
    
    @NotBlank(message = "代码不能为空")
    private String code;
    
    private String className;
    
    private String input;
    
    private int timeout = 5000;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }

    public int getTimeout() {
        return timeout;
    }

    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }
}
