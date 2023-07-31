package com.examly.springapp.controller;

import com.examly.springapp.model.Job;
import com.examly.springapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.UserService;

import java.util.List;

@RestController
// @RequestMapping(path = "api/user")
@CrossOrigin("*")
public class AuthController {


    @Autowired(required = true)
    UserService userService;


    @PostMapping(path = "/register/")
    public User createUser(@RequestBody User user) {

        return userService.createUser(user);

    }

    @GetMapping("/login")
    public String loginUser(@RequestParam String email, @RequestParam String password) {

        return userService.logUser(email,password);

    }

//    @GetMapping("fetch/{email}")
//    public String getUserByMailId(@PathVariable("email") String email)  {
//        return userService.fetchByUserByEmail(email);
//    }
@GetMapping("/verifyuser/{userId}")

    public String verifyUser(@PathVariable("userId")String userId){
        return userService.verifyUser( userId);
}

@GetMapping("fetch/allusers")
    public List<User> findAllUsers(){
        return userService.findAllUsers();
}

@GetMapping("/admin/profile")
    public List<User> getallUsers(){
        return userService.findAllUsers();
}

@GetMapping("fetch/withemail/{email}")
        public User finduserbyemail(@PathVariable("email") String email){
                return userService.findUserByMail(email);

}
}

