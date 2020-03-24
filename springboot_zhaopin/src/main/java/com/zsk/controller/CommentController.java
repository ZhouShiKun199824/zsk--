package com.zsk.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CommentController {
    @RequestMapping()
    public String index(){
        return "index";
    }
    @RequestMapping("/login")
    public String login(){
        return "/customer/login";
    }
    @RequestMapping("/regist")
    public String regist(){
        return "/customer/register";
    }
    @RequestMapping("/createresume")
    public String createresume(){
        return "/resume/create";
    }

    @RequestMapping("/show")
    public String show(){
        return "/resume/show";
    }

}
