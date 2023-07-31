package com.examly.springapp.controller;

import com.examly.springapp.model.Admin;
import com.examly.springapp.model.JobSeeker;
import com.examly.springapp.model.User;
import com.examly.springapp.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
// @RequestMapping(path = "api/admin",path="admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    AdminService adminService;

//    @GetMapping("/verifyadmin/{adminId}")
//
//
//    public String verifyUser(@PathVariable("adminId")String adminId){
//        return adminService.existsByadminId(adminId);
//    }
    @PostMapping(path = "/adminlogin")
    public String loginUser(@RequestBody Admin admin) {

        return adminService.logUser(admin.getEmail(), admin.getPassword());

    }
    @GetMapping("fetch/withemail/{email}")
    public Admin finduserbyemail(@PathVariable("email") String email){
        return adminService.findAdminByMail(email);

    }

}
