package com.example.instagramback.converter;

import com.example.instagramback.dto.UserCredentialDto;
import com.example.instagramback.entity.User;

public class UserCredentialDtoConverter {

    public static User convertUserCredToDto(UserCredentialDto userCredentialsDto) {
        User user = new User();
        user.setPassword(userCredentialsDto.getPassword());
        user.setEmail(userCredentialsDto.getEmail());
        user.setUserName(userCredentialsDto.getUsername());
        return user;
    }
}
