package com.zsk.service;

import com.zsk.pojo.ResumeDeliveryRecord;
import com.zsk.util.ServerResponse;

public interface ResumeDeliveryRecordService extends BaseService<ResumeDeliveryRecord> {
    public ServerResponse getbytime(ResumeDeliveryRecord record);
    public ServerResponse getAllResumeByCustomerId(Integer customerid);
}
