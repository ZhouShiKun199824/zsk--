<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/3/17 0017
  Time: 下午 10:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>简历预览</title>
    <link rel="stylesheet" href="/static/css/resume_see.css">
    <script src="/static/js/jquery-3.4.1.min.js"></script>
</head>
<body>
<div class="header">
    <img src="/static/images/logo_white.png">
    <div class="header-right">
        <img src="/static/images/print.png">
        <img src="/static/images/export.png">
    </div>
</div>

<div class="main">
    <div class="user">
        <div class="user-img"></div>
        <div class="user-con">
            <div class="user-first-row">
                <h3>${resumeVo.resume.resumeName}</h3>
                <div class="sp1"><span>ID:</span><span>400412737</span></div>
            </div>
            <div class="user-row">
                <img src="/static/images/y1.png" class="img1"><span>目前正在找工作</span>
                <img src="/static/images/y2.png"><span>13470726448</span>
                <img src="/static/images/y3.png"><span>2864527048@qq.com</span>
            </div>
            <div class="user-row">
                <span>男 | 22岁(1997/08/20) | 现居住于苏州工业园区 | 1年工作经验</span>
            </div>
        </div>
    </div>

    <div class="recent-academic">
        <div class="left">
            <em>最近工作</em>
            <div class="rs-row"><label>职位：</label><span>java开发工程师</span></div>
            <div class="rs-row"><label>公司：</label><span>苏州思必驰信息科技有限公司</span></div>
            <div class="rs-row"><label>行业：</label><span>计算机软件</span></div>
        </div>
        <div class="right">
            <em>最高学历</em>
            <div class="rs-row"><label>专业：</label><span>计算机科学与技术</span></div>
            <div class="rs-row"><label>学校：</label><span>巢湖学院</span></div>
            <div class="rs-row"><label>学历：</label><span>本科</span></div>
        </div>
    </div>


    <div class="year-income">
        <em>目前年收入 <i class="income">10</i> 万元</em>
    </div>

    <div class="job">
        <div class="left">
            <em>求职意向</em>
            <div class="rs-row"><label>个人标签：</label><span>java开发</span></div>
            <div class="rs-row"><label>期望薪资：</label><span>6000-7999元/月</span></div>
            <div class="rs-row"><label>行业：</label><span>计算机软件</span></div>
        </div>

        <div class="right">
            <em></em>
            <div class="rs-row"><label>地点：</label><span>苏州</span></div>
            <div class="rs-row"><label>职位：</label><span>java开发工程师</span></div>
            <div class="rs-row"><label>工作类型：</label><span>全职</span></div>
        </div>
        <div class="comment-self">
            <label class="comment-label">自我评价：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
    </div>

    <div class="job-experience">
        <em>工作经验</em>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">java开发工程师</strong><span> | </span><span>研发部</span>
        </div>
        <div class="je-row"><span>苏州思必驰信息科技有限公司</span></div>
        <div class="je-row"><span>计算机软件 | 500-1000人 | 民营</span></div>
        <div class="comment-self">
            <label class="comment-label">自我评价：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">java开发工程师</strong><span> | </span><span>研发部</span>
        </div>
        <div class="je-row"><span>苏州思必驰信息科技有限公司</span></div>
        <div class="je-row"><span>计算机软件 | 500-1000人 | 民营</span></div>
        <div class="comment-self">
            <label class="comment-label">自我评价：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
    </div>


    <div class="project-experience">
        <em>项目经验</em>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">前程无忧招聘项目</strong></div>
        <div class="rs-row"><label>所属公司：</label><span>苏州思必驰信息科技有限公司</span></div>
        <div class="comment-self">
            <label class="comment-label">项目描述：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
        <div class="comment-self duty">
            <label class="comment-label">责任描述：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>

        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">前程无忧招聘项目</strong></div>
        <div class="rs-row"><label>所属公司：</label><span>苏州思必驰信息科技有限公司</span></div>
        <div class="comment-self">
            <label class="comment-label">项目描述：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
        <div class="comment-self duty">
            <label class="comment-label">责任描述：</label>
            <div class="comment-con">有充满激情的工作态度，能够在没有监督的情况下按质按量主动完成工作任务、
                团队协同作战能力强、一定的组织能力和协调能力、擅于发现问题、执行力强、思维缜密、保密性好、承担责任，能够接受加班和出差
            </div>
        </div>
    </div>

    <div class="edu-experience">
        <em>教育经历</em>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">巢湖学院</strong><span class="academic-position">本科 | 计算机科学与技术</span></div>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">巢湖学院</strong><span class="academic-position">本科 | 计算机科学与技术</span></div>
    </div>

    <div class="aword">
        <em>在校荣誉</em>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">校级奖学金</strong><span class="academic-position">校级</span></div>
        <div class="je-row"><span>2018/11-2019/12</span> <strong class="emphasize">校级奖学金</strong><span class="academic-position">校级</span></div>
    </div>

    <div class="skill">
        <em>技能特长</em>
        <div class="je-row"><strong class="emphasize">英语</strong><span class="academic-position">熟练</span></div>
        <div class="je-row"><strong class="emphasize">英语</strong><span class="academic-position">熟练</span></div>
    </div>




</div>

<div class="footer"></div>


<script src="/static/layui/layui.js"></script>
</body>
</html>
