package com.examly.springapp.Controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Service.AuthService;
import com.examly.springapp.Repository.AuthRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin
public class AuthController {
		@Autowired(required = true)
	     private AuthService AuthService;

		 public AuthController(AuthService authService) {
			AuthService = authService;
		}

		@Autowired
		 private AuthRepository authRepo;

		@PostMapping("/user/signup")
		 public UserModel saveUser(@RequestBody UserModel user){
		         return AuthService.saveUser(user);
		 }

		 @PostMapping("/admin/signup")
		 public UserModel saveAdmin(@RequestBody UserModel user){
		                return AuthService.saveAdmin(user);
		        }

	}

