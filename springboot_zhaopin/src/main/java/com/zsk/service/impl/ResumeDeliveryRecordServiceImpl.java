package com.zsk.service.impl;

import com.zsk.mapper.ResumeDeliveryRecordMapper;
import com.zsk.pojo.*;
import com.zsk.service.JobService;
import com.zsk.service.ResumeDeliveryRecordService;
import com.zsk.service.ResumeService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ResumeDeliveryRecordServiceImpl implements ResumeDeliveryRecordService {
    @Autowired
    private ResumeDeliveryRecordMapper mapper;
    @Autowired
    private ResumeService resumeService;
    @Autowired
    private JobService jobService;
    @Override
    public ServerResponse getbytime(ResumeDeliveryRecord record) {
        ResumeDeliveryRecordExample example = new ResumeDeliveryRecordExample();
        ResumeDeliveryRecordExample.Criteria criteria = example.createCriteria();
        Long ms = System.currentTimeMillis()-30*24*60*60*1000l;
        Date date = new Date(ms);
        criteria.andDeliveryStatusEqualTo(1)
                .andJobIdEqualTo(record.getJobId())
                .andResumeIdEqualTo(record.getResumeId())
                .andDeliveryTimeGreaterThan(date);
        List<ResumeDeliveryRecord> records = mapper.selectByExample(example);
        if (records!=null&&records.size()>0)
            return ServerResponse.addFail();
        else {
            int insert = mapper.insert(record);
            if (insert>0)
                return ServerResponse.addSuccess();
            else
                return ServerResponse.addFail();
        }

    }

    @Override
    public ServerResponse getAllResumeByCustomerId(Integer customerid) {
        ResumeDeliveryRecordExample example = new ResumeDeliveryRecordExample();
        ResumeDeliveryRecordExample.Criteria criteria = example.createCriteria();
        criteria.andDeliveryStatusEqualTo(1);
        criteria.andCustIdEqualTo(customerid);
        List<ResumeDeliveryRecord> resumeDeliveryRecords = mapper.selectByExample(example);
        if (resumeDeliveryRecords!=null && resumeDeliveryRecords.size()>0){
            List<ResumeJobDate> resumeJobDates = new ArrayList<>();
            for (int i=0;i<resumeDeliveryRecords.size();i++){
                ResumeJobDate resumeJobDate = new ResumeJobDate();
                Integer resumeId = resumeDeliveryRecords.get(i).getResumeId();
                ServerResponse resuser = resumeService.getByIdt(resumeId);
                ServerResponse jobser = jobService.getByIdt(resumeDeliveryRecords.get(i).getJobId());
                Resume resume = (Resume) resuser.getData();
                Job job = (Job)jobser.getData();
                resumeJobDate.setJob(job);
                resumeJobDate.setResume(resume);
                resumeJobDate.setDate(resumeDeliveryRecords.get(i).getDeliveryTime());
                resumeJobDates.add(resumeJobDate);
            }
            return ServerResponse.getSuccess(resumeJobDates);
        }

        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse add(ResumeDeliveryRecord resumeDeliveryRecord) {
        int insert = mapper.insert(resumeDeliveryRecord);
        if (insert>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(ResumeDeliveryRecord resumeDeliveryRecord) {
        return null;
    }

    @Override
    public ServerResponse delete(Integer id) {
        return null;
    }

    @Override
    public ServerResponse getById(Integer id) {
        return null;
    }

    @Override
    public ServerResponse getAll() {
        return null;
    }
}
