
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
        document.getElementsByClassName("shou-top-1-img2")[0].src="../images/slogen.png";
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