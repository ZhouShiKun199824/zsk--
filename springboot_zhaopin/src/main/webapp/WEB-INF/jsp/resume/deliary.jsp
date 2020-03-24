<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/2/28 0028
  Time: 上午 10:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="date" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>个人中心</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/PersonalCenter.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/node_modules/_bootstrap3@3.3.5@bootstrap3/dist/css/bootstrap.min.css">
    <script src="${pageContext.request.contextPath}/static/node_modules/_jquery@3.4.1@jquery/dist/jquery.min.js"></script>


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
        <a href="sign.html" ><span class="header-bar-denglu">个人中心</span></a>
    </div>

    <div class="header-team">
        <div class="header_team_and">
            <span><img src="${pageContext.request.contextPath}/static/images/logo_ch.png" class="shou-top-1-img1"></span>
            <span><img src="${pageContext.request.contextPath}/static/images/slogen.png" class="shou-top-1-img2"></span>
            <span class="shou-top-1 shou-top-1-01"><a href="">无忧精英</a></span>
            <span class="shou-top-1"><a href="">校园招聘</a></span>
            <span class="shou-top-1"><a href="">地区频道</a></span>
            <span class="shou-top-1"><a href="">职位搜索</a></span>
            <span class="shou-top-1"><a href="">职场资讯</a></span>
            <span class="shou-top-1"><a href="../index.html">首页</a></span>
        </div>

    </div>

