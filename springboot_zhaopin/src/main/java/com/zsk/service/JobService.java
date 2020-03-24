package com.zsk.service;

import com.zsk.pojo.Job;
import com.zsk.util.ServerResponse;

import java.math.BigDecimal;
import java.util.Date;

public interface JobService extends BaseService<Job> {
    public ServerResponse getAllJobByCompanyId(Integer companyId);
    public ServerResponse getlatestjob();
    public ServerResponse getByIdt(Integer id);
    public ServerResponse getbynameorkw(String kw, Integer pagenum);
    public ServerResponse getByManyMany(Integer pageNum, String kw, Date pulishtime, BigDecimal minsalary, BigDecimal maxsalary, String workyear, String degree);

}
