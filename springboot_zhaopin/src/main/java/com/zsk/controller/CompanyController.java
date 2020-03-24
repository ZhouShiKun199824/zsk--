package com.zsk.controller;

import com.zsk.service.CompanyService;
import com.zsk.service.JobService;
import com.zsk.service.impl.CompanyServiceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    private JobService jobService;
    @Autowired
    private CompanyService companyService;
    @RequestMapping("/getbyid/{companyid}")
    public ModelAndView getbyid(@PathVariable("companyid") Integer companyid, HttpServletRequest request){
        ServerResponse serverResponse = companyService.getById(companyid);
        ModelAndView mav = new ModelAndView("company/detail");
        mav.addObject("company",serverResponse.getData());
        return mav;
    }

    @RequestMapping("/getalljob")
    @ResponseBody
    public ServerResponse getalljob(Integer companyId){
        return jobService.getAllJobByCompanyId(companyId);
    }
}
