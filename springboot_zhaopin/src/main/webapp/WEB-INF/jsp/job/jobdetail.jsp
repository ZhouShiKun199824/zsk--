<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/26 0026
  Time: 上午 10:55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/Jobdetails.css">
    <script src="/static/js/jquery-3.4.1.min.js"></script>
</head>
<body>
<!--导航条-->
<div class="header">
    <div class="header-bar">
        <a href="" class="header-bar-1"><span>简</span></a>
        <a href=""><span class="header-bar-left-1">APP下载</span></a>
        <a href="" class="header-bar-right-a"><span>职场百科</span></a>
        <a href=""><span>职场文库</span></a>
        <a href=""><span>招聘信息</span></a>
        <a href=""> <span>企业服务</span></a>
        <c:if test="${empty customer}">
            <span class="header-bar-denglu">登录/注册</span>
        </c:if>
        <c:if test="${!empty customer}">
            <span class="header-bar-denglu"><a href="#">${customer.custTelno}</a></span>
        </c:if>
    </div>
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

<div class="head">
    <div class="headfirst">
        <div class="position">
            <h2>${jobcompany.job.jobName}</h2>
            <strong>${jobcompany.job.jobMinSalary}-${jobcompany.job.jobMaxSalary}万/月</strong>
            <a href="">${jobcompany.company.companyName}</a>
            <span class="see-position">查看所有职位</span>
            <div class="position-requirement">
                <span>${jobcompany.job.jobCity}</span>
                <span>|</span>
                <span>${jobcompany.job.jobYear}经验</span>
                <span>|</span>
                <span>${jobcompany.job.jobNeedNumber}</span>
                <span>|</span>
                <span>${jobcompany.job.jobDegree}</span>
                <span>|</span>
                <span>${jobcompany.job.jobPublishTime}发布</span>
            </div>
            <div class="welfare">
                <!--<div>餐饮补贴</div>-->
                <!--<div>年终奖金</div>-->
                <!--<div>员工旅游</div>-->
                <!--<div>节日福利</div>-->
            </div>
        </div>
        <div class="collection">
            <i class="icon-collection"></i>
            <a href="javascript:jobcollectin(${jobcompany.job.jobId})">收藏</a>
            <span>|</span>
            <i class="icon-competitive-power"></i>
            <span>竞争力分析</span>
        </div>
        <div class="but-sq">
            <a href="javascript:void (0)" onclick="getallresume(${customer.custId});">
                <img src="${pageContext.request.contextPath}/static/images/but_sq_arr.png" alt="" width="19" height="24">
                <span>申请职位</span>
            </a>
        </div>
    </div>
</div>
<input type="text" class="jobid" value="${jobcompany.job.jobId}" >
<div class="reusmelist" style="display:none;width:250px;margin-left: 930px;margin-top:-10px;z-index: 10">
    <ul>
    </ul>
</div>
<div class="information">
    <!--职位信息-->
    <div class="job-information">
        <h3>职位信息</h3>
            <div>${jobcompany.job.jobDuty}</div>
    </div>
    <div class="contact-address">
        <h3>联系地址</h3>
        <p>${jobcompany.job.jobAddrDetail}</p>
    </div>
    <!--公司信息-->
    <div class="company-information" style="z-index: 1;margin-top: 30px">
        <h3>公司信息</h3>
        <div class="com-msg">
            <a href="javascript:void (0)"><p>XX公司</p></a>
        </div>
        <div class="com-tag">
            <p>
                <i class="icon-tag"></i>
                <span></span>
            </p>
            <p>
                <i class="icon-tag"></i>
                <span></span>
            </p>
            <p>
                <i class="icon-tag"></i>
                <span></span>
            </p>
        </div>
        <div class="com-det">
            <i class="icon-det"></i>
            <a href="javascript:void (0)">查看所有职位</a>
        </div>
    </div>
</div>

</body>
<script src="${pageContext.request.contextPath}/static/js/jobdetailajax.js"></script>
</html>
