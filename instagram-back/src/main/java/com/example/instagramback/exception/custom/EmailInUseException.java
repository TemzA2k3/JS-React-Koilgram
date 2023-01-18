package com.example.instagramback.exception.custom;

public class EmailInUseException extends RuntimeException {

    public EmailInUseException(String message) {
        super(message);
    }
}
