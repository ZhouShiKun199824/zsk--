package com.zsk.service;

import com.zsk.pojo.Product;
import com.zsk.util.ServerResponse;

public interface ProductService extends BaseService<Product> {
    public ServerResponse getbypage(Integer pagenum);
}
