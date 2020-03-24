<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/25 0025
  Time: 上午 11:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/sign.css">
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.4.1.min.js"></script>
</head>
<body>

<!--导航条-->
<div class="header">
    <div class="shou-top">
        <div class="header-team">
            <span ><img src="${pageContext.request.contextPath}/static/images/logo_ch.png" class="shou-top-1-img1"></span>
            <span><img src="${pageContext.request.contextPath}/static/images/log_fix_ch.png" class="shou-top-1-img2"></span>
            <span class="shou-top-1 shou-top-1-01"><a href="">无忧精英</a></span>
            <span class="shou-top-1"><a href="">校园招聘</a></span>
            <span class="shou-top-1"><a href="">地区频道</a></span>
            <span class="shou-top-1"><a href="">职位搜索</a></span>
            <span class="shou-top-1"><a href="">职场资讯</a></span>
            <span class="shou-top-1"><a href="../index.html" style="font-weight: bolder;width: 120px" class="shou-top-1-s">首页</a></span>
        </div>
    </div>
</div>
<!--  ============================ -->

<div class="login_box">
    <div class="login_tab">
        <div class="tab_password">
            密码登录
        </div>
        <div class="tab_verification_code">
            验证码登录
        </div>
    </div>
    <div class="login_wrap">
        <span class="remind">请输入手机号码,或邮箱，或账户名</span>
        <input class="username" type="text" value="" placeholder="账户">
        <span class="remind">请输入密码</span>
        <input class="password" type="password" value="" placeholder="密码">
        <input id="checkboxs" type="checkbox" value="" name="">
        <label class="checkboxs" for="checkboxs">下次自动登录</label>
        <div class="login_tail">
            立即登录
        </div>
    </div>
    <div class="login_wrap_verification_code">
        <span class="remind">请输入手机号码</span>
        <input class="userName" type="text" value="" placeholder="手机号码">
        <input class="password" type="password" value="" placeholder="验证码">
        <br>
        <div class="login_tail_2">
            立即登录
        </div>
        <span class="get_verification_code">获取验证码</span>
    </div>
    <p class="register">
        <span>还没有账号？</span>
        <span><a href="register.html">免费注册</a></span>
    </p>
</div>
<script src="${pageContext.request.contextPath}/static/js/sign.js"></script>
<script src="${pageContext.request.contextPath}/static/js/signajax.js"></script>
</body>
</html>
