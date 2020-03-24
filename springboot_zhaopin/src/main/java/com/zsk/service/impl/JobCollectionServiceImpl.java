package com.zsk.service.impl;

import com.zsk.mapper.CompanyMapper;
import com.zsk.mapper.JobCollectionMapper;
import com.zsk.pojo.*;
import com.zsk.service.CompanyService;
import com.zsk.service.JobCollectionService;
import com.zsk.service.JobService;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JobCollectionServiceImpl implements JobCollectionService {
    @Autowired
    private JobCollectionMapper mapper;
    @Autowired
    private JobService jobService;
    @Autowired
    private CompanyMapper companyMapper;
    @Override
    public ServerResponse add(JobCollection jobCollection) {
        int insert = mapper.insert(jobCollection);
        if (insert>0)
            return ServerResponse.addSuccess();
        else return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(JobCollection jobCollection) {
        return null;
    }

    @Override
    public ServerResponse delete(Integer id) {
        int i = mapper.deleteByPrimaryKey(id);
        if (i>0)
            return ServerResponse.deleteSuccess();
        else return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {
        JobCollectionExample example = new JobCollectionExample();
        JobCollectionExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo("1");
        criteria.andJobIdEqualTo(id);
        List<JobCollection> jobCollections = mapper.selectByExample(example);
        if (jobCollections!=null&&jobCollections.size()>0)
            return ServerResponse.getSuccess(jobCollections);
        else return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAll() {
        List<JobCollection> jobCollections = mapper.selectByExample(null);
        if (jobCollections!=null &&jobCollections.size()>0)
            return ServerResponse.getSuccess(jobCollections);
        else return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getalljobcollectin(Integer custId) {
        JobCollectionExample example = new JobCollectionExample();
        JobCollectionExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo("1");
        criteria.andCustIdEqualTo(custId);
        List<JobCollection> jobCollections = mapper.selectByExample(example);
        if (jobCollections!=null &&jobCollections.size()>0) {
            List<JobComDate> jclist = new ArrayList<>();
            for (int i=0;i<jobCollections.size();i++){
                JobComDate jc = new JobComDate();
                Date collectTime = jobCollections.get(i).getCollectTime();
                System.out.println("日期："+collectTime);
                jc.setDate(collectTime);
                int jobid = jobCollections.get(i).getJobId();
                ServerResponse byId = jobService.getByIdt(jobid);
                Job job = (Job) byId.getData();
                jc.setJob(job);
                jc.setCompany(companyMapper.selectByPrimaryKey(job.getCompanyId()));
                jclist.add(jc);
            }

            return ServerResponse.getSuccess(jclist);
        }
        else return ServerResponse.getFail();
    }
}
