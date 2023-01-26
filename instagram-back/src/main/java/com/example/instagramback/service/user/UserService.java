package com.example.instagramback.service.user;

import javax.mail.MessagingException;
import javax.transaction.Transactional;

import com.example.instagramback.entity.User;
import com.example.instagramback.exception.custom.InputedDataUsedException;

@Transactional
public interface UserService {
    void saveUser(User user) throws InputedDataUsedException, MessagingException;
    User getByEmail(String email);
    User getByUsername(String username);
}
