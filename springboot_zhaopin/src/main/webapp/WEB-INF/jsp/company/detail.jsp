<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/27 0027
  Time: 下午 7:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>公司详情页</title>

    <script src="${pageContext.request.contextPath}/static/js/jquery-3.4.1.min.js"></script>


    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/dist/css/bootstrap-theme.min.css">
    <script src="${pageContext.request.contextPath}/static/dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/index3.css">

    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=WDAbgFAeZky0B3OlGgjGYdzV20sRrVgV"></script>

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
    </div>
    <div class="shou-top">
        <div class="header-team">
            <span ><img src="${pageContext.request.contextPath}/static/images/logo_ch.png" class="shou-top-1-img1"></span>
            <span><img src="${pageContext.request.contextPath}/static/images/slogen.png" class="shou-top-1-img2"></span>
            <span class="shou-top-1 shou-top-1-01"><a href="">无忧精英</a></span>
            <span class="shou-top-1"><a href="">校园招聘</a></span>
            <span class="shou-top-1"><a href="">地区频道</a></span>
            <span class="shou-top-1"><a href="">职位搜索</a></span>
            <span class="shou-top-1"><a href="">职场资讯</a></span>
            <span class="shou-top-1"><a href="/index.jsp" style="font-weight: bolder;width: 120px" class="shou-top-1-s">首页</a></span>
        </div>
    </div>
</div>
<div class="container">
    <div class="row company-header">
        <div class="col-md-1 company-header-left"><img src="${pageContext.request.contextPath}/static/images/yamaxun.jpg"></div>
        <div class="col-md-8 company-header-left-2">
            <h3><strong>${company.companyName}</strong></h3>
            <h5>民营公司  |  ${company.companyEmpCount} |  ${company.companyIndustury}</h5>
            <h5>营业执照：${company.companyName}</h5>
        </div>
        <div class="col-md-2 company-header-right">
            <a href="javascript:getalljobs(${company.companyId})">查看该公司所有职位</a>
        </div>
    </div>
    <div class="row company-describ" >
        <div class="col-md-12 comdes">
            <h5>公司简介：</h5>
            <p>${company.companyDesc}</p>
            <pre>
如果你具备运筹帷幄的魄力,
如果你想在汽车金融领域叱咤风云,
开疆僻壤，
就等你当冲锋将军,
湖北怀泰期待您的加入~！


咨询电话：027-84859838
招聘邮箱：chenman@cangoonline.com
（注明邮件主题“应聘岗位+姓名）

              </pre>

        </div>
    </div>
    <div class="row zhankai">
        <div class="col-md-2">
            <span class="openall">展开全部</span>
        </div>
        <div class="col-md-8"></div>
        <div class="col-md-2" >
            <span class="cleancom"><a href="${pageContext.request.contextPath}/job/search.html">屏蔽该公司</a></span>
        </div>
    </div>
    <div class="row comImages">
        <div class="col-md-2 comImages-1">
            <img src="${pageContext.request.contextPath}/static/images/sun.jpg">
        </div>
        <div class="col-md-2 comImages-1">
            <img src="${pageContext.request.contextPath}/static/images/jiagu.jpg">
        </div>
        <div class="col-md-2 comImages-1">
            <img src="${pageContext.request.contextPath}/static/images/java.jpg">
        </div>
        <div class="col-md-2 comImages-1"></div>

    </div>
    <div class="row address">
        <div class="col-md-10">
            <span class="address-main">公司地址：${company.companyAdrrDetail}</span>
        </div>
        <div class="col-md-2" >
               <span class="map">

                   <b data-toggle="modal" data-target="#myModal">查看地图</b>
                   <!-- 模态框（Modal） -->
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">此处是地图</h4>
                                </div>

                                <div class="modal-body" id = "container" style="height: 300px">


                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                </div>
                            </div><!-- /.modal-content -->
                        </div><!-- /.modal -->
                    </div>



                   </span>
        </div>
    </div>
    <div class="row address2">
        <div class="col-md-10">
            <span class="address-main">公司官网：http://www.cangoonline.com/</span>
        </div>
    </div>

    <div class="jobs">
        <div class="row jobsear">
            <div class="col-md-3 jobsear-list jobsear-list-left"><h4 style="color:black"><strong>该公司所有职位</strong></h4></div>
            <div class="col-md-7 jobsear-list"></div>
            <div class="col-md-2 jobsear-list"><input type="text" placeholder="筛选：所有"></div>
        </div>

    </div>

    <table class="table table-hover jobTable" id="jobs" >
        <tbody>
        </tbody>
    </table>


</div>



<script src="${pageContext.request.contextPath}/static/js/Companydetail.js"></script>
</body>
</html>
