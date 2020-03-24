package com.zsk.service.impl;

import com.zsk.mapper.WorkExperienceMapper;
import com.zsk.pojo.WorkExperience;
import com.zsk.pojo.WorkExperienceExample;
import com.zsk.service.WorkExperienceService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkExperienceServiceImpl implements WorkExperienceService {
    @Autowired
   private WorkExperienceMapper mapper;

    @Override
    public ServerResponse add(WorkExperience workExperience) {
        int insert = mapper.insert(workExperience);
        if (insert>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(WorkExperience workExperience) {
        WorkExperienceExample workExperienceExample = new WorkExperienceExample();
        WorkExperienceExample.Criteria criteria = workExperienceExample.createCriteria();
        criteria.andWorkExperiIdEqualTo(workExperience.getWorkExperiId());
        int insert = mapper.updateByExample(workExperience, workExperienceExample);
        if (insert>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
        WorkExperience workExperience = mapper.selectByPrimaryKey(id);
        workExperience.setStatus(0);
        int insert = mapper.updateByPrimaryKey(workExperience);

        if (insert>0)
            return ServerResponse.deleteSuccess();
        else
            return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {
        WorkExperience workExperience = mapper.selectByPrimaryKey(id);
        if (workExperience!=null)
            return ServerResponse.getSuccess(workExperience);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAll() {
        WorkExperienceExample workExperienceExample = new WorkExperienceExample();
        WorkExperienceExample.Criteria criteria = workExperienceExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<WorkExperience> workExperienceList = mapper.selectByExample(workExperienceExample);
        return null;
    }

    @Override
    public ServerResponse getAllWorkByResumeId(Integer id) {
        WorkExperienceExample workExperienceExample = new WorkExperienceExample();
        WorkExperienceExample.Criteria criteria = workExperienceExample.createCriteria();
        criteria.andResumeIdEqualTo(id);
        criteria.andStatusEqualTo(1);
        List<WorkExperience> workExperiences = mapper.selectByExample(workExperienceExample);
        if (workExperiences!=null&&workExperiences.size()>0)
            return ServerResponse.getSuccess(workExperiences);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAllLatestWork(Integer id) {
        WorkExperienceExample workExperienceExample = new WorkExperienceExample();
        WorkExperienceExample.Criteria criteria = workExperienceExample.createCriteria();
        criteria.andResumeIdEqualTo(id);
        criteria.andStatusEqualTo(1);
        /*workExperienceExample.setOrderByClause("work_experi_id desc");*/
        List<WorkExperience> workExperiences = mapper.selectByExample(workExperienceExample);
        if (workExperiences!=null && workExperiences.size()>0)
            return ServerResponse.getSuccess(workExperiences.get(0));
        else
            return ServerResponse.getFail();
    }

}
