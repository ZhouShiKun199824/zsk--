package com.zsk.util;

public class ServerResponse {
    private int status;//响应的状态码 1成功 0操作失败
    private String message;//相应的消息提示
    private Object data;//响应的数据


    public static ServerResponse deleteSuccess(){
        return new ServerResponse(1, MessageUtil.DELETE_SUCCESS);
    }
    public static ServerResponse deleteFail(){
        return new ServerResponse(0, MessageUtil.DELETE_FAIL);
    }
    public static ServerResponse updateSuccess(){
        return new ServerResponse(1, MessageUtil.UPDATE_SUCCESS);
    }
    public static ServerResponse updateFail(){
        return new ServerResponse(0, MessageUtil.UPDATE_FAIL);
    }
    public static ServerResponse addSuccess(){
        return new ServerResponse(1, MessageUtil.ADD_SUCCESS);
    }
    public static ServerResponse addFail(){
        return new ServerResponse(0, MessageUtil.ADD_Fail);
    }
    public static ServerResponse getSuccess(Object data){
        return new ServerResponse(1, MessageUtil.GET_SUCCESS,data);
    }
    public static ServerResponse getFail(){
        return new ServerResponse(0, MessageUtil.GET_FAIL);
    }
    public static ServerResponse getTelSuccess(Object data){
        return new ServerResponse(1, MessageUtil.TEL_SUCCESS,data);
    }
    public static ServerResponse getTelFail(){
        return new ServerResponse(0, MessageUtil.TEL_FAIL);
    }



    public ServerResponse() {
    }

    public ServerResponse(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ServerResponse(int status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ServerResponse{" +
                "status=" + status +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }

}
