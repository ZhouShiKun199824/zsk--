package com.zsk.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zsk.mapper.ProductMapper;
import com.zsk.pojo.Product;
import com.zsk.service.ProductService;
import com.zsk.util.ServerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductMapper mapper;
    @Override
    public ServerResponse add(Product product) {
        if (mapper.insert(product)>0)
            return ServerResponse.addSuccess();
        else
            return ServerResponse.addFail();
    }

    @Override
    public ServerResponse modify(Product product) {
        if(mapper.updateByPrimaryKey(product)>0)
            return ServerResponse.updateSuccess();
        else
            return ServerResponse.updateFail();
    }

    @Override
    public ServerResponse delete(Integer id) {
       if( mapper.deleteByPrimaryKey(id)>0)
           return ServerResponse.deleteSuccess();
       else
           return ServerResponse.deleteFail();
    }

    @Override
    public ServerResponse getById(Integer id) {

        Product product = mapper.selectByPrimaryKey(id);
        if (product!=null)
            return ServerResponse.getSuccess(product);
        else
            return ServerResponse.getFail();
    }

    @Override
    public ServerResponse getAll() {

        List<Product> productList = mapper.selectByExample(null);
        if (productList!=null&&productList.size()>0)
            return ServerResponse.getSuccess(productList);
        else
            return ServerResponse.getFail();
    }


     @Override
   public ServerResponse getbypage(Integer pagenum) {
        if (pagenum==null)
            pagenum=1;
        Page<Object> page = PageHelper.startPage(pagenum,3);
        List<Product> productList = mapper.selectByExample(null);
        PageInfo<Object> objectPageInfo = page.toPageInfo();
        if (productList!=null&&productList.size()>0)
            return ServerResponse.getSuccess(objectPageInfo);
        else
            return ServerResponse.getFail();
    }
}
