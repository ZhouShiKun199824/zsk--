package com.zsk.service.impl;

import com.zsk.mapper.CompanyMapper;
import com.zsk.pojo.Company;
import com.zsk.pojo.CompanyExample;
import com.zsk.service.CompanyService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyMapper mapper;
    @Override
    public ServerResponse add(Company company) {
        int in = mapper.insert(company);
        if (in>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(Company company) {
        CompanyExample companyExample = new CompanyExample();
        CompanyExample.Criteria criteria = companyExample.createCriteria();
        criteria.andCompanyIdEqualTo(company.getCompanyId());
        int in = mapper.updateByExample(company,companyExample);
        if (in>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
        Company company = mapper.selectByPrimaryKey(id);
        company.setStatus(0);
        int i = mapper.updateByPrimaryKey(company);
        if (i>0)
            return ServerResponse.deleteSuccess();
        else
            return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {
        Company company = mapper.selectByPrimaryKey(id);
        if (company!=null)
            return  ServerResponse.getSuccess(company);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAll() {
        CompanyExample companyExample = new CompanyExample();
        CompanyExample.Criteria criteria = companyExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Company> companyList = mapper.selectByExample(companyExample);
        if (companyList != null&&companyList.size()>0)
            return ServerResponse.getSuccess(companyList);
        else
            return ServerResponse.getFail();
    }
}
