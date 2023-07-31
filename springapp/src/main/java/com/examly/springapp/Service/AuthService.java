package com.examly.springapp.service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.AuthRepository;
import java.util.List;
import java.util.Optional;

@Service
public class AuthService {

@Autowired
public AuthRepository authRepo;


public UserModel saveUser(UserModel user){
    return authRepo.save( user);
}

public UserModel saveAdmin(UserModel user){
    return authRepo.save(user);
}

public List<UserModel> getAll() {
	return authRepo.findAll();
}
}
