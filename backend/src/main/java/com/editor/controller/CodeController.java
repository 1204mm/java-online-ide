package com.editor.controller;

import com.editor.dto.CodeRequest;
import com.editor.dto.CodeResult;
import com.editor.dto.CompletionItem;
import com.editor.service.CodeCompletionService;
import com.editor.service.CodeExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CodeController {
    
    @Autowired
    private CodeExecutionService codeExecutionService;
    
    @Autowired
    private CodeCompletionService codeCompletionService;
    
    @PostMapping("/run")
    public ResponseEntity<CodeResult> runCode(@Valid @RequestBody CodeRequest request) {
        CodeResult result = codeExecutionService.executeCode(
            request.getCode(),
            request.getClassName(),
            request.getInput(),
            request.getTimeout()
        );
        return ResponseEntity.ok(result);
    }
    
    @GetMapping("/completions")
    public ResponseEntity<List<CompletionItem>> getCompletions(
        @RequestParam(required = false) String className,
        @RequestParam(required = false) String prefix
    ) {
        List<CompletionItem> completions = codeCompletionService.getCompletions(className, prefix);
        return ResponseEntity.ok(completions);
    }
    
    @GetMapping("/classes")
    public ResponseEntity<List<CompletionItem>> getAllClasses() {
        List<CompletionItem> classes = codeCompletionService.getAllClasses();
        return ResponseEntity.ok(classes);
    }
    
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");
    }
}
