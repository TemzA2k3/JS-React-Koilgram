package com.example.instagramback.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.instagramback.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

//    @Transactional
//    @Modifying
//    @Query("update User u set u.email = ?1, u.firstName = ?2, u.lastName = ?3, u.phoneNumber = ?4 where u.id = ?5")
//    void setUserInfoById(String email, String firstName, String lastName, String phoneNumber, long id);

}
