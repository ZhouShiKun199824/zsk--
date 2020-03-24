package com.zsk.service.impl;

import com.zsk.mapper.CustomerMapper;
import com.zsk.pojo.Customer;
import com.zsk.pojo.CustomerExample;
import com.zsk.service.CustomerService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerMapper mapper;

    @Override
    public ServerResponse add(Customer customer) {
        int insert = mapper.insert(customer);
        if (insert>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();

    }

    @Override
    public ServerResponse modify(Customer customer) {
        int insert = mapper.updateByPrimaryKey(customer);
        if (insert>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
        Customer customer = mapper.selectByPrimaryKey(id);
        customer.setStatus(0);
        int i = mapper.updateByPrimaryKey(customer);
        if (i>0)
            return ServerResponse.deleteSuccess();
        else
            return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {
        Customer customer = mapper.selectByPrimaryKey(id);
        if (customer!=null)
            return ServerResponse.getSuccess(customer);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAll() {
        CustomerExample customerExample = new CustomerExample();
        CustomerExample.Criteria criteria = customerExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Customer> customerList =  mapper.selectByExample(customerExample);
        if (customerList!=null &&customerList.size()>0)
            return ServerResponse.getSuccess(customerList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getByUsernamePwd(String a, String b) {
        CustomerExample customerExample = new CustomerExample();
        CustomerExample.Criteria criteria = customerExample.createCriteria();
        criteria.andCustNameEqualTo(a);
        criteria.andCustPasswordEqualTo(b);
        List<Customer> customerList = mapper.selectByExample(customerExample);
        if (customerList!=null &&customerList.size()>0)
            return ServerResponse.getSuccess(customerList);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getByTel(long tel) {
        CustomerExample customerExample = new CustomerExample();
        CustomerExample.Criteria criteria = customerExample.createCriteria();
        criteria.andCustTelnoEqualTo(tel);
        List<Customer> customerList = mapper.selectByExample(customerExample);
        if (customerList != null && customerList.size()>0)
            return ServerResponse.getTelSuccess(customerList);
        else
            return ServerResponse.getTelFail();
    }

    @Override
    public ServerResponse getByUserPwd(Integer type, String username, String password) {
        CustomerExample customerExample = new CustomerExample();
        CustomerExample.Criteria criteria = customerExample.createCriteria();
        if (type == 1){
            criteria.andCustTelnoEqualTo(Long.valueOf(username));
        }else if (type == 2){
            criteria.andCustEmailEqualTo(username);
        }else{
            criteria.andCustNameEqualTo(username);
        }
        criteria.andCustPasswordEqualTo(password);
        List<Customer> customerList = mapper.selectByExample(customerExample);
        if (customerList != null && customerList.size()>0){
            return ServerResponse.getSuccess(customerList.get(0));
        }
        return ServerResponse.getFail();
    }


}
