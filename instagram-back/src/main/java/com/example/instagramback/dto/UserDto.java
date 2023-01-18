package com.example.instagramback.dto;

import java.util.Set;

import javax.validation.constraints.Email;
import org.springframework.validation.annotation.Validated;

import com.example.instagramback.constants.validation.Message;
import com.example.instagramback.entity.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Validated
@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private long id;
    @Email(message = Message.EMAIL)
    private String email;
    private Set<Role> roles;

}
