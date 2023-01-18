package com.example.instagramback.converter;

import com.example.instagramback.dto.UserDto;
import com.example.instagramback.entity.User;

public class UserDtoConverter {
    public static User convertUserDtoToUser(UserDto userDto) {
        User user = new User();
        if (userDto.getId() != 0) {
            user.setId(userDto.getId());
        }
        user.setEmail(userDto.getEmail());
        return user;
    }

    public static UserDto convertUserToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        return userDto;
    }
}
