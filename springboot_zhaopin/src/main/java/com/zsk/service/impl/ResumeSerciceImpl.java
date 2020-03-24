package com.zsk.service.impl;

import com.zsk.mapper.ResumeMapper;
import com.zsk.pojo.*;
import com.zsk.service.*;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ResumeSerciceImpl implements ResumeService {
    @Autowired
    private ResumeMapper mapper;
    @Autowired
    private WorkExperienceService workExperienceService;
    @Autowired
    private ProjectExperienceService projectExperienceService;
    @Autowired
    private SkillService skillService;
    @Autowired
    private HonorService honorService;
    @Override
    public ServerResponse add(Resume resume) {
        int insert = mapper.insert(resume);
        if (insert>0){
            return ServerResponse.addSuccess();
        }
        return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(Resume resume) {
        int insert = mapper.updateByPrimaryKeySelective(resume);
        if (insert>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();

    }

    @Override
    public ServerResponse delete(Integer id) {
        Resume resume = mapper.selectByPrimaryKey(id);
        resume.setStatus(0);
        int i = mapper.updateByPrimaryKey(resume);
        return null;
    }

    @Override
    public ServerResponse getByIdt(Integer id){
        Resume resume = mapper.selectByPrimaryKey(id);
        return ServerResponse.getSuccess(resume);
    }
    @Override
    public ServerResponse getById(Integer id) {
        ResumeVO resumeVO = new ResumeVO();

        //获取到resume主要信息
        Resume resume = mapper.selectByPrimaryKey(id);
        resumeVO.setResume(resume);
        //获取到工作经验信息
        ServerResponse allWorkByResumeId = workExperienceService.getAllWorkByResumeId(id);
        if (allWorkByResumeId.getStatus()==1)
            resumeVO.setWorkExperienceList((List<WorkExperience>) allWorkByResumeId.getData());
        //获取到项目经验信息
        ServerResponse allProJectExperienceByResumeId = projectExperienceService.getAllProJectExperienceByResumeId(id);
        if (allProJectExperienceByResumeId.getStatus()==1)
            resumeVO.setProjectExperienceList((List<ProjectExperience>) allProJectExperienceByResumeId.getData());
        //获取到技能信息
        ServerResponse allSkillByResumeId = skillService.getAllSkillByResumeId(id);
        if (allSkillByResumeId.getStatus()==1)
            resumeVO.setSkillList((List<Skill>) allSkillByResumeId.getData());
        //获取到荣誉
        ServerResponse allHonorByResumeId = honorService.getAllHonorByResumeId(id);
        if (allHonorByResumeId.getStatus()==1)
            resumeVO.setHonorList((List<Honor>) allHonorByResumeId.getData());
        return ServerResponse.getSuccess(resumeVO);
    }

    @Override
    public ServerResponse getAll() {
        ResumeExample resumeExample = new ResumeExample();
        ResumeExample.Criteria criteria = resumeExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Resume> resumeList = mapper.selectByExample(resumeExample);
        if (resumeList!=null&&resumeList.size()>0)
            return ServerResponse.getSuccess(resumeList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAllResumeByCustomerId(Integer customerId) {
        ResumeExample resumeExample = new ResumeExample();
        ResumeExample.Criteria criteria = resumeExample.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andCustIdEqualTo(customerId);
        List<Resume> resumeList = mapper.selectByExample(resumeExample);
        if (resumeList!=null&&resumeList.size()>0)
            return ServerResponse.getSuccess(resumeList);
        else
            return ServerResponse.getFail();

    }

    @Override
    public ServerResponse getcountResume(Integer customerId) {
        ResumeExample example = new ResumeExample();
        example.createCriteria().andCustIdEqualTo(customerId);
        example.createCriteria().andStatusEqualTo(1);
        int i = mapper.countByExample(example);
        System.out.println("已经有简历数："+i);
        if (i>=3008){
            return ServerResponse.addSuccess();
        }else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getByCustIdAndTime(Integer customerId, Date date) {
        ResumeExample example = new ResumeExample();
        ResumeExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andCustIdEqualTo(customerId);
        criteria.andResumeCreateTimeEqualTo(date);
        List<Resume> resumeList = mapper.selectByExample(example);
        if (resumeList !=null && resumeList.size()>0){
            return ServerResponse.getSuccess(resumeList.get(0));
        }
        return ServerResponse.addFail();
    }
}
