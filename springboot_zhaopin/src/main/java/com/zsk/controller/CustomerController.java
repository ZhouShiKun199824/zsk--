package com.zsk.controller;

import com.zsk.pojo.Customer;
import com.zsk.service.CustomerService;
import com.zsk.service.ResumeService;
import com.zsk.service.impl.CustomerServiceImpl;
import com.zsk.service.impl.ResumeSerciceImpl;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

@Controller
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ResumeService resumeService;

    @PostMapping("/login")
    @ResponseBody
    public ServerResponse login(Integer type, String username, String password, HttpServletRequest request){
        ServerResponse responseser = customerService.getByUserPwd(type,username,password);
        Customer c= (Customer) responseser.getData();

        HttpSession session = request.getSession();
        //有效用户，用户名存进session
        session.setAttribute("customer", c);

        return responseser;
    }

    @PostMapping("/regist")
    @ResponseBody
    public ServerResponse regist(Long phonenumber,String password){
        Customer customer = new Customer();
        customer.setCustTelno(phonenumber);
        customer.setCustPassword(password);
        customer.setCustRegistTime(new Date());
        return customerService.add(customer);
    }

    @RequestMapping("/getcode/{phonenumber}")
    @ResponseBody
    public ServerResponse testnumber(@PathVariable("phonenumber") Long phonenumber){
        if (phonenumber == null){
            return ServerResponse.getFail();
        }else {
            ServerResponse responseph = customerService.getByTel(phonenumber);
            if (responseph.getStatus()==1){
                //状态为1，查询到数据，说明这个账号已经注册过
                return ServerResponse.getFail();
            }else {

                /*String sms = SmsUtil.getSms(phonenumber);*/
                //手机号没注册过，调用接口获取验证码，并将验证码传到前端
                String code = "666666";
                ServerResponse serverResponse = ServerResponse.getSuccess(code);
                serverResponse.setStatus(2);
                return serverResponse;

            }
        }
    }

    @RequestMapping("/testphone/{phonenumber}")
    @ResponseBody
    public ServerResponse getByphone(@PathVariable("phonenumber") Long phonenumber){
        return customerService.getByTel(phonenumber);
    }

    @RequestMapping("/center/{custid}")
    public String getcenter(@PathVariable("custid") Integer custid,HttpServletRequest request){
        ServerResponse allResumeByCustomerId = resumeService.getAllResumeByCustomerId(custid);
        request.setAttribute("resumelist",allResumeByCustomerId.getData());
        return "customer/center";

    }
}
