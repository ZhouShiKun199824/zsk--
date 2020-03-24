package com.zsk.service;

import com.zsk.pojo.ProjectExperience;
import com.zsk.util.ServerResponse;

public interface ProjectExperienceService extends BaseService<ProjectExperience> {
    public ServerResponse getAllProJectExperienceByResumeId(Integer resumeId);
    public ServerResponse getLatestProJectExperienceByResumeId(Integer resumeId);
}
