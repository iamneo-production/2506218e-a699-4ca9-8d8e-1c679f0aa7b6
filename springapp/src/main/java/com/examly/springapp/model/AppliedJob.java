package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppliedJob {
    @Id
    private String appliedJobId;
    private String jobId;
    private String personId;
    private String firstName;
    private String address;
    private String email;
    private String phoneNumber;
    private String yearOfExperience;

    private String jobStatus;
    private String jobUserId;

    private String job_location;

    private String job_description;
    private  Date to_date;
    private Date from_date;
    private String wage_per_day;


    private String activeStatus;
}
