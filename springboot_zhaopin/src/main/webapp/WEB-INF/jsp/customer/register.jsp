<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/24 0024
  Time: 下午 3:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>注册</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/register.css">
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.4.1.min.js"></script>
    <link rel="${pageContext.request.contextPath}/static/dist/css/bootstrap.min.css">
    <script src="${pageContext.request.contextPath}/static/dist/js/bootstrap.min.js"></script>
</head>
<body>
<!--导航条-->
<div class="header">
    <div class="shou-top">
        <div class="header-team">
            <span ><img src="${pageContext.request.contextPath}/static/images/logo_ch.png" class="shou-top-1-img1"></span>
            <span><img src="${pageContext.request.contextPath}/static/images/log_fix-ch.png" class="shou-top-1-img2"></span>
            <span class="shou-top-1 shou-top-1-01"><a href="">无忧精英</a></span>
            <span class="shou-top-1"><a href="">校园招聘</a></span>
            <span class="shou-top-1"><a href="">地区频道</a></span>
            <span class="shou-top-1"><a href="">职位搜索</a></span>
            <span class="shou-top-1"><a href="">职场资讯</a></span>
            <span class="shou-top-1"><a href="${pageContext.request.contextPath}/index.html" style="font-weight: bolder;width: 120px" class="shou-top-1-s">首页</a></span>
        </div>
    </div>
</div>
<!--  ============================ -->
<div class="register">
    <p class="title">手机注册</p>
    <div class="tele">
        <span>手机号码</span>
        <input type="text" class="phonenumber" placeholder="请输入手机号码">
        <span id="remindph" class="remind">请输入手机号码</span>
    </div>
    <div class="psw">
        <span>密 码</span>
        <input type="password" class="password" placeholder="请输入密码">
        <span class="remind">请输入密码</span>
    </div>
    <div class="psw">
        <span>确认密码</span>
        <input type="password" class="realpassword" placeholder="请输入和上面相同密码">
        <span class="remind">请输入和上面相同密码</span>
    </div>
    <div class="short-message">
        <span>短信验证码</span>
        <input type="text" class="inputcode" placeholder="请输入短信验证码">
        <button class="send-out">发送验证码</button>
    </div>
    <div class="check">
        <input type="checkbox">
        我已阅读并同意 <span> 服务声明和隐私条款 </span>
    </div>
    <div id="resgit" class="res" data-toggle="modal"  data-target=".bs-example-modal-sm">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</div>
    <p class="sign">
        <span>已有账号，</span>
        <span><a href="sign.html">直接登录</a></span>
    </p>
</div>
<script src="${pageContext.request.contextPath}/static/js/register_mes.js"></script>
<script src="${pageContext.request.contextPath}/static/js/register.js"></script>
</body>
</html>
