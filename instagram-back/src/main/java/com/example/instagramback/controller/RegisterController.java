package com.example.instagramback.controller;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instagramback.constants.routs.RegisterRouts;
import com.example.instagramback.converter.UserCredentialDtoConverter;
import com.example.instagramback.dto.UserCredentialDto;
import com.example.instagramback.entity.User;
import com.example.instagramback.service.user.UserService;

@RestController
@RequestMapping(RegisterRouts.MAIN_ROUT)
public class RegisterController {

    private final UserService userService;

    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping()
    public void registerUser(@Valid @RequestBody UserCredentialDto userCredentialsDto) throws RuntimeException, MessagingException {
        User user = UserCredentialDtoConverter.convertUserCredToDto(userCredentialsDto);
        userService.saveUser(user);
    }
}