</div>
<div class="father">
    <div class="left">
        <div class="left-a">我的51job</div>
        <div class="left-a">简历中心</div>
        <div class="left-a">谁看过我</div>
        <div class="left-a" >我的收藏</div>
        <div class="left-a">安全中心</div>
        <div class="left-a" id="abtn">更多</div>
        <div class="abtn"><a href=""  >人事来信</a></div>
        <div class="abtn"><a href="" >增值服务</a></div>
        <div class="abtn"><a href="" >屏蔽公司</a></div>
        <div class="abtn"><a href="" >我的搜索器</a></div>
        <div class="abtn"><a href="" >我的订阅服务</a></div>
        <div class="abtn"><a href="" >薪酬查询</a></div>
    </div>
    <div class="right">
        <div class="mt">
            <ul class="mt-ul">
                <li>职位收藏</li>
                <li>心愿公司</li>
            </ul>
        </div>
        <div class="job-div">
            <div class="div-table">
                <div class="el-title">
                    <span class="t1">职位名</span>
                    <span class="t2">公司名</span>
                    <span class="t3">工作地点</span>
                    <span class="t4">薪资</span>
                    <span class="t5">操作</span>
                </div>
                <div class="el-body">
                    <input type="checkbox" class="one-checked">
                    <span class="s1">国内期货操盘手a</span>
                    <span class="s2">广东格华投资有限公司</span>
                    <span class="s3">异地招聘</span>
                    <span class="s4">0.8-1.2万/月</span>
                    <span class="s5">
                    <span class="apply">申请</span>
                    <span> | </span>
                    <span class="deleon">删除</span>
                </span>

                </div>
                <div class="el-body">
                    <input type="checkbox" class="one-checked">
                    <span class="s1">国内期货操盘手aa</span>
                    <span class="s2">广东格华投资有限公司</span>
                    <span class="s3">异地招聘</span>
                    <span class="s4">0.8-1.2万/月</span>
                    <span class="s5">
                    <span class="apply">申请</span>
                    <span> | </span>
                    <span class="deleon">删除</span>
                </span>

                </div>
                <div class="el-body">
                    <input type="checkbox" class="one-checked">
                    <span class="s1">国内期货操盘手aaa</span>
                    <span class="s2">广东格华投资有限公司</span>
                    <span class="s3">异地招聘</span>
                    <span class="s4">0.8-1.2万/月</span>
                    <span class="s5">
                    <span class="apply">申请</span>
                    <span> | </span>
                    <span class="deleon">删除</span>
                </span>

                </div>
                <div class="el-foot">
                    <input type="checkbox" class="all-check">
                    <span class="f1">全选</span>
                    <span class="glyphicon glyphicon-trash dele">  删   除</span>
                    <span class="glyphicon shenqing">申   请</span>
                </div>
            </div>
            <div class="div-table-none"><img src="${pageContext.request.contextPath}/static/images/none.png" height="358" width="825"/></div>
        </div>
        <div class="company-div">
            <div class="company">
                <div class="com-body">
                    <img src="https://img01.51jobcdn.com/im/careerpost/marketing/shixi51/images/mingqi/logo/suoni.jpg" alt="">
                    <div class="describe">
                        <a href="" class="describe-name">索尼</a>
                        <p>消费电子</p>
                    </div>
                    <div class="job">
                        <p class="job-numb">125</p>
                        <p>在职岗位</p>
                    </div>
                    <div class="unfollow">取消关注</div>
                </div>
            </div>
            <div class="page-company"></div>
        </div>
    </div>
    <div class="safety_center">
        <div class="safety_top">
            <ul class="top-ul">
                <li>安全中心</li>
            </ul>
        </div>
        <div class="safebody">


            <div class="safediv">
                <span class="glyphicon glyphicon-user"><span class="s s_user">用户名</span></span>

                <span class="rol1">phone_13004589521_202001113821</span>
                <span class="safe_operation">
                    <span>修改</span>
                    |
                    <span>注销</span>
                </span>
            </div>
            <div class="safediv">
                <span class="glyphicon glyphicon-lock">
                    <span class="s s_lock">登录密码</span>
                </span>
                <span class="rol1">互联网帐号存在被盗风险，建议你定期更改密码以保护账户安全</span>
                <span class="safe_operation">修改</span>

            </div>
            <div class="safediv">
                <span class="glyphicon glyphicon-phone">
                    <span class="s s_phone">手机</span>
                </span>

                <span class="rol1">130****9521（已绑定）</span>
                <span class="safe_operation">修改</span>
            </div>
            <div class="safediv">
                <span class="glyphicon glyphicon-envelope">
                    <span class="s s_envelope">邮箱</span>
                </span>

                <span class="rol1">12***@qq.com（已验证）</span>
                <span class="safe_operation">修改</span>

            </div>
            <div class="safediv">
                <span class="glyphicon glyphicon-paperclip">
                    <span class="s s_paperclip">第三方账号</span>
                </span>
                <span class="rol1"></span>
                <span class="safe_operation">查看</span>
            </div>
        </div>
    </div>
    <div class="resume_center">
        <div class="resume_top">
            <ul class="top-ul">
                <li>简历中心</li>
            </ul>
        </div>
        <div class="resume_top_op">
            <a href="/resumedelievry/getallresume/${customer.custId}">查看求职信</a>
            <a href="javascript:;" class="getresumecount">创建新简历</a>
        </div>
        <div class="rbox">
            <div class="tit">
                <ul class="chearfix">
                    <li class="l1">简历名</li>
                    <li class="l2">公开程度</li>
                    <li class="l3">职位名</li>
                    <li class="l4">投递时间</li>
                </ul>
            </div>
            <div class="li">

               <c:choose>
                   <c:when test="${!empty msg}">
                       <h3>你还没有投递记录</h3>
                   </c:when>
                   <c:otherwise>
                       <c:forEach items="${resumeJobDates}" var="resumeJobDate">
                           <ul class="chearfix">
                               <li class="l1"><a href="#">${resumeJobDate.resume.resumeName}</a></li>
                               <li class="l2">公开</li>
                               <li class="l3">${resumeJobDate.job.jobName}</li>
                               <li class="l4">
                                   <span><a href="#"> <date:formatDate value="${resumeJobDate.date}" pattern="yyyy-MM-dd HH"></date:formatDate></a></span>
                               </li>
                           </ul>

                       </c:forEach>
                   </c:otherwise>
               </c:choose>



            </div>
            <div class="dlt">
                <p>
                    <strong>公开程度说明：</strong>
                    <br>
                    对所有公开：允许51job的招聘人员及所有通过51job审核的公司查看你的简历（注意：只允许有1份简历可以选择对所有公开）。
                    <br>
                    对无忧公开：只允许51job的招聘人员及认证猎头人士查看你的简历。
                    <br>
                    完全保密：不允许任何人员或公司查看您的简历，个人信息完全保密，除非你主动投递职位。
                </p>
            </div>
            <div class="dlt">
                <p>
                    <strong>快速投递说明：</strong>
                    <br>
                    将简历设置为快速投递，申请职位时，直接发送设置快速投递的简历，不再提示选择简历。知己知彼竞争力分析也会默认使用快速投递简历进行分析。
                </p>
            </div>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/static/js/PersonalCenter.js"></script>
<script src="${pageContext.request.contextPath}/static/node_modules/_bootstrap3@3.3.5@bootstrap3/dist/js/bootstrap.js"></script>

</body>
</html>
