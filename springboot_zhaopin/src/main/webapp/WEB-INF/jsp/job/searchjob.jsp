<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/26 0026
  Time: 上午 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>搜索</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/search.css">
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.4.1.min.js"></script>
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
        <a href="../customer/register.html" ><span class="header-bar-denglu">登录/注册</span></a>
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
            <span class="shou-top-1"><a href="" style="font-weight: bolder;width: 120px" class="shou-top-1-s">首页</a></span>
        </div>
    </div>
</div>


<div class="searckkw">
    <div class="searchmain">
        <div class="searchbox">
           <input type="text" class="searchkeyword" value="${Makey}">
            <button class="startsearch">搜索</button>
        </div>
    </div>
</div>

<!--过滤条件-->
<div class="search-all">
    <div class="search-date">
        <span class="search-title">发布日期：</span>
        <ul class="publishtimeUL">
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">24小时内</a></li>
            <li><a href="javascript:void (0)">近三天</a></li>
            <li><a href="javascript:void (0)">近一周</a></li>
            <li><a href="javascript:void (0)">近一月</a></li>
            <li><a href="javascript:void (0)">其他</a></li>
        </ul>
    </div>
    <div class="search-date">
        <span class="search-title">月薪范围：</span>
        <ul class="salaryUL">
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">2千一下</a></li>
            <li><a href="javascript:void (0)">2-3千</a></li>
            <li><a href="javascript:void (0)">3-4.5千</a></li>
            <li><a href="javascript:void (0)">4.5-6千</a></li>
            <li><a href="javascript:void (0)">6-8千</a></li>
            <li><a href="javascript:void (0)">0.8-1万</a></li>
            <li><a href="javascript:void (0)">1-1.5万</a></li>
            <li><a href="javascript:void (0)">1.5-2万</a></li>
            <li><a href="javascript:void (0)">2-3万</a></li>
        </ul>
    </div>
    <div class="search-date">
        <span class="search-title">公司性质：</span>
        <ul class="companyUL">
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">国企</a></li>
            <li><a href="javascript:void (0)">外资(欧美)</a></li>
            <li><a href="javascript:void (0)">外资(非欧美)</a></li>
            <li><a href="javascript:void (0)">上市公司</a></li>
            <li><a href="javascript:void (0)">合资</a></li>
            <li><a href="javascript:void (0)">民营公司</a></li>
            <li><a href="javascript:void (0)">外企代表处</a></li>
            <li><a href="javascript:void (0)">政府机关</a></li>
            <li><a href="javascript:void (0)">事业单位</a></li>
        </ul>
    </div>
    <div class="search-date">
        <span class="search-title">工作年限：</span>
        <ul class="workyearUL">
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">无经验</a></li>
            <li><a href="javascript:void (0)">1-3年</a></li>
            <li><a href="javascript:void (0)">3-5年</a></li>
            <li><a href="javascript:void (0)">5-10年</a></li>
            <li><a href="javascript:void (0)">10年以上</a></li>
        </ul>
    </div>
    <div class="search-date">
        <span class="search-title">学历要求：</span>
        <ul class="degreeUL" >
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">初中及以下</a></li>
            <li><a href="javascript:void (0)">高中/中技/中专</a></li>
            <li><a href="javascript:void (0)">大专</a></li>
            <li><a href="javascript:void (0)">本科</a></li>
            <li><a href="javascript:void (0)">硕士</a></li>
            <li><a href="javascript:void (0)">博士</a></li>
        </ul>
    </div>
   <%-- <div class="search-date">
        <span class="search-title">公司规模：</span>
        <ul>
            <li><a href="javascript:void (0)">所有</a></li>
            <li><a href="javascript:void (0)">少于50人</a></li>
            <li><a href="javascript:void (0)">50-100人</a></li>
            <li><a href="javascript:void (0)">150-500人</a></li>
            <li><a href="javascript:void (0)">500-1000人</a></li>
            <li><a href="javascript:void (0)">1000-5000人</a></li>
            <li><a href="javascript:void (0)">5000-10000人</a></li>
            <li><a href="javascript:void (0)">10000人以上</a></li>
        </ul>
    </div>--%>
    <div class="title">
        <span class="titlespan">已选条件：</span>
        <div class="titlefilter">

            <span>全部</span>
            <span class="date"></span>
            <span class="salary"></span>
            <span class="company"></span>
            <span class="work"></span>
            <span class="st"></span>
            <span class="scale"></span>

        </div>
    </div>
</div>
<!--全选-->
<div class="dw-tlc">
    <div class="chall">
        <em></em>
        <span>全选</span>
    </div>
    <div class="op">
        <div class="but-sq">
            <a href="javascript:void (0)">
                <img src="${pageContext.request.contextPath}/static/images/but_sq_arr.png" alt="" width="16" height="18">
                <span>申请职位</span>
            </a>
        </div>
        <div class="collection">
            <i class="icon-collection"></i>
            <span>收藏职位</span>
        </div>
    </div>
    <div class="rt">
        共
        <span>100000</span>
        条职位
    </div>
    <div class="rt">
        <span>1</span>
        /
        <span>12</span>
    </div>
    <div class="rt rt1">发布时间</div>
    <div class="rt rt1">智能排序</div>
</div>
<!--职位基本信息-->
<div class="el">
    <span class="t1">职位名</span>
    <span class="t2">公司名</span>
    <span class="t3">工作地点</span>
    <span class="t4">薪资</span>
    <span class="t5">发布时间</span>
</div>
<!--筛选出的职位-->
<div class="options-content">
    <!--<div>-->
    <!--<em></em>-->
    <!--<span><a href=''>职位名</a></span>-->
    <!--<span><a href=''>公司名</a></span>-->
    <!--<span>工作地点</span>-->
    <!--<span>薪资</span>-->
    <!--<span>发布时间</span>-->
    <!--</div>-->
</div>
<!--分页-->
<div class="page">
    <div class=" prepage">上一页</div>
    <div class="con">
        <!--<div>1</div>-->
        <span>当前第<a href="javascript:0;" class="pagenumy">1</a>页</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>一共<a href="javascript:0;" class="pagecontaly">10</a>页</span>
    </div>
    <div class="nextpage">下一页</div>
</div>
</body>
<script src="${pageContext.request.contextPath}/static/js/search.js"></script>
<script src="${pageContext.request.contextPath}/static/js/jobsearchajax.js"></script>
</html>
