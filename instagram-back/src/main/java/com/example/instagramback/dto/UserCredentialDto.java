package com.example.instagramback.dto;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.validation.annotation.Validated;

import com.example.instagramback.constants.validation.Message;
import com.example.instagramback.constants.validation.Patterns;
import com.example.instagramback.entity.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Validated
@Getter
@Setter
@NoArgsConstructor
public class UserCredentialDto {

    private long id;
    @Email(message = Message.EMAIL)
    private String email;
    @NotBlank(message = Message.PASSWORD_BLANK)
    @Size(max = 25, message = Message.PASSWORD_MAX)
    @Size(min = 5, message = Message.PASSWORD_MIN)
    private String password;
    @Pattern(regexp = Patterns.USER_NAME, message = Message.USER_NAME)
    @Size(max = 25, message = Message.USER_NAME_MAX)
    @NotBlank(message = Message.USER_NAME_MAX)
    private String username;
    private Set<Role> roles;
}
