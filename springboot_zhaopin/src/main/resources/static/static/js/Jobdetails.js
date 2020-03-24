// 收藏的小星星
var collections = document.querySelector(".head .headfirst .collection");
var collectionbtn = collections.firstElementChild;
var collectionspan = collectionbtn.nextElementSibling;
var flag = false;
collectionbtn.onclick = function () {
    if (!flag) {
        collections.firstElementChild.className = "icon-collectionchange";
        flag = true;
    }else {
        collections.firstElementChild.className = "icon-collection";
        flag = false;
    }
};
collectionspan.onclick = function () {
    if (!flag) {
        collections.firstElementChild.className = "icon-collectionchange";
        flag = true;
    }else {
        collections.firstElementChild.className = "icon-collection";
        flag = false;
    }
};


//数据渲染
// 1.招聘职位   薪资范围   公司    位置需求    福利
var mainposition  = "JAVA工程师（中级）（苏州）";
var salary = "0.8-1.2万/月";
var company = "上海仰邦科技股份有限公司";
var compayDetails = ["民营公司","50-150人","计算机软件"];
var position_requirement = ["苏州-吴中区","3-4年经验","本科","招一人","01-11发布"];
var welfares = ["五险一金","餐饮补贴","年终奖金","员工旅游","节日福利"];

//  职位详细信息
var job_information = ["任职要求：","1.计算机类专业本科以上学历，19应届生。",
    "2.熟悉java开发语言熟悉Eclipse开发工具；","3.熟悉Struts,Spring,SpringMVC框架；",
    "4.熟悉Oracle,SQLServer关系数据库，Linux操作系统；","5.具备良好的沟通能力和团队合作精神；",
    "6.有实习经验优先。","岗位职责：","1. 根据设计方案要求，进行软件项目的设计与开发，包括用户接口、业务逻辑定义、数据模型的设计与开发等；",
    "2. 能够与开发团队中其它成员共同开发有效沟通"];
//联系地址
var contact_address = "吴江区松陵镇太湖新城科创园一号楼";
(function () {
    var position = document.querySelector(".head .headfirst .position");
    var see_position = position.firstElementChild;
    var h2 = document.createElement("h2");
    h2.innerText = mainposition;
    var strong = document.createElement("strong");
    strong.innerText = salary;
    var a = document.createElement("a");
    a.innerText = company;

    position.insertBefore(h2,see_position);
    position.insertBefore(strong,see_position);
    position.insertBefore(a,see_position);

    var positionRequirement = see_position.nextElementSibling;
    positionRequirement.innerHTML = "";
    for (var i = 0;i < position_requirement.length;i++){
        if (i != position_requirement.length-1) {
            positionRequirement.innerHTML += "<span>" + position_requirement[i] + "</span>"+
                "<span>|</span> ";
        }else {
            positionRequirement.innerHTML += "<span>" + position_requirement[i] + "</span>";
        }
    }

    var welfare = positionRequirement.nextElementSibling;
    welfare.innerHTML = "";
    for (var i = 0;i < welfares.length;i++){
        welfare.innerHTML += "<div>"+welfares[i]+"</div>";
    }
    var job = document.querySelector(".information .job-information div");
    job.innerHTML = "";
    for (var i = 0;i < job_information.length;i++){
        job.innerHTML += "<p>"+job_information[i]+"</p>";
    }
    var address = job.parentElement.nextElementSibling;
    address.lastElementChild.innerText = contact_address;

    var companys = document.querySelector(".information .company-information .com-msg");
    companys.firstElementChild.firstElementChild.innerText = company;
    var com_tag = companys.nextElementSibling.children;
    for(var i = 0;i < compayDetails.length;i++){
        com_tag[i].lastElementChild.innerText = compayDetails[i];
    }
}());

















