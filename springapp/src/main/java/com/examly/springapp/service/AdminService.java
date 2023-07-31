package com.examly.springapp.service;

import com.examly.springapp.model.Admin;
import org.springframework.stereotype.Component;


public interface AdminService {
    public String existsByadminId(String userId);
    public  String logUser(String email,String password);

    Admin findAdminByMail(String email);
}
