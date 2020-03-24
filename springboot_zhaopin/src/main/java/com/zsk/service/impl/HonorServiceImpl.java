package com.zsk.service.impl;

import com.zsk.mapper.HonorMapper;
import com.zsk.pojo.Honor;
import com.zsk.pojo.HonorExample;
import com.zsk.service.HonorService;
import com.zsk.util.ServerResponse;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HonorServiceImpl implements HonorService {
    @Autowired
    private HonorMapper mapper;
    @Override
    public ServerResponse add(Honor honor) {
        int insert = mapper.insert(honor);
        return null;
    }

    @Override
    public ServerResponse modify(Honor honor) {
        HonorExample honorExample = new HonorExample();
        HonorExample.Criteria criteria = honorExample.createCriteria();
        criteria.andHonorIdEqualTo(honor.getHonorId());
        int insert = mapper.updateByExample(honor,honorExample);
        return null;
    }

    @Override
    public ServerResponse delete(Integer id) {
        Honor honor = mapper.selectByPrimaryKey(id);
        honor.setStatus(0);
        int i = mapper.updateByPrimaryKey(honor);
        return null;
    }

    @Override
    public ServerResponse getById(Integer id) {
        Honor honor = mapper.selectByPrimaryKey(id);
        return null;
    }

    @Override
    public ServerResponse getAll() {
        HonorExample honorExample = new HonorExample();
        HonorExample.Criteria criteria = honorExample.createCriteria();
        criteria.andStatusEqualTo(1);
        List<Honor> honorList = mapper.selectByExample(honorExample);
        return null;
    }

    @Override
    public ServerResponse getAllHonorByResumeId(Integer resumeId) {
        HonorExample honorExample = new HonorExample();
        HonorExample.Criteria criteria = honorExample.createCriteria();
        criteria.andStatusEqualTo(1);
        criteria.andResumeIdEqualTo(resumeId);
        List<Honor> honorList = mapper.selectByExample(honorExample);
        if (honorList!=null&&honorList.size()>0)
            return ServerResponse.getSuccess(honorList);
        else
            return ServerResponse.getFail();

    }
}
