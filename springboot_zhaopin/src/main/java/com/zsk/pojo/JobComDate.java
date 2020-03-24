package com.zsk.pojo;

import java.util.Date;

public class JobComDate {
    private Job job;
    private Company company;
    private Date date;

    public JobComDate() {
    }

    public JobComDate(Job job, Company company, Date date) {
        this.job = job;
        this.company = company;
        this.date = date;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "JobComDate{" +
                "job=" + job +
                ", company=" + company +
                ", date=" + date +
                '}';
    }
}
