
companyList();
function companyList() {
    var numList = new Array("1001","222","555");

    document.querySelector(".content-company-main").firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerHTML=numList[0];
}

pinYin();
function pinYin() {
    var listA=new Array("鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都","鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var listD=new Array("大连","东莞","丹东","大庆","达州","大同","德阳","德州","东营","鄂尔多斯"
        ,"鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var listG=new Array("鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都","鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var listJ=new Array("大连","东莞","丹东","大庆","达州","大同","德阳","德州","东营","鄂尔多斯");
    var listM=new Array("鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春",
        "长沙","成都","鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都"
    );
    var listQ=new Array("大连","东莞","丹东","大庆","达州","大同","德阳","德州","东营","鄂尔多斯",
        "鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var listT=new Array("鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都","鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var listY=new Array("大连","东莞","丹东","大庆","达州","大同","德阳","德州","东营","鄂尔多斯","鞍山","安庆","安阳","北京","包头","保定","蚌埠","宝鸡","滨州","长春","长沙","成都");
    var ZMLists = document.getElementsByClassName("ZM");
    var citys = document.querySelector(".content-citylist");
    /* citys.onmouseout=function{
         citys.style.display="none";

     }*/
    ZMLists[0].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listA.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listA[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[1].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listD.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listD[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[2].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listG.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listG[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[3].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listJ.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listJ[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[4].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listM.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listM[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[5].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listQ.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listQ[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[6].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listT.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listT[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }
    ZMLists[7].onmouseover=function () {
        citys.style.display="block";
        citys.innerHTML="";
        for (var i = 0; i < listY.length; i++) {
            var a = "<span><a href='javascript:void(0);'>"+listY[i]+"</a></span>";
            citys.innerHTML += a;
        }
    }


}

document.querySelector(".content-citylist").onclick = function (event) {
    var a = event.target;
    console.log(a.innerText);
}

/* document.querySelector(".content-more").onclick=function () {
       document.querySelector(".content-top-2").style.display="block";
 }*/
function header() {
    var headerTeam = document.getElementsByClassName("header-team");
    headerTeam[0].onmouseenter=function () {
        document.getElementsByClassName("shou-top-1-img2")[0].src="static/images/slogen.png";
        document.getElementsByClassName("shou-top-1-s")[0].style.color="red";
    }
    headerTeam[0].onmouseout=function () {
        document.getElementsByClassName("shou-top-1-s")[0].style.color="white";
    }
    var spanlist =  document.querySelectorAll(".header-team span");
    console.log(spanlist)
    for (var i = 0; i < spanlist.length; i++) {
        spanlist[i].onmouseover=function () {
            document.getElementsByClassName("shou-top-1-s")[0].style.color="red";
        }
    }
    document.getElementsByClassName("shou-top-1-s")[0].onmouseenter=function () {
        document.getElementsByClassName("shou-top-1-s")[0].style.color="red";
    }
}
header();



 function reset() {
        var product = document.querySelector(".prductList ul");
        product.innerHTML=" ";
        var pro6={ src:"static/images/java.jpg",
            detail:"湖北襄软科技有限公司",
            detail02:"该公司所有职位民营公司  |  少于50人  |  计算机软件 互联网/电子商务\n" ,
        }
        var pro2={ src:"static/images/yamaxun.jpg",
            detail:"亚马逊 网络电子商务公司）",
            detail02:"美国最大的一家网络电子商务公司，位于华盛顿州的西雅图。是网络上最早开始经营电子商务的公司之一" ,
        }
        var pro3={ src:"static/images/sun.jpg",
            detail:"Sun Microsystems",
            detail02:"Sun Microsystems是IT及互联网技术服务公司（已被甲骨文收购）Sun Microsystems 创建于1982年。主要产品是工作站及服务器。1986年在美国成功上市。1992年sun推出了市场上第一台多处理器台式机SPARCstation 10 system，并于1993年进入财富500强。" ,
        }
        var pro4={ src:"static/images/jiagu.jpg",
            detail:"甲骨文公司",
            detail02:"全称甲骨文股份有限公司(甲骨文软件系统有限公司)，是全球最大的企业级软件公司，总部位于美国加利福尼亚州的红木滩。1989年正式进入中国市场。2013年，甲骨文已超越 IBM ，成为继 Microsoft 后全球第二大软件公司。" ,
        }
        var pro5={ src:"static/images/weiruan.jpg",
            detail:"美国微软公司",
            detail02:"一家美国跨国科技公司，也是世界PC（Personal Computer，个人计算机）软件开发的先导，由比尔·盖茨与保罗·艾伦创办于1975年，公司总部设立在华盛顿州的雷德蒙德（Redmond，邻近西雅图）。以研发、制造、授权和提供广泛的电脑软件服务业务为主" ,
        }
        var pro1={ src:"static/images/ali.png",
            detail:"阿里巴巴网络技术有限公司",
            detail02:"阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等" ,
        }
      /*  var pro7={ src:"images/1.jpg",
            detail:"土拨鼠土拨鼠土拨鼠",
            price:550
        }
        var pro8={ src:"images/1.jpg",
            detail:"土拨鼠土拨鼠土拨鼠",
            price:650
        }*/
        var productLists = new Array(pro1,pro2,pro3,pro4,pro5,pro6,);
        for (var i = 0; i < productLists.length; i++) {
            var p = "<li>\n" +
                "                <a href=\"\" class=\"img\"><img src="+productLists[i].src+"></a>\n" +
                "                <a href=\"\" class=\"detail\"><span>"+productLists[i].detail+"</span></a>\n" +
                "                <a href=\"\" class=\"detail2\"><span>"+productLists[i].detail02+"</span></a>\n" +
                /*"                <div class=\"cart\">\n" +
                "                    <a href=\"\" class=\"detail2\"><span>"+productLists[i].detail+"</span></a>\n" +
                "                </div>\n"*/
                "            </li>";
            product.innerHTML += p;

        /*<span>$</span>\n" +
            "                    <span>"+productLists[i].price+"</span>\n" +
            "                    <a href=\"\" class=\"buy\"><span>买</span></a>\n"*/

        }
    }
    reset();

document.querySelector(".getjob").onclick = function () {
    var key = document.querySelector(".peywdd").value;
    console.log(123);
    if (key == null || key == ""){
        key="所有";
    }
     window.location = "/job/searchjobkey/"+key;
}





