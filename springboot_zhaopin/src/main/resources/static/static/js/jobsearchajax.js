var kw ="";//搜索的关键字
var publishtime="";//发布时间
var minsalary ="";//最低薪资
var maxsalary=""; //最高薪资
var company ="";//公司性质
var workyear ="";// 工作年限

var degree =""; // 学历
/*var mincompanysize =""//公司人数最小值
var maxcompanysize ="";//公司人数最大值*/

$(".publishtimeUL").click(function(event){

    var ele = event.target;

    var li = ele.parentElement;
    var lis = li.parentNode.querySelectorAll("li");
    var index = [].indexOf.call(lis,li);
    switch (index){
        case 0:publishtime = "";break
        case 1: publishtime = 1;break;
        case 2: publishtime = 3;break;
        case 3: publishtime = 7;break;
        case 4:publishtime = 30;break;
    }
    getall(1);
})

$(".salaryUL").click(function(event){
    var ele = event.target;

    var li = ele.parentElement;
    var lis = li.parentNode.querySelectorAll("li");
    var index = [].indexOf.call(lis,li);

    switch (index){
        case 0:minsalary = 0;maxsalary = 20;break;
        case 1: minsalary = 0;maxsalary = 2;break;
        case 2: minsalary = 2;maxsalary = 3;break;
        case 3: minsalary = 3;maxsalary = 4;break;
        case 4:minsalary = 4;maxsalary = 6;break;
    }

    getall(1);
});

$(".companyUL").click(function(event){
    var ele = event.target;
    company = ele.innerText;

    getall();
});
$(".workyearUL").click(function(event){
    var ele = event.target;
    workyear = ele.innerText;

    getall(1);
});


$(".degreeUL").click(function(event){
    var ele = event.target;
    degree = ele.innerText;

    getall(1);
});

$(".startsearch").click(function () {
     getall(1);
})
var pagess ="";
getall(1);
function getall(pagenum){
    var kw = $(".searchkeyword").val();
    console.log("kw:"+kw)
    $.ajax({
        type:"get",
        url: "/job/getalljob?kw="+kw+"&publishtime="+publishtime+"&minsalary="+minsalary+"&maxsalary="+maxsalary +"&company="+company
            +"&workyear="+workyear+"&degree="+degree+"&pagenum="+pagenum,
        datatype:"json",
        success:function (result) {
             if (result.status == 1){
                 console.log("查询成功："+result.data.list[0].job.jobName)
                 var jobCompanyList = result.data.list;
                 console.log("查出来："+result.data.total)
                 var options_content = $(".options-content");
                 options_content.html("");
                 var htmlstr = "";

                 $.each(jobCompanyList,function (index,jobCompany) {
                     var jobName = jobCompany.job.jobName;
                     var companyName = jobCompany.company.companyName;

                     console.log("company:"+companyName);
                     console.log("comapnyId:"+jobCompany.company.companyId);
                     var companyid = jobCompany.job.companyId;
                     var jobId = jobCompany.job.jobId;
                     var jobCity = jobCompany.job.jobCity;
                     var minSalary = jobCompany.job.jobMinSalary;
                     var maxSalary = jobCompany.job.jobMaxSalary;
                     var publishTimeMS = jobCompany.job.jobPublishTime;
                     var publishTime =dateformat(publishTimeMS);

                     var str = "<div class='searchjbb'>\n" +
                         "        <em></em>\n" +
                         "        <span class='searchjobname'><a href='/job/getbyid/"+jobId+"'>" + jobName + "</a></span>\n" +
                         "        <span class='searchjobcom'><a href='/company/getbyid/"+companyid+"'>" + companyName + "</a></span>\n" +
                         "        <span class='searchjincity'>" + jobCity + "</span>\n" +
                         "        <span class='searchjibmoney'>" + minSalary+"-"+maxSalary +"万/月"+ "</span>\n" +
                         "        <span class='searchjobtime'>" + publishTime + "</span>\n" +
                         "    </div>";
                     htmlstr += str;

                 })
                 options_content.html(htmlstr);
                 var pageNum = result.data.pageNum;//当前页码
                 var total = result.data.total;//总记录数
                 pagess = result.data.pages;//总页码
                 var prePage = result.data.prePage;   //上一页
                 var nextPage = result.data.nextPage;//下一页

               $(".pagenumy").text(pageNum);
               $(".pagecontaly").text(pagess);

            /*   $(".prepage").click(function () {
                     getall(prePage);
               })
               $(".nextpage").click(function () {
                     getall(nextPage);
               })*/




             }else{
                 var options_content = $(".options-content");
                 options_content.html(" ");
                 console.log("没查询到你想要的数据")
             }
        }
    })
}
function dateformat(datestr) {
    var date = new Date(datestr);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year +"年"+month + "月" +day+"日";
}

var pagenn  = $(".pagenumy").text();

$(".prepage").click(function () {
    if (pagenn>1){
        pagenn-- ;
        getall(pagenn);
    }else {
        getall(1);
    }
})
$(".nextpage").click(function () {
    if (pagenn < pagess){
        pagenn++;
        getall(pagenn);
    }else {
        getall(pagess)
    }

})