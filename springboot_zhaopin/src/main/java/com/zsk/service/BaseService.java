package com.zsk.service;

import com.zsk.util.ServerResponse;

public interface BaseService<T> {
    public ServerResponse add(T t);
    public ServerResponse modify(T t);
    public ServerResponse delete(Integer id);
    public ServerResponse getById(Integer id);
    public ServerResponse getAll();
}
