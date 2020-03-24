package com.zsk.service.impl;

import com.zsk.mapper.SkillMapper;
import com.zsk.pojo.Skill;
import com.zsk.pojo.SkillExample;
import com.zsk.service.SkillService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillServiceImpl implements SkillService {
    @Autowired
    private SkillMapper mapper;
    @Override
    public ServerResponse add(Skill skill) {
        int insert = mapper.insert(skill);
        if (insert>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(Skill skill) {
        int insert = mapper.updateByPrimaryKey(skill);
        if (insert>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
        Skill skill = mapper.selectByPrimaryKey(id);
        skill.setStatus(0);
        int i = mapper.updateByPrimaryKey(skill);
        if (i>0)
            return ServerResponse.deleteSuccess();
        else
            return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {
        Skill skill = mapper.selectByPrimaryKey(id);
        return null;
    }

    @Override
    public ServerResponse getAll() {
        SkillExample skillExample = new SkillExample();
        SkillExample.Criteria criteria = skillExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Skill> skillList = mapper.selectByExample(skillExample);
        if (skillList!=null&&skillList.size()>0)
            return ServerResponse.getSuccess(skillList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAllSkillByResumeId(Integer id) {
        SkillExample skillExample = new SkillExample();
        SkillExample.Criteria criteria = skillExample.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andResumeIdEqualTo(id);
        List<Skill> skills = mapper.selectByExample(skillExample);
       if (skills!=null&&skills.size()>0)
           return ServerResponse.getSuccess(skills);
       else
           return ServerResponse.getFail();
    }
}
