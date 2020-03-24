package com.zsk.controller;

import com.zsk.pojo.Customer;
import com.zsk.pojo.JobCollection;
import com.zsk.pojo.JobCompanyDo;
import com.zsk.service.JobCollectionService;
import com.zsk.service.JobService;
import com.zsk.service.impl.JobServiceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.math.BigDecimal;
import java.util.Date;

@Controller
@RequestMapping("/job")
public class JobController {
    @Autowired
    private JobService service;
    @Autowired
    private JobCollectionService jobCollectionService;

    @PostMapping("/addjobConllection")
    @ResponseBody
    public ServerResponse addjobConllection(Integer jobId,HttpServletRequest request){
        ServerResponse byId = jobCollectionService.getById(jobId);
        if (byId.getStatus()==0) {
            JobCollection jobCollection = new JobCollection();
            jobCollection.setJobId(jobId);
            jobCollection.setStatus("1");
            jobCollection.setCollectTime(new Date());
            Customer customer = (Customer) request.getSession().getAttribute("customer");
            jobCollection.setCustId(customer.getCustId());
            return jobCollectionService.add(jobCollection);
        }else
            return ServerResponse.addFail();
    }


    @RequestMapping("/getalljobconllection")
    @ResponseBody
    public ServerResponse getalljob(HttpServletRequest request){
        Customer customer = (Customer) request.getSession().getAttribute("customer");
        return jobCollectionService.getalljobcollectin(customer.getCustId());
    }



    @RequestMapping("/getall")
    @ResponseBody
    public ServerResponse getall(){
        return service.getAll();
    }

    @RequestMapping("/getlatestjob")
    @ResponseBody
    public ServerResponse getbypage(){
        return service.getlatestjob();
    }

    @RequestMapping("/searchjobkey/{key}")
    public String searchjob(@PathVariable("key") String key, HttpServletRequest request){
        if (key.equals("所有"))
            System.out.println("key:"+key);
        else
            request.setAttribute("Makey",key);
        return "/job/searchjob";
    }

    @RequestMapping("/getbyid/{jobId}")
    public String getbyid(@PathVariable("jobId") Integer jobId,HttpServletRequest request){
        ServerResponse serverResponse = service.getById(jobId);
        if (serverResponse.getStatus()==1){
            JobCompanyDo jobCompany = (JobCompanyDo) serverResponse.getData();
            request.setAttribute("jobcompany",jobCompany);
        }
        return "job/jobdetail";
    }

    @RequestMapping("/getalljob")
    @ResponseBody
    public ServerResponse getalljob( String kw,String pagenum,String degree,String workyear,String company,String publishtime,String minsalary,String maxsalary,HttpServletRequest request){
        Integer pageNum = 1;
        if (pagenum != null && !"".equals(pagenum))
            pageNum = Integer.valueOf(pagenum);

        //获取到日期
        Date publishtimea = null;

        if (publishtime != null && !"".equals(publishtime)){
            Long nowtime = System.currentTimeMillis();
            Integer days = Integer.valueOf(publishtime);
            Long ms = days*24*60*60*1000L;
            publishtimea = new Date(nowtime-ms);
        }/*else {
            publishtime = new Date();
        }*/
        //获取到最低工资
        BigDecimal minsalarya = null;
        if (minsalary !=null && !"".equals(minsalary))
            minsalarya = BigDecimal.valueOf(Long.parseLong(minsalary));
        //获取到最高工资
        BigDecimal maxsalarya = null;
        if (maxsalary !=null && !"".equals(maxsalary))
            maxsalarya = BigDecimal.valueOf(Long.parseLong(maxsalary));
        //获取到公司类型
        if (company.equals("所有"))
            company = null;
        //获取到经验年限
        if (workyear.equals("所有"))
            workyear=null;
        //获取到学历要求
        if (degree.equals("所有"))
            degree=null;
        ServerResponse serverResponse = service.getByManyMany(pageNum, kw, publishtimea, minsalarya, maxsalarya, workyear, degree);
        return serverResponse;
    }
}
