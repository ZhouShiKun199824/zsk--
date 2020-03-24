package com.zsk.service;

import com.zsk.pojo.Customer;
import com.zsk.util.ServerResponse;

public interface CustomerService extends BaseService<Customer> {
    public ServerResponse getByUsernamePwd(String a, String b);
    public ServerResponse getByTel(long tel);
    public ServerResponse getByUserPwd(Integer type, String username, String password);
}
