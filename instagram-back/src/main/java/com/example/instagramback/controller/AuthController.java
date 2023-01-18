package com.example.instagramback.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instagramback.converter.UserDtoConverter;
import com.example.instagramback.dto.UserDto;
import com.example.instagramback.entity.User;
import com.example.instagramback.service.user.UserService;

@RestController
@RequestMapping("/login")

public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserDto authenticate(Principal principal) throws RuntimeException {
        User user = userService.getByEmail(principal.getName());
        UserDto userDto = UserDtoConverter.convertUserToDto(user);
        return userDto;
    }
}

