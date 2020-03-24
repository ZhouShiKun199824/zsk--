<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="date" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页</title>

    <script src="${pageContext.request.contextPath}/static/js/jquery-3.4.1.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/index1.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/dist/css/bootstrap-theme.min.css">
    <script src="${pageContext.request.contextPath}/static/dist/js/bootstrap.min.js"></script>

</head>
<body>
<div class="header">
    <div class="header-bar">
        <a href="" class="header-bar-1"><span>简</span></a>
        <a href=""><span class="header-bar-left-1">APP下载<div class="download"></div></span></a>
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


        </a>
    </div>
    <div class="shou-top">
        <div class="header-team">
            <span ><img src="${pageContext.request.contextPath}/static/images/logo_ch.png" class="shou-top-1-img1"></span>
            <span><img src="${pageContext.request.contextPath}/static/images/log_fix-ch.png" class="shou-top-1-img2"></span>
            <span class="shou-top-1 shou-top-1-01"><a href="${pageContext.request.contextPath}/customer/center/${customer.custId}">简历中心</a></span>
            <span class="shou-top-1"><a href="">校园招聘</a></span>
            <span class="shou-top-1"><a href="">地区频道</a></span>
            <span class="shou-top-1"><a href="">职位搜索</a></span>
            <span class="shou-top-1"><a href="">职场资讯</a></span>
            <span class="shou-top-1"><a href="index.html" style="font-weight: bolder;width: 120px" class="shou-top-1-s">首页</a></span>
        </div>
        <div class="search">
            <div class="search-mian">
                <div class="search-main-1">
                    <div class="search-top">
                        <span class="search-top-left">全文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<div style="z-index:10000" >公司</div></span>
                        <span class="search-top-middle">
                             <input type="text" placeholder="请输入关键字" class="peywdd">
                         </span>
                        <span class="search-top-right"><b style="position: relative;top:-2px">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海</b><a href="" style="font-size:20px;color: red;margin-left: 25px">+</a></span>
                        <span class="search-top-button"><button class="getjob" >搜索</button></span>
                        <span class="search-top-big">高级搜索</span>
                    </div>
                    <div class="search-middle" >
                        <span>热门推荐：</span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>
                        <span><a href="job/search.html">java</a></span>

                    </div>
                    <div class="search-middle search-bottom" >
                        <span>热</span>
                        <span><a href="">简历模板</a></span>
                        <span><a href="">求职信</a></span>
                        <span><a href="">求职攻略</a></span>
                        <span><a href="">职场充电</a></span>
                        <span><a href="">名企排行榜</a></span>
                        <span><a href="" style="color: #ffff8d">互联网招聘</a></span>
                        <span><a href="" style="color: #ffff8d">2019名企招聘</a></span>
                    </div>
                </div>
            </div>
            <div class="search-login">
                <div class="search-login-top">
                    <img src="static/images/user.svg">
                </div>
                <div class="search-login-middle">Hi ! 您好</div>
                <div class="search-login-bottom">

                    <c:if test="${empty customer}">
                        <button class="search-btn-1"><a href="${pageContext.request.contextPath}/login" style="text-decoration: none;color: black">登录</a></button>
                        <button class="search-btn-2"><a href="${pageContext.request.contextPath}/regist" style="text-decoration: none;color: black">注册</a></button>
                    </c:if>
                    <c:if test="${!empty customer}">
                        <div class="customer-logined">${customer.custTelno}</div>
                    </c:if>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="made-mes">
    立即创建简历，寻找好工作
    <!--<h4>立即创建简历，寻找好工作</h4>-->
</div>

