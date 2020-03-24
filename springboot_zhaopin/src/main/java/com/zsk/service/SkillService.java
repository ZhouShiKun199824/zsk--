package com.zsk.service;

import com.zsk.pojo.Skill;
import com.zsk.util.ServerResponse;

public interface SkillService extends BaseService<Skill> {
    public ServerResponse getAllSkillByResumeId(Integer id);
}
