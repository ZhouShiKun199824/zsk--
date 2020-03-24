package com.zsk.pojo;

import java.util.Date;

public class ResumeJobDate {
    private Resume resume;
    private Job job;
    private Date date;

    public ResumeJobDate() {
    }

    public ResumeJobDate(Resume resume, Job job, Date date) {
        this.resume = resume;
        this.job = job;
        this.date = date;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    @Override
    public String toString() {
        return "ResumeJobDate{" +
                "resume=" + resume +
                ", job=" + job +
                ", date=" + date +
                '}';
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