<div class="main-content">
    <div class="content-top">
        <span style="color: #ff6000">城市求职</span>
        <span><a href="">北京</a></span>
        <span><a href="">上海</a></span>
        <span><a href="">广东</a></span>
        <span><a href="">深圳</a></span>
        <span><a href="">武汉</a></span>
        <span><a href="">北京</a></span>
        <span><a href="">上海</a></span>
        <span><a href="">广东</a></span>
        <span><a href="">深圳</a></span>
        <span><a href="">武汉</a></span>
        <span><a href="">北京</a></span>
        <span><a href="">上海</a></span>
        <span><a href="">广东</a></span>
        <span><a href="">深圳</a></span>
        <span><a href="">武汉</a></span>
        <span><a href="">深圳</a></span>
        <div class="content-more">
            <a href="javascript:void(0);">更多</a>
        </div>
    </div>
    <div class="content-top-2">
        <span style="color: #ff6000">拼音检索</span>
        <span><a href="javascript:void(0);" class="ZM">A B C</a></span>
        <span><a href="javascript:void(0);" class="ZM">D E F</a></span>
        <span><a href="javascript:void(0);" class="ZM">G H</a></span>
        <span><a href="javascript:void(0);" class="ZM">J K L</a></span>
        <span><a href="javascript:void(0);" class="ZM">M N P</a></span>
        <span><a href="javascript:void(0);" class="ZM">Q R S</a></span>
        <span><a href="javascript:void(0);" class="ZM">T W X</a></span>
        <span><a href="javascript:void(0);" class="ZM">Y Z</a></span>
    </div>
    <div class="content-citylist">
        <span><a href="javascript:void(0);">鞍山</a></span>
        <span><a href="javascript:void(0);">安庆</a></span>
        <span><a href="javascript:void(0);">安阳</a></span>
        <span><a href="javascript:void(0);">安徽</a></span>
        <span><a href="javascript:void(0);">鞍山</a></span>
        <span><a href="javascript:void(0);">安庆</a></span>
        <span><a href="javascript:void(0);">安阳</a></span>
        <span><a href="javascript:void(0);">安徽</a></span>
        <span><a href="javascript:void(0);">鞍山</a></span>
        <span><a href="javascript:void(0);">安庆</a></span>
        <span><a href="javascript:void(0);">安阳</a></span>
        <span><a href="javascript:void(0);">安徽</a></span>
        <span><a href="javascript:void(0);">鞍山</a></span>
        <span><a href="javascript:void(0);">安庆</a></span>
        <span><a href="javascript:void(0);">安阳</a></span>
        <span><a href="javascript:void(0);">安徽</a></span>
    </div>

    <div class="content-company">
        <div class="content-company-main">
            <div class="content-company-1">
                <span><a href="" style="font-size: 16px;color: black">&nbsp;&nbsp;&nbsp;互联网/电子商务</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;测试工程师(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;网络推广(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;java开发(<b>123</b>)</a></span>
            </div>
            <div class="content-company-1">
                <span><a href="" style="font-size: 16px;color: black;">&nbsp;&nbsp;&nbsp;金融/投资/证券</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;理财顾问(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;风险控制(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;经济研究员(<b>123</b>)</a></span>

            </div>
            <div class="content-company-1">
                <span><a href="" style="font-size: 16px;color: black">&nbsp;&nbsp;&nbsp;汽车及零配件</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;结构/设计(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;销售经理(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;售后服务(<b>123</b>)</a></span>
            </div>
            <div class="content-company-1">
                <span><a href="" style="font-size: 16px;color: black">&nbsp;&nbsp;&nbsp;房地产</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;成本管理(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;网络推广(<b>123</b>)</a></span>
                <span><a href="">&nbsp;&nbsp;&nbsp;销售经理(<b>123</b>)</a></span>
            </div>
            <div class="content-company-5" style="width: 200px">
                <span style="text-align: left;border-bottom: 1px solid #5b6c7d"><a href="" style="color: blue;font-weight: bolder;font-size: 18px;">企业服务</a></span>
                <span><a href="">人事外包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;调研中心</a></span>
                <span><a href="">企业培训&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;典范雇主</a></span>
                <span><a href="">在线评测&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;薪酬调查 </a></span>
                <span style="background-color: #427FED;margin-left: 10px;"><a href="" style="color: white">企业入口</a></span>
            </div>
        </div>
        <div class="latest_job">
            <ul>

            </ul>
        </div>
        <%--<img src="static/images/guanggao3.PNG" style="margin-left: -10px">--%>


    </div>
</div>

<div class="enterprise">
    <h3 style="color: #ff6000;">优质公司推荐</h3>
    <div class="prductList">
        <ul>
        </ul>
    </div>
</div>

<div class="bottom-main">
    <img src="static/images/bottom-small.jpg">
</div>


<script src="static/js/QianChengShouye.js"></script>
<script src="static/js/qcshouyeJq.js"></script>
<script src="static/js/shouyeajaxjob.js"></script>
</body>
</html>
