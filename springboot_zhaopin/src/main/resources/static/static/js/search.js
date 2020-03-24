//搜索条件
(function () {
    var btns = document.querySelectorAll(".search-all .search-date");
    for (var i = 0;i < btns.length;i++){
        btns[i].lastElementChild.firstElementChild.firstElementChild.style.color = "#E2231A";
    }
}());
var btn = document.querySelector(".search-all");
btn.onclick = function () {
    var ele = event.target;
    var title = document.querySelector(".title .titlefilter").children;
    if (ele.nodeName = 'A') {
        var elechildren = ele.parentElement.parentElement.children;
        for (var i = 0; i < elechildren.length; i++) {
            elechildren[i].firstElementChild.style.color = "";
        }
        ele.style.color = "#E2231A";
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "发布日期：") {
                    if (ele.innerText == "所有"){
                        title[0].innerText = "全部";
                        title[1].innerText = "";
                    }else {
                        title[1].innerText = ele.innerText;
                        fun();
                    }
                }
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "月薪范围：") {
                if (ele.innerText == "所有"){
                    title[0].innerText = "全部";
                    title[2].innerText = "";
                }else {
                    title[2].innerText = ele.innerText;
                    fun();
                }
            }
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "公司性质：") {
                if (ele.innerText == "所有"){
                    title[0].innerText = "全部";
                    title[3].innerText = "";
                }else {
                    title[3].innerText = ele.innerText;
                    fun();
                }
            }
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "工作年限：") {
                if (ele.innerText == "所有"){
                    title[0].innerText = "全部";
                    title[4].innerText = "";
                }else {
                    title[4].innerText = ele.innerText;
                    fun();
                }
            }
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "学历要求：") {
                if (ele.innerText == "所有"){
                    title[0].innerText = "全部";
                    title[5].innerText = "";
                }else {
                    title[5].innerText = ele.innerText;
                    fun();
                }
            }
            if (ele.parentElement.parentElement.previousElementSibling.innerText == "公司规模：") {
                if (ele.innerText == "所有") {
                    title[0].innerText = "全部";
                    title[6].innerText = "";
                }else {
                    title[6].innerText = ele.innerText;
                    fun();
                }
            }
            
            function fun() {
                var titlefilter = document.querySelector(".search-all .title .titlefilter").children;
                var flag = false;
                for (var i = 0;i < titlefilter.length;i++){
                    if ((titlefilter[i].innerText == null || titlefilter[i].innerText == "")&& i>0){
                        flag = true;
                    }
                }
                if (!flag){
                    // console.log(titlefilter[0]);
                    titlefilter[0].innerText = "";
                }
            }

    }
};


/*

var page;  //共有多少页
var page_current = 1; //当前所在页面
var count = 8; //每页显示的数量
// 初始化页面加载

var options = [
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
    {"option_name":"财务结算","option_company":"雪花公司",
        "option_adress":"成都-高新区","option_salary":"6-8K/月",
        "option_date":"01-11"},
    {"option_name":"物流管理", "option_company":"冰雹公司",
        "option_adress":"上海-金山区", "option_salary":"6-8K/月",
        "option_date":"01-15"},
];
function load() {
    //职位信息加载
    option(options);
    //页码加载
    /!*page = Math.ceil(options.length/count); //共有多少页*!/
   /!* pages(page);*!/
};
function loading() {
    //职位信息加载
    option(options);
    //页码加载
 /!*   page = Math.ceil(options.length/count); //共有多少页
    // pages(page);*!/
};
load();
//职位信息加载
function option(options) {
    var option_current = options.slice((page_current-1)*count,page_current*8);
    var options_content = document.querySelector(".options-content");
    options_content.innerHTML = "";
    for (var i = 0;i < option_current.length;i++){
        options_content.innerHTML += "<div>\n" +
            "        <em></em>\n" +
            "        <span><a href=#>" + option_current[i].option_name + "</a></span>\n" +
            "        <span><a href=#>" + option_current[i].option_company + "</a></span>\n" +
            "        <span>" + option_current[i].option_adress + "</span>\n" +
            "        <span>" + option_current[i].option_salary + "</span>\n" +
            "        <span>" + option_current[i].option_date + "</span>\n" +
            "    </div>";
    }
}
*/


/*
//   页码
var page_btns = document.querySelectorAll(".page .con div");
//   点击页码
for (var j = 0;j < page_btns.length; j++) {
    page_btns[j].onclick = function () {
        page_current = this.innerText;
        console.log(page_current);
        loading();
        for (var i = 0;i < page_btns.length;i++){
            page_btns[i].style.color = "#999999";
        }
        this.style.color = "#FF6000";
        console.log(this);
    }
}

//   点击上一页
var previous_page = document.querySelector(".page .previous-page");
previous_page.onclick = function () {
    if (page_current != 1) {
        page_current--;
    }
    for (var i = 0;i < page_btns.length;i++){
        page_btns[i].style.color = "#999999";
    }

    page_btns[page_current-1].style.color = "#FF6000";
    // console.log(page_current);
    // console.log(page_btns[page_current-1]);
    console.log(page_btns[page_current-1].innerText);
    loading();
};
//   点击下一页
var next_page = previous_page.nextElementSibling.nextElementSibling;
next_page.onclick = function () {
    if (page_current != page) {
        page_current++;
    }
    for (var i = 0;i < page_btns.length;i++){
        page_btns[i].style.color = "#999999";
    }
    page_btns[page_current-1].style.color = "#FF6000";
    // console.log(page_current);
    console.log(page_btns[page_current-1].innerText);
    loading();
};


//   加载分页  共有多少页
function pages(page) {
    var page_btn = document.querySelector(".page .con");
    page_btn.innerHTML = "";
    for (var i = 1;i <= page;i++){
        page_btn.innerHTML += "<div>" + i + "</div>";
    }
};
*/




// 全选
var all_btn = document.querySelector(".dw-tlc .chall");
//单选
var ele_btn = document.querySelectorAll(".options-content div em");

// 全选
var flag = false;
all_btn.onclick = function () {
    var em = all_btn.firstElementChild;
    if (!flag){
        em.style.borderColor = "#FF6000";
        em.className = "em";
        flag = true;
        for (var i = 0;i <ele_btn.length;i++){
            ele_btn[i].className = "em";
            ele_btn[i].style.borderColor = "#FF6000";
        }
    }else {
        em.style.borderColor = "";
        em.className = "";
        flag = false;
        for (var i = 0;i <ele_btn.length;i++){
            ele_btn[i].className = "";
            ele_btn[i].style.borderColor = "";
        }
    }

};
//单选
for (var i = 0;i <ele_btn.length;i++){
    ele_btn[i].onclick = function () {
        console.log("f");
        if (this.className == "") {
            this.className = "em";
            this.style.borderColor = "#FF6000";
        } else {
            this.className = "";
            this.style.borderColor = "";
        }
        var f = true;
        for (var i = 0;i <ele_btn.length;i++){
            if (ele_btn[i].className == ""){
                f = false;
            }
        }
        var em = all_btn.firstElementChild;
        if (f){
            em.style.borderColor = "#FF6000";
            em.className = "em";
            flag = true;
        }else {
            em.style.borderColor = "";
            em.className = "";
            flag = false;
        }
    }
}








