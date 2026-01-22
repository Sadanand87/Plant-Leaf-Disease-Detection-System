package com.backend.first.usermanagementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.first.usermanagementsystem.repository.UserRepo;

@Service
public class OurUserDetailsService implements UserDetailsService {

	  @Autowired
	    private UserRepo userRepo;

		@Override
		public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
			return userRepo.findByEmail(username).orElseThrow();
		}
}
