package com.example.instagramback.enums.mail;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MailMessageTemplates {
    REGISTER("Registration notification",
        "<h3>You have been successfully registered at koilgram</h3>"),
    PASS_CHANGE("Password changed",
        "<h3>You have been changed password at koilgram.com</h3>"),
    PASS_RECOVERY("Password recovery",
        "<h3>You have been ask for recovery pass. There it is :</h3>");
    private final String mailSubject;
    private final String mailMessage;
}
