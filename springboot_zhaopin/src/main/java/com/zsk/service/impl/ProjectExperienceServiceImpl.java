package com.zsk.service.impl;

import com.zsk.mapper.ProjectExperienceMapper;
import com.zsk.pojo.ProjectExperience;
import com.zsk.pojo.ProjectExperienceExample;
import com.zsk.service.ProjectExperienceService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectExperienceServiceImpl implements ProjectExperienceService {
    @Autowired
    private ProjectExperienceMapper mapper;
    @Override
    public ServerResponse add(ProjectExperience projectExperience) {
        int insert = mapper.insert(projectExperience);
        if (insert>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(ProjectExperience projectExperience) {
        ProjectExperienceExample example = new ProjectExperienceExample();
        ProjectExperienceExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andProjectExperiIdEqualTo(projectExperience.getProjectExperiId());
        int i = mapper.updateByExample(projectExperience, example);
        if (i > 0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
        ProjectExperience projectExperience = mapper.selectByPrimaryKey(id);
        projectExperience.setStatus(0);
        int i = mapper.updateByPrimaryKey(projectExperience);
        return null;
    }

    @Override
    public ServerResponse getById(Integer id) {
        ProjectExperience projectExperience = mapper.selectByPrimaryKey(id);
        return null;
    }

    @Override
    public ServerResponse getAll() {
        ProjectExperienceExample projectExperienceExample = new ProjectExperienceExample();
        ProjectExperienceExample.Criteria criteria = projectExperienceExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<ProjectExperience> projectExperienceList = mapper.selectByExample(projectExperienceExample);
        return null;
    }

    @Override
    public ServerResponse getAllProJectExperienceByResumeId(Integer resumeId) {
        ProjectExperienceExample projectExperienceExample = new ProjectExperienceExample();
        ProjectExperienceExample.Criteria criteria = projectExperienceExample.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andResumeIdEqualTo(resumeId);
        List<ProjectExperience> projectExperienceList = mapper.selectByExample(projectExperienceExample);
        if (projectExperienceList!=null&&projectExperienceList.size()>0)
            return ServerResponse.getSuccess(projectExperienceList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getLatestProJectExperienceByResumeId(Integer resumeId) {
        ProjectExperienceExample p = new ProjectExperienceExample();
        ProjectExperienceExample.Criteria criteria = p.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andResumeIdEqualTo(resumeId);
        p.setOrderByClause("project_experi_id desc");
        List<ProjectExperience> projectExperienceList = mapper.selectByExample(p);
        if (projectExperienceList !=null && projectExperienceList.size()>0)
            return ServerResponse.getSuccess(projectExperienceList.get(0));
        else
            return ServerResponse.getFail();

    }
}
