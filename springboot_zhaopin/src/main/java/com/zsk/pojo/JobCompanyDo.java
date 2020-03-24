package com.zsk.pojo;

public class JobCompanyDo {
    private Job job;
    private Company company;

    public JobCompanyDo() {
    }

    public JobCompanyDo(Job job, Company company) {
        this.job = job;
        this.company = company;
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

    @Override
    public String toString() {
        return "JobCompanyDo{" +
                "job=" + job +
                ", company=" + company +
                '}';
    }
}
