$(".right").css("display","none");
$(".safety_center").css("display","none");
$(".resume_center").css("display","block");


$("#abtn").click(function () {
    $(".abtn").slideToggle();
});
$(".left div:lt(5)").click(function () {
    $(".left div:lt(5)").css("color","black");
    $(".left div:lt(5)").css("border-left","1px solid #e6e6e6");
    $(this).css("color","#ff6000");
    $(this).css("border-left","2px solid #ff6000");
});
$(".left .left-a").eq(3).click(function () {
    $(".safety_center").css("display","none");
    $(".right").css("display","block");
    $(".resume_center").css("display","none");

});
$(".left .left-a").eq(1).click(function () {

});
$(".right .mt .mt-ul li").click(function () {
    $(".right .mt .mt-ul li").css("color","#333");
    $(".right .mt .mt-ul li").css("border-bottom","2px solid #efefef");
    $(this).css("color","#ff6000");
    $(this).css("border-bottom","2px solid #ff6000");
});

$(this)==$(".right .mt .mt-ul li").eq(0).click(function () {
    $(".right .job-div").css("display","block");
    $(".right .company-div").css("display","none");
})

$(this)==$(".right .mt .mt-ul li").eq(1).click(function () {
    $(".right .job-div").css("display","none");
    $(".right .company-div").css("display","block");
})
var state_shenqing=false;
var state_dele=false;
var num_body=$(".right .div-table .el-body").length;
function check(){
    $(".right .div-table .el-foot .dele").css("color", "#666");
    $(".right .div-table .el-foot .shenqing").css("background", "#ff6000");
    $(".right .div-table .el-foot .dele").css("background", "white");
    state_shenqing=true;
    state_dele=true;
}
function uncheck(){
    $(".right .div-table .el-foot .dele").css("background", "#ddd");
    $(".right .div-table .el-foot .dele").css("color", "white");
    $(".right .div-table .el-foot .shenqing").css("background", "#ddd");
    state_shenqing=false
    state_dele=false;
}
$(".right .div-table .el-foot .all-check").click(function () {
    if ($(this).prop("checked")) {
        check();
    }else {
        uncheck();
    }
    $(".right .div-table .el-body .one-checked").prop("checked",$(this).prop("checked"));

});
$(".right .div-table .el-body .one-checked").click(function () {
    if($(this).prop("checked")){
        check();
    }
    var leg = $(".right .div-table .el-body .one-checked").length;
    var flag=0;
    for (var i=0;i<leg;i++){
        if ($(".right .div-table .el-body .one-checked").eq(i).prop("checked")) {
            flag++;
        }
    }
    $(".right .div-table .el-foot .all-check").prop("checked",flag==leg);
    if (flag==0)
        uncheck();
});
if ($(".right .div-table").css("display")=="none"){
    $(".right .div-table-none").css("display","block");
}else {
    $(".right .div-table-none").css("display","none");
}
$(".right .div-table .el-body .s5 .apply").click(function () {
    alert("提交成功");
});
$(".right .div-table .el-foot .shenqing").click(function () {
    if (state_shenqing)
        alert("申请成功");
});
$(".right .div-table .el-body .s5 .deleon").click(function () {
   if ( confirm("确定删除吗")){
      $(this).parent().parent().css("display","none");
      num_body--;
   }
   if (num_body==0){
       $(".right .div-table").css("display","none");
       $(".right .div-table-none").css("display","block");
   }

});
$(".right .div-table .el-foot .dele").click(function () {
    if ( confirm("确定删除吗")) {
        for (var i = 0; i < $(".right .div-table .el-body .one-checked").length; i++) {
            if ($(".right .div-table .el-body .one-checked").eq(i).prop("checked")) {
                $(".right .div-table .el-body .one-checked").eq(i).parent().css("display", "none");
                num_body--;
            }
        }
        if (num_body < 0) {
            $(".right .div-table").css("display", "none");
            $(".right .div-table-none").css("display", "block");
        }
    }
    console.log(num_body);
});
$(".left .left-a").eq(4).click(function () {
    $(".right").css("display","none");
    $(".safety_center").css("display","block");
    $(".resume_center").css("display","none");

});
$(".left .left-a").eq(1).click(function () {
    $(".right").css("display","none");
    $(".safety_center").css("display","none");
    $(".resume_center").css("display","block");
});


$(".getresumecount").click(function () {
    console.log(123);
        $.ajax({
            type:"get",
            url:"/resume/getcount",
            datatype:"json",
            success:function (result) {
               /* console.log(resultjson)*/
                if (result.status==1){
                    console.log("已经创建超过限制个数了")
                }else {
                    location.href="/createresume";
                    console.log("准备跳转创建建立")
                }

            }
        })
})


function getjobcollection() {
     $.ajax({
         type:"get",
         url: "/job/getalljobconllection",
         datatype: "json",
         success:function (result) {
             if (result.status==1){
                 var jobs = result.data;

                var htmlstr = "<div class=\"el-title\">\n" +
                    "                    <span class=\"t1\">职位名</span>\n" +
                    "                    <span class=\"t2\">公司名</span>\n" +
                    "                    <span class=\"t3\">工作地点</span>\n" +
                    "                    <span class=\"t4\">创建时间</span>\n" +
                    "                    <span class=\"t5\">操作</span>\n" +
                    "                </div>";
                 for (var i=0;i<jobs.length;i++){
                     var job = jobs[i].job;
                     var company = jobs[i].company;
                     var ccdate = jobs[i].date;
                     var date = dateformat(ccdate);
                     var str = " <div class=\"el-body\">\n" +
                         "                    <input type=\"checkbox\" class=\"one-checked\">\n" +
                         "                    <span class=\"s1\">"+job.jobName+"</span>\n" +
                         "                    <span class=\"s2\">"+company.companyName+"</span>\n" +
                         "                    <span class=\"s3\">异地招聘</span>\n" +
                         "                    <span class=\"s4\">"+date+"</span>\n" +
                         "                    <span class=\"s5\">\n" +
                         "                        <span class=\"apply\">申请</span>\n" +
                         "                        <span> | </span>\n" +
                         "                        <span class=\"deleon\">删除</span>\n" +
                         "                    </span>\n" +
                         "                </div>"
                     htmlstr += str;
                 }
                 $(".div-table").html(htmlstr);
             }else {

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
