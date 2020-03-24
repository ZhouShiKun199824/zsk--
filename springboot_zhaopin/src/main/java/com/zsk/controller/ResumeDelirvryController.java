package com.zsk.controller;

import com.zsk.pojo.Customer;
import com.zsk.pojo.ResumeDeliveryRecord;
import com.zsk.service.ResumeDeliveryRecordService;
import com.zsk.service.ResumeService;
import com.zsk.service.impl.ResumeDeliveryRecordServiceImpl;
import com.zsk.service.impl.ResumeSerciceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

@Controller
@RequestMapping("/resumedelievry")
public class ResumeDelirvryController {
    @Autowired
    private ResumeDeliveryRecordService service;
    @Autowired
    private ResumeService resumeService;

    @PostMapping("/add")
    @ResponseBody
    public ServerResponse add(Integer resumeid,Integer jobid,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ResumeDeliveryRecord record = new ResumeDeliveryRecord();
        Customer customer = (Customer) request.getSession().getAttribute("customer");
        record.setCustId(customer.getCustId());
        record.setResumeId(resumeid);
        record.setDeliveryStatus(1);
        record.setJobId(jobid);
        record.setDeliveryTime(new Date());
        return service.getbytime(record);

    }

    @GetMapping("/getallresume/{customerid}")
    public ModelAndView getallresumea(@PathVariable("customerid") Integer customerid, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       ServerResponse serverResponse =  service.getAllResumeByCustomerId(customerid);
       ModelAndView mav = new ModelAndView("/resume/deliary");
       if (serverResponse.getStatus()==1)
          mav.addObject("resumeJobDates",serverResponse.getData());
       else
           mav.addObject("msg","你还没有记录");
       return mav;
    }

    @GetMapping("/getallresumea")
    @ResponseBody
    public ServerResponse getallresume( Integer customerid, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServerResponse serverResponse =  resumeService.getAllResumeByCustomerId(customerid);
        return serverResponse;
    }



}
