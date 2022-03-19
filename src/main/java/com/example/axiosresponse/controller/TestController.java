package com.example.axiosresponse.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/test")
@RestController
public class TestController {

    @GetMapping("/{statusCode}")
    public ResponseEntity<String> response(@PathVariable("statusCode") Integer statusCode) {
        final HttpStatus httpStatus = HttpStatus.valueOf(statusCode);
        return new ResponseEntity<>(httpStatus.name(), httpStatus);
    }
}
