package com.zsk.service;

import com.zsk.pojo.WorkExperience;
import com.zsk.util.ServerResponse;

public interface WorkExperienceService extends BaseService<WorkExperience> {
    public ServerResponse getAllWorkByResumeId(Integer id);
    public ServerResponse getAllLatestWork(Integer id);
}
