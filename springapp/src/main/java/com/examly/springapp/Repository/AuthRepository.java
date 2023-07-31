package com.examly.springapp.repository;

import java.util.*;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.UserModel;



@Repository
public interface AuthRepository  extends JpaRepository<UserModel, Long> {

	UserModel findByEmail(String email);
	
	Optional<UserModel> findOneByEmailAndPassword(String email, String password);
	UserModel findById(long userId);
	


}

