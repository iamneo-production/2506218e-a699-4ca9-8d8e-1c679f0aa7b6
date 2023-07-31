package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {
  @Id
    private String jobId;
    private String job_description;
    private String job_location;
    private Date from_date;
    private String wage_per_day;
    private String userId;
    private String phone_number;
    private String activeStatus;
private  Date to_date;

}
