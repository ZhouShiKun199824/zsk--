

//百度地图API功能
var map = new BMap.Map("container");
map.centerAndZoom(new BMap.Point(116.712927,34.035386),15);//根据坐标初始化地图
map.enableScrollWheelZoom(true);
map.addControl(new BMap.NavigationControl());   //平移缩放控件
map.addControl(new BMap.ScaleControl());        //比例尺
map.addControl(new BMap.OverviewMapControl());  //缩略地图
map.addControl(new BMap.MapTypeControl());      //地图类型
map.setCurrentCity("萧县"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

//添加标注
var marker = new BMap.Marker(new BMap.Point(120.378386,30.309756));        // 创建标注
map.addOverlay(marker);                     // 将标注添加到地图中
function getalljobs(companyid) {
  $.ajax({
      type:"get",
      url:"/company/getalljob?companyId="+companyid,
      datatype:"json",
      success:function (result) {
         var joblist =  result.data;
         console.log("joblist:"+joblist)
          getjobs(joblist)
      }

  })
}

function getjobs(joblist) {
    var tabjob = document.getElementById("jobs").firstElementChild;
    console.log(tabjob.innerHTML);
       /* joblist = new Array({"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"}
        ,{"jobname":"城市经理（汽车金融）","tiajian":"一年经验|高中|招一人","city":"孝感","money":"4-8千/月","time":"2020-01-04"})*/
    tabjob.innerHTML = "";
    for (var i = 0; i < joblist.length; i++) {
        var jobdata = "<tr>\n" +
            "                <td>"+joblist[i].jobName+"</td>\n" +
            "                <td>"+joblist[i].jobDemand+"</td>\n" +
            "                <td>"+joblist[i].jobCity+"</td>\n" +
            "                <td style=\"font-size: 16px;font-weight: bolder;color: #ff6000;font-style: italic\">"+joblist[i].jobMinSalary+"-"+joblist[i].jobMaxSalary+"</td>\n" +
            "                <td>"+joblist[i].jobPublishTime+"</td>\n" +
            "            </tr>";
        tabjob.innerHTML += jobdata;
    }

}




document.querySelector(".openall").onclick=function() {
    var comdes = document.querySelector(".comdes");
    if (document.querySelector(".openall").innerHTML == "展开全部") {
        comdes.style.height = "450px";
        document.querySelector(".openall").innerHTML="关闭全部"
    } else {
        comdes.style.height = "133px";
        document.querySelector(".openall").innerHTML="展开全部"
    }
}
document.querySelector(".cleancom").onclick = function () {
        document.querySelector(".container").innerHTML="";
    }