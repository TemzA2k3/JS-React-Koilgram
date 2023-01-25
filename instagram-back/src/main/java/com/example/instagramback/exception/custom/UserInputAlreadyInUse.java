package com.example.instagramback.exception.custom;

public class UserInputAlreadyInUse extends RuntimeException {

    public UserInputAlreadyInUse(String message) {
        super(message);
    }
}
