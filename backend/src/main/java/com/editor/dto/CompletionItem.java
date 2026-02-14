package com.editor.dto;

import java.util.List;

public class CompletionItem {
    
    private String name;
    
    private String type;
    
    private String kind;
    
    private String detail;
    
    private String insertText;

    public CompletionItem() {
    }

    public CompletionItem(String name, String type, String kind, String detail, String insertText) {
        this.name = name;
        this.type = type;
        this.kind = kind;
        this.detail = detail;
        this.insertText = insertText;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getInsertText() {
        return insertText;
    }

    public void setInsertText(String insertText) {
        this.insertText = insertText;
    }
}
