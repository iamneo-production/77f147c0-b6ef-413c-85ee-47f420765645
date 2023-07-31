package com.examly.springapp.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.LoginModel;

import com.examly.springapp.Response.LoginResponse;
import com.examly.springapp.Service.AuthService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin
public class AuthController {
		 @Autowired
	     private AuthService AuthService;
		
		
	
		 @PostMapping("/user/login")
		    public ResponseEntity<?> isUserPresent(@RequestBody LoginModel data)
		    {
		        LoginResponse loginResponse = AuthService.isUserPresent(data);
		        return ResponseEntity.ok(loginResponse);
		    }
		 @PostMapping("/admin/login")
		    public ResponseEntity<?> isAdminPresent(@RequestBody LoginModel data)
		    {
		        LoginResponse loginResponse = AuthService.isAdminPresent(data);
		        return ResponseEntity.ok(loginResponse);
		    }
	}