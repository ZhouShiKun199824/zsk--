console.log(123)
function getallresume(customerid){
    var jobid = $(".jobid").val();
    $.ajax({
        type:"get",
        url:"/resumedelievry/getallresumea?customerid="+customerid,
        datatype:"json",
        success:function (result) {
              console.log(result)
              resumelist = result.data;
              var reusmestr = $(".reusmelist ul");
              reusmestr.html("");
              var strs="";
              for (var i=0;i<resumelist.length;i++){
                  var resumeid = resumelist[i].resumeId;
                  var str = "<li style='list-style: none'><a style='color: black;text-decoration: none' onclick=\"playresume("+resumeid+","+jobid+");\">"+resumelist[i].resumeName+"</a></li>"
                  strs += str;
              }
              reusmestr.html(strs);
          $(".reusmelist").css("display","block")
        }
    })
}
function playresume(resumeid,jobid) {
    console.log("res:"+resumeid+"jobid:"+jobid)
$.ajax({
    type: "post",
    url: "/resumedelievry/add?resumeid="+resumeid+"&jobid="+jobid,
    datatype: "json",
    success:function (result) {
         if (result.status==1)
             console.log("投递成功");
         else
             console.log("一个月内已经投过了")
    }


})

}
function jobcollectin(jobid) {
    $.ajax({
         type:"post",
         url:"/job/addjobConllection",
         data:{
             "jobId":jobid
         },
         datatype:"json",
        success:function (result) {
           if (result.status){
               console.log("收藏成功")
           }else{
               console.log("你已经收藏过了")
           }
        }

    })
}