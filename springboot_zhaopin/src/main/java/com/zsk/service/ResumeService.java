package com.zsk.service;

import com.zsk.pojo.Resume;
import com.zsk.util.ServerResponse;

import java.util.Date;

public interface ResumeService extends BaseService<Resume> {
    public ServerResponse getAllResumeByCustomerId(Integer customerId);
    public ServerResponse getcountResume(Integer customerId);
    public ServerResponse getByCustIdAndTime(Integer customerId, Date date);
    public ServerResponse getByIdt(Integer id);
}
