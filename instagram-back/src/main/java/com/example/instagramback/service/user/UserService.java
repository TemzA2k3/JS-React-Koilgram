package com.example.instagramback.service.user;

import javax.mail.MessagingException;
import javax.transaction.Transactional;

import com.example.instagramback.entity.User;
import com.example.instagramback.exception.custom.EmailInUseException;

@Transactional
public interface UserService {
    void saveUser(User user) throws EmailInUseException, MessagingException;
    User getByEmail(String email);
}
