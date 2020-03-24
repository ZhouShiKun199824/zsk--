package com.zsk.controller;

import com.zsk.pojo.Customer;
import com.zsk.pojo.Resume;
import com.zsk.service.ResumeService;
import com.zsk.service.impl.ResumeSerciceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

@Controller
@RequestMapping("/resume")
public class ResumeController {
    @Autowired
    private ResumeService resumeService;

    @RequestMapping("/getcount")
    @ResponseBody
    public ServerResponse getcount(HttpServletRequest request){
        /*System.out.println("进入到resumeservlet中");*/
        Customer customer = (Customer)request.getSession().getAttribute("customer");
        ServerResponse serverResponse = resumeService.getcountResume(customer.getCustId());
        return serverResponse;
    }

    @RequestMapping("/show/{resumeid}")
    @ResponseBody
    public ServerResponse show(@PathVariable("resumeid") Integer resumeId,HttpServletRequest request){
        ServerResponse serverResponse = resumeService.getById(resumeId);
        request.getSession().setAttribute("resumeVo",serverResponse.getData());
        return serverResponse;
    }

    @RequestMapping("/delete/{resumeid}")
    public String delete(@PathVariable("resumeid") Integer resumeId,HttpServletRequest request){
        ServerResponse serverResponse = resumeService.delete(resumeId);
        request.setAttribute("resumeid",resumeId);
        return "redirect:/";
    }

    @RequestMapping("/detail/{resumeid}")
    public String detail(@PathVariable("resumeid") Integer resumeId,HttpServletRequest request){
        ServerResponse serverResponse = resumeService.getById(resumeId);
        request.setAttribute("resumeid",resumeId);
        return "/resume/detail";
    }

    @RequestMapping("/saveresume/{resumename}")
    @ResponseBody
    private ServerResponse saveresume(@PathVariable("resumename") String resumename, HttpServletRequest request) throws ServletException, IOException {
        Customer customer = (Customer) request.getSession().getAttribute("customer");
        System.out.println("name:"+resumename);
        Resume resume =  new Resume();
        resume.setStatus(1);
        resume.setCustId(customer.getCustId());
        resume.setResumeName(resumename);
        Date date = new Date();
        resume.setResumeCreateTime(date);
        ServerResponse serverResponse = resumeService.add(resume);
        if (serverResponse.getStatus() == 1){
            /*System.out.println("添加成功");*/
            ServerResponse byCustIdAndTime = resumeService.getByCustIdAndTime(customer.getCustId(), date);
            /*if (byCustIdAndTime.getStatus()==1) {
                System.out.println("获取到的数据是：" + byCustIdAndTime.getData());
            }else{
                System.out.println("没有获取到数据");
            }*/
            return byCustIdAndTime;
        }else {
           return serverResponse;
        }

    }

    @RequestMapping("/getresumedetail/{resumeid}")
    @ResponseBody
    private ServerResponse getresumedetail(@PathVariable("resumeid") Integer resumeid,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("获取详细简历信息");
        return resumeService.getById(resumeid);
    }

    @PostMapping("/savasalary")
    @ResponseBody
    private ServerResponse savasalary(Integer resumeid,Integer personIncome,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Resume resume = new Resume();
        resume.setResumeId(resumeid);
        resume.setResumeIncome(personIncome);
        resume.setResumeUpdateTime(new Date());
        return resumeService.modify(resume);

    }

    @PutMapping("/updatePersonInfo")
    @ResponseBody
    private ServerResponse updatePersonInfo(Resume resume) throws ServletException, IOException, ParseException {

        /*Date resumeBirth,String personName,Integer newresumeid,,HttpServletRequest request, HttpServletResponse response*/
        System.out.println("进入到updatepersonservlet中");
        resume.setStatus(1);
        resume.setResumeUpdateTime(new Date());

        ServerResponse modify = resumeService.modify(resume);
        if (modify.getStatus()==1){
            System.out.println("修改成功");
            return resumeService.getById(resume.getResumeId());
        }else
            return modify;
    }
    @PostMapping("/updateresume")
    @ResponseBody
    private ServerResponse updateresume(Integer newresumeid,String resumename ,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("要修改的："+newresumeid);
        System.out.println("要修改的简历名："+resumename);
        Resume resume = new Resume();
        resume.setStatus(1);
        resume.setResumeId(newresumeid);
        resume.setResumeName(resumename);
        return resumeService.modify(resume);

    }




}
