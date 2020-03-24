package com.zsk.controller;

import com.zsk.pojo.WorkExperience;
import com.zsk.service.WorkExperienceService;
import com.zsk.service.impl.WorkExperienceServiceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

@Controller
@RequestMapping("/workExperience")
public class WorkExpeController {

    @Autowired
    private WorkExperienceService service;

    @PutMapping("/update")
    @ResponseBody
    private ServerResponse update(WorkExperience experience, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, ParseException {
        //封装成WorkExperience 对象
       return service.modify(experience);

    }

    @PostMapping("/add")
    @ResponseBody
    private ServerResponse add(WorkExperience experience, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, ParseException {
        //封装成WorkExperience 对象
        experience.setStatus(1);
        ServerResponse serverResponse = service.add(experience);
        if (serverResponse.getStatus()==0) {
            return serverResponse;
        }else {
            ServerResponse allLatestWork = service.getAllLatestWork(experience.getResumeId());
           return allLatestWork;
        }
    }

}
