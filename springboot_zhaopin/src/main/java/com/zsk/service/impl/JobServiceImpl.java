package com.zsk.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zsk.mapper.CompanyMapper;
import com.zsk.mapper.JobMapper;
import com.zsk.pojo.Company;
import com.zsk.pojo.Job;
import com.zsk.pojo.JobCompanyDo;
import com.zsk.pojo.JobExample;
import com.zsk.service.JobService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private JobMapper mapper;
    @Autowired
    private CompanyMapper companyMapper;
    @Override
    public ServerResponse add(Job job) {
        int insert = mapper.insert(job);
        return null;
    }

    @Override
    public ServerResponse modify(Job job) {
        int insert = mapper.updateByPrimaryKey(job);
        boolean a=false;
        return null;
    }

    @Override
    public ServerResponse delete(Integer id) {
        Job job = mapper.selectByPrimaryKey(id);
        job.setStatus(0);
        int insert = mapper.updateByPrimaryKey(job);
        return null;
    }

    @Override
    public ServerResponse getById(Integer id) {
        Job job = mapper.selectByPrimaryKey(id);
        Company company = companyMapper.selectByPrimaryKey(job.getCompanyId());
        JobCompanyDo jobCompanyDo = new JobCompanyDo();
        jobCompanyDo.setJob(job);
        jobCompanyDo.setCompany(company);

        if (jobCompanyDo != null)
            return ServerResponse.getSuccess(jobCompanyDo);
        else
            return ServerResponse.addFail();

    }
    @Override
    public ServerResponse getByIdt(Integer id) {
        Job job = mapper.selectByPrimaryKey(id);
        return ServerResponse.getSuccess(job);

    }

    @Override
    public ServerResponse getAll() {
        JobExample jobExample = new JobExample();
        JobExample.Criteria criteria = jobExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Job> jobList = mapper.selectByExample(jobExample);
        if (jobList!=null&&jobList.size()>0)
            return ServerResponse.getSuccess(jobList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAllJobByCompanyId(Integer companyId) {
        JobExample jobExample = new JobExample();
        JobExample.Criteria criteria = jobExample.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andCompanyIdEqualTo(companyId);
        List<Job> jobList = mapper.selectByExample(jobExample);
        if (jobList!=null&&jobList.size()>0)
            return ServerResponse.getSuccess(jobList);
        else
            return ServerResponse.getFail();
    }
    @Override
    public ServerResponse getlatestjob() {
        JobExample jobExample = new JobExample();
        JobExample.Criteria criteria = jobExample.createCriteria();
        criteria.andStatusEqualTo(1);
        //按照日期查询
        jobExample.getOrderByClause("job_publish_time desc");
        Page<Object> objects = PageHelper.startPage(1, 10);
        List<Job> jobList = mapper.selectByExample(jobExample);

        /*select * from job j
        where status = 0
        order by j.job_publish_time desc
        limit 0,10*/
        /*for (Job j:jobList) {
            Date date = j.getJobPublishTime();
            j.setJobPublishTime(date);
        }*/
        if (jobList!=null&&jobList.size()>0)
            return ServerResponse.getSuccess(jobList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getbynameorkw(String kw, Integer pagenum) {
        JobExample jobExample = new JobExample();
        JobExample.Criteria criteria = jobExample.createCriteria();
        JobExample.Criteria criteria2  = jobExample.createCriteria();
        JobExample.Criteria criteria3  = jobExample.createCriteria();
         //状态1
        criteria.andStatusEqualTo(1);
        criteria2.andJobNameLike(kw);
        criteria3.andJobSearchKeywordLike(kw);

        //把两个or条件单独加进去
        jobExample.or(criteria2);
        jobExample.or(criteria3);
        //按照日期排序查询
        jobExample.getOrderByClause("job_publish_time desc");

        Page<Job> page = PageHelper.startPage(pagenum, 5);
        List<Job> jobList = mapper.selectByExample(jobExample);

        PageInfo<Job> jobPageInfo = page.toPageInfo();
        if (jobList != null && jobList.size()>0){
            return ServerResponse.getSuccess(jobPageInfo);
        }else{
            return ServerResponse.getFail();
        }
    }

    @Override
    public ServerResponse getByManyMany(Integer pageNum, String kw, Date pulishtime, BigDecimal minsalary, BigDecimal maxsalary, String workyear, String degree) {
        JobExample jobExample = new JobExample();
        JobExample.Criteria criteria1 = jobExample.createCriteria();
        JobExample.Criteria criteria2 = jobExample.createCriteria();
        //查询状态为1
        criteria1.andStatusEqualTo(1);
        criteria2.andStatusEqualTo(1);

        //关键字条件
        if (kw != null && !"".equals(kw)) {
            criteria1.andJobSearchKeywordLike("%"+kw+"%");
            criteria2.andJobNameLike("%"+kw+"%");
        }

        if (pulishtime != null) {
            criteria1.andJobPublishTimeGreaterThan(pulishtime);
            criteria2.andJobPublishTimeGreaterThan(pulishtime);
        }

        //薪资大于最小，小于最大
        if (maxsalary != null){
            criteria1.andJobMinSalaryLessThanOrEqualTo(maxsalary);
            criteria2.andJobMinSalaryLessThanOrEqualTo(maxsalary);
        }

        if (minsalary != null){
            criteria1.andJobMaxSalaryGreaterThanOrEqualTo(minsalary);
            criteria2.andJobMaxSalaryGreaterThanOrEqualTo(minsalary);
        }



        if (workyear != null && !"".equals(workyear)){
            criteria1.andJobYearLike("%"+workyear+"%");
            criteria2.andJobYearLike("%"+workyear+"%");
        }

        if (degree != null && !"".equals(degree)){
            criteria1.andJobDegreeLike("%"+degree+"%");
            criteria2.andJobDegreeLike("%"+degree+"%");
        }

        jobExample.or(criteria2);
        List<JobCompanyDo> jobCompanyDoList = new ArrayList<>();

        if (pageNum == null)
            pageNum = 1;
        Page<Job> page = PageHelper.startPage(pageNum, 5);
        List<Job> jobList = mapper.selectByExample(jobExample);
        PageInfo PageInfo = page.toPageInfo();

        if (jobList != null && jobList.size()>0) {
            for (Job j : jobList) {
                Company company = companyMapper.selectByPrimaryKey(j.getCompanyId());
                /*System.out.println("comapny:"+company.getCompanyName());*/
                JobCompanyDo jobCompanyDo = new JobCompanyDo(j, company);
                jobCompanyDoList.add(jobCompanyDo);
            }
            PageInfo.setList(jobCompanyDoList);
            return ServerResponse.getSuccess(PageInfo);
        }
        else
            return ServerResponse.getFail();


    }
}
