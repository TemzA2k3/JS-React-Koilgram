package com.example.instagramback.service.user;

import javax.mail.MessagingException;
import javax.transaction.Transactional;

import com.example.instagramback.entity.User;
import com.example.instagramback.exception.custom.UserInputAlreadyInUse;

@Transactional
public interface UserService {
    void saveUser(User user) throws UserInputAlreadyInUse, MessagingException;
    User getByEmail(String email);
    User getByUsername(String username);
}
