package com.zsk.service;

import com.zsk.pojo.JobCollection;
import com.zsk.util.ServerResponse;

public interface JobCollectionService extends BaseService<JobCollection> {
    public ServerResponse getalljobcollectin(Integer custId);
}
