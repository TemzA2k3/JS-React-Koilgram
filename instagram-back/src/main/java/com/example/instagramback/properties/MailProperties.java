package com.example.instagramback.properties;

import javax.validation.constraints.NotBlank;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import lombok.Getter;
import lombok.Setter;

@Configuration
@Validated
@ConfigurationProperties("server-mail")
@Getter
@Setter
public class MailProperties {

    @NotBlank
    private String password;
    @NotBlank
    private String login;
    @NotBlank
    private String host;
    @NotBlank
    private String port;

}

