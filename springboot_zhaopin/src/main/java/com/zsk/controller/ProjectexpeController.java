package com.zsk.controller;

import com.zsk.pojo.ProjectExperience;
import com.zsk.service.ProjectExperienceService;
import com.zsk.service.impl.ProjectExperienceServiceImpl;
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
@RequestMapping("/project")
public class ProjectexpeController {
    @Autowired
    private  ProjectExperienceService projectExperienceService;

    @PutMapping("/update")
    @ResponseBody
    private ServerResponse update(ProjectExperience projectExperience,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, ParseException {
        projectExperience.setStatus(1);
        return projectExperienceService.modify(projectExperience);

    }

    @PostMapping("/add")
    @ResponseBody
    private ServerResponse add(ProjectExperience projectExperience,HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, ParseException {
        projectExperience.setStatus(1);
        ServerResponse add = projectExperienceService.add(projectExperience);
        if (add.getStatus()==1)
            return projectExperienceService.getLatestProJectExperienceByResumeId(projectExperience.getResumeId());
        else
          return add;
    }

}
