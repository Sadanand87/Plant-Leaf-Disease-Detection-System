package com.backend.first.usermanagementsystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.first.usermanagementsystem.entity.OurUsers;

public interface UserRepo extends JpaRepository<OurUsers , Integer> {
	Optional<OurUsers> findByEmail(String email);
}
