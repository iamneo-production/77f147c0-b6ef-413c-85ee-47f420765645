
package com.examly.springapp.service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Profile;
import com.examly.springapp.repository.ProfileRepository;


@Service
public class ProfileService {
    
	@Autowired
    public ProfileRepository profileRepo;


    public List<Profile> getProfileAll() {
		
		return profileRepo.findAll();
	}
   
    public Profile getProfileById(long id) {
        Profile profileOptional = profileRepo.findById(id);
        return profileOptional; // Or handle the case when the profile is not found.
    }
   
   
       

}