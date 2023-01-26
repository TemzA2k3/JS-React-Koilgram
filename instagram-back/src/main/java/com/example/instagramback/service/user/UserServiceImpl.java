package com.example.instagramback.service.user;

import java.util.Collections;

import javax.mail.MessagingException;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.instagramback.entity.Role;
import com.example.instagramback.entity.User;
import com.example.instagramback.enums.mail.MailMessageTemplates;
import com.example.instagramback.exception.custom.IncorrectMailException;
import com.example.instagramback.exception.custom.InputedDataUsedException;
import com.example.instagramback.repository.UserRepository;
import com.example.instagramback.service.mail.MailService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final MailService mailService;

    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder, MailService mailService) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.mailService = mailService;
    }

    @Override
    public void saveUser(User user) throws RuntimeException, MessagingException {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new InputedDataUsedException(String.format("Email: %s , already using by another user", user.getEmail()));
        }
        if (userRepository.findByUserName(user.getUsername()).isPresent()){
            throw new InputedDataUsedException(String.format("Username: %s , already using by another user", user.getUsername()));
        }
        user.setRoles(Collections.singleton(new Role(0)));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        mailService.sendMail(user.getEmail(), MailMessageTemplates.REGISTER.getMailMessage(), MailMessageTemplates.REGISTER.getMailSubject());
    }

    @Override
    public User getByEmail(String email) throws RuntimeException {
        return userRepository.findByEmail(email).orElseThrow(() -> new IncorrectMailException(String.format("There no user with: %s email",email)));
    }

    @Override
    public User getByUsername(String username) throws RuntimeException {
        return userRepository.findByUserName(username).orElseThrow(() -> new UsernameNotFoundException(String.format("There no user with: %s username", username)));
    }
}
