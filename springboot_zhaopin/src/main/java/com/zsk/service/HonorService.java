package com.zsk.service;

import com.zsk.pojo.Honor;
import com.zsk.util.ServerResponse;

public interface HonorService extends BaseService<Honor> {
    public ServerResponse getAllHonorByResumeId(Integer resumeId);
}
