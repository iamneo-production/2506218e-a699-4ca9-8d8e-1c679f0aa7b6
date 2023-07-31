package com.examly.springapp.service;

import com.examly.springapp.model.Admin;
import com.examly.springapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImplementation implements AdminService{

    @Autowired
    AdminRepository adminRepository;

    @Override
    public String existsByadminId(String userId) {
        if(adminRepository.existsById(userId))
            return "granted";
        else
            return "denied";
    }

    public String logUser(String email, String password) {
//        if(adminRepository.existsByemailAndpassword(email,password)){
//            return "allow";
//        }else{
//            return "deny";
//        }
        return "";
    }

    @Override
    public Admin findAdminByMail(String email) {
        return adminRepository.findByemail(email);
    }


}
