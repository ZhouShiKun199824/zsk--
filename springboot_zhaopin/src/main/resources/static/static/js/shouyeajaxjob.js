console.log("job请求 ajax里")
$.ajax({
    type:"get",
    url:"/job/getlatestjob",
    datatype:"json",
    success:function (joblistjson) {
        if(joblistjson.status == 1){
            var joblist = joblistjson.data;
           var list =  $(".latest_job ul");
           list.html("");
           var strs = "";
            for (var i = 0; i < joblist.length; i++) {
                var date = dateformat(joblist[i].jobPublishTime);
                var str = " <li>\n" +
                    "        <span class=\"job-name\"><a href=\"#\">"+joblist[i].jobName+"</a></span>\n" +
                    "        <span class=\"job-city\"><a href=\"#\">"+joblist[i].jobAddrDetail+"</a></span>\n" +
                    "        <span class=\"job-detail-city\"><a href=\"#\">"+joblist[i].jobCity+"</a></span>\n" +
                    "        <span class=\"job-sa job-salary\">"+joblist[i].jobMinSalary+"-"+joblist[i].jobMaxSalary+"万/月</span>\n" +
                    "        <span class=\"job-sa job-date\">"+date+"</span>\n" +
                    "      </li>"
                strs += str;
            }
            list.html(strs);

        }





   /* <li>
        <span class="job-name"><a href="#">高级java开发工程师</a></span>
        <span class="job-city"><a href="#">襄阳三阳教育科技有限公司</a></span>
        <span class="job-detail-city"><a href="#">襄阳</a></span>
        <span class="job-sa job-salary">0.8-1 万/月</span>
        <span class="job-sa job-date">2020-1-1</span>
      </li>*/


    }
})
function dateformat(datestr) {
  var date = new Date(datestr);
  var month = date.getMonth()+1;
  var day = date.getDate();
  return month + "月" +day+"日";
}