package com.zsk.pojo;

import java.util.List;

public class ResumeVO {
    private Resume resume;
    private List<WorkExperience> workExperienceList;
    private List<ProjectExperience> projectExperienceList;
    private List<Skill> skillList;
    private List<Honor> honorList;

    public ResumeVO() {
    }

    public ResumeVO(Resume resume, List<WorkExperience> workExperienceList, List<ProjectExperience> projectExperienceList, List<Skill> skillList, List<Honor> honorList) {
        this.resume = resume;
        this.workExperienceList = workExperienceList;
        this.projectExperienceList = projectExperienceList;
        this.skillList = skillList;
        this.honorList = honorList;
    }

    public Resume getResume() {
        return resume;
    }

    public void setResume(Resume resume) {
        this.resume = resume;
    }

    public List<WorkExperience> getWorkExperienceList() {
        return workExperienceList;
    }

    public void setWorkExperienceList(List<WorkExperience> workExperienceList) {
        this.workExperienceList = workExperienceList;
    }

    public List<ProjectExperience> getProjectExperienceList() {
        return projectExperienceList;
    }

    public void setProjectExperienceList(List<ProjectExperience> projectExperienceList) {
        this.projectExperienceList = projectExperienceList;
    }

    public List<Skill> getSkillList() {
        return skillList;
    }

    public void setSkillList(List<Skill> skillList) {
        this.skillList = skillList;
    }

    public List<Honor> getHonorList() {
        return honorList;
    }

    public void setHonorList(List<Honor> honorList) {
        this.honorList = honorList;
    }

    @Override
    public String toString() {
        return "ResumeVO{" +
                "resume=" + resume +
                ", workExperienceList=" + workExperienceList +
                ", projectExperienceList=" + projectExperienceList +
                ", skillList=" + skillList +
                ", honorList=" + honorList +
                '}';
    }
}
