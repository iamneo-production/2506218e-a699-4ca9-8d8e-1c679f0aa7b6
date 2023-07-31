package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
@Id

    private String id;
    private String email;
    private String username;
    private String password;
    private String moblieNumber;


    private String userRole;

}
