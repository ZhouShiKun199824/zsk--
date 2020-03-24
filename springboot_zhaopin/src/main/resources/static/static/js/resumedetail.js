function show1() {
    $(".job-experience-show").hide();
    $(".job-experience").show();
    $(".job-exper-key").val("");
}
var resume = "";
var projectWorkList = "";
var workExperienceList = "";
var url = location.href;
var resumeid = document.querySelector("#resumeidd").value;
$.ajax({
    type:"GET",
    url:"/resume/getresumedetail/"+resumeid,
    datatype:"json",
    success:function (result) {
         resume = result.data.resume;
         projectWorkList = result.data.projectExperienceList;
         workExperienceList = result.data.workExperienceList;
            /* <%--简历id--%>
            <input type="text" class="newresumeid">*/
            //具有resumeid说明此页面里的数据都为修改
        document.querySelector(".update-resume-name").parentElement.previousElementSibling.innerText=resume.resumeName;
        document.querySelector(".newresumeid").value=resume.resumeId;


        /*      创建个人信息对象         */
        console.log(resume.other1)






        var person = {
            personName: resume.other1,
            personImg: null,
            personGender: resume.resumeGender,
            personBirthday: resume.resumeBirth,
            startWorkYear: resume.other2,
            personTel: resume.resumeTelno,
            personJObType: resume.resumeFullPartTime,
            personEmail: resume.resumeEmail,
            personLoc: resume.resumeLiveCity,
            idCardType: null,
            personId: resume.resumePersonid,
            personIncome: resume.resumeIncome
        }

        console.log(person.personName)
        var nowTime = new Date();

        $(".p-username").text(person.personName);
        $(".p-user-icon").css("background-image", person.personImg)

        var workyear = nowTime.getFullYear() - person.startWorkYear;
        var agestr=person.personBirthday;
        var birth = dateformat(agestr);
        var date = new Date(agestr);
        var year = date.getFullYear();
        console.log(year)

        var age = nowTime.getFullYear() - year;
        console.log("age:"+age)
        //现居住于苏州工业园区 | 1年工作经验 | 男 | 22岁(1997/08/20) | 目前正在找工作

        var value = "现居住于" + person.personLoc + " | " + workyear + "年工作经验  |" + person.personGender + age+"岁(" + birth + ")  |  " + person.personJObType;

        $(".p-user-content p").text(value);

        $(".p-email").text(person.personEmail);
        $(".p-phone").text(person.personTel);


        /*================      修改简历名称          ======================*/

        function updateOpen() {
            var titleEle = document.querySelector(".update-resume-name").parentElement.parentElement;
            console.log(titleEle);
            var oldName = document.querySelector(".update-resume-name").parentElement.previousElementSibling.innerText;
            console.log("oldName:" + oldName);
            titleEle.innerHTML = "<input type=\"text\" class=\"input-name\" value=" + oldName + " >\n" +
                "                    <button class=\"save-btn1\" onclick=\"saveUpdateName()\">保存</button>\n" +
                "                    <button class=\"undo-btn\" onclick=\"undo()\">取消</button>";


            console.log(document.querySelector(".save-btn1"));


        }


        function saveUpdateName() {
            var inputEle = document.querySelector(".save-btn1").previousElementSibling.value;
            var titleEle = document.querySelector(".save-btn1").parentElement;
            titleEle.innerHTML = "<span class=\"title-h3 oldresumename\" style=\"line-height: 90px\">" + inputEle + "</span>\n" +
                "                    <a href=\"JavaScript:void(0)\" onclick=\"updateOpen()\"><img src=\"/static/images/update.svg\" class=\"update-resume-name\" style=\"margin:33px 30px\"></a>";


            var newresumeid = document.querySelector(".newresumeid").value;
            if (newresumeid == "" || newresumeid == undefined){
                savenewresume(inputEle);
                console.log("点击了保存")
            }else {
                updateresume(newresumeid,inputEle);
            }


        }
//保存简历
        function savenewresume(resumename) {
            console.log("新建保存")
            $.ajax({
                type:"get",
                url:"/zhaopin/resume?option=saveresume&resumename="+resumename,
                datatype:"json",
                success:function (resultjson) {
                    var dataresume = JSON.parse(resultjson);
                    if (dataresume.status == 1){
                        console.log("保存成功"+dataresume.data);
                        var resume = dataresume.data;
                        document.querySelector(".newresumeid").value=resume.resumeId;
                        document.querySelector(".resumeupdatetime").innerHTML=dateformat(resume.resumeCreateTime);
                    }else{
                        console.log("保存失败")
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
//更新简历
        function updateresume(newresumeid,resumename) {
            var inputEle = document.querySelector(".oldresumename").innerHTML;
            console.log("更新："+inputEle);
            $.ajax({
                type:"get",
                url:"/zhaopin/resume?option=updateresume&newresumeid="+newresumeid+"&resumename="+inputEle,
                datatype:"json",
                success:function (resultjson) {
                    var dataresume = JSON.parse(resultjson);
                    if (dataresume.status == 1){
                        console.log("跟心成功");
                        document.querySelector(".resumeupdatetime").innerHTML=dateformat(new Date());
                    }else{
                        console.log("更新失败")
                    }

                }
            })
        }


        function undo() {
            var titleEle = document.querySelector(".save-btn1").parentElement;
            titleEle.innerHTML = "<span class=\"title-h3\" style=\"line-height: 90px\">我的简历</span>\n" +
                "                    <a href=\"JavaScript:void(0)\" onclick=\"updateOpen()\"><img src=\"/static/images/update.svg\" class=\"update-resume-name\" style=\"margin:33px 30px\"></a>";

        }


        /*+++++++++++++++            左侧浮动固定在页面             +++++++++++++++=*/
        window.onscroll = function () {
            var leftNavDiv = document.querySelector(".left-nav")
            var height = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(height);
            if (height >= 60) {
                leftNavDiv.style = "position:fixed;top:0;"
            } else {
                leftNavDiv.style = ""
            }

        }


        /*================      修改简历中的照片          ======================*/
        $(".do a").click(function () {
            $(".update-user-page").show();           ////   未完善
        })


        /*================      获取简历中个人的基本信息          ======================*/

        document.querySelector(".gender-click").onclick = function (event) {
            var ele = event.target;

            var manBtn = document.querySelector(".man-btn");
            var manIcon = document.querySelector(".man-icon");
            var womenBtn = document.querySelector(".women-btn");
            var womenIcon = document.querySelector(".women-icon");

            if (ele.nodeName = "BUTTON" && ele.className == "man-btn" && ele.style.color != "white") {
                manBtn.style = "color:white;background-color:#ff9f20;";
                manIcon.style = "background:url('/static/images/man-w.svg');background-size:15px 15px;";
                womenBtn.style = "color:black;background-color:#F0F0F0;";
                womenIcon.style = "background:url('/static/images/women-r.svg');background-size:15px 15px;";
                document.querySelector(".user-page").style = "background-image:url('../static/images/man.png')"
                // $(".user-page").css("background-image","url('../images/man.png')");
            } else if (ele.nodeName = "BUTTON" && ele.className == "women-btn" && ele.style.color != "white") {
                manBtn.style = "color:black;background-color:#F0F0F0;";
                manIcon.style = "background:url('/static/images/man-b.svg');background-size:15px 15px;";
                womenBtn.style = "color:white;background-color:#ff9f20;";
                womenIcon.style = "background:url('/static/images/women-w.svg');background-size:15px 15px;";
                document.querySelector(".user-page").style = "background-image:url('/static/images/woman.png'); display: inline-block; width: 85px;height: 105px;"
                //  $(".user-page").css("background-image","url('./images/women.png')");
            }

        }


        document.querySelector(".user-save-btn").onclick = function () {
            person.personName = document.querySelector(".perName").value;
            var gender = document.querySelectorAll(".gender-click button");
            for (var i = 0; i < gender.length; i++) {
                if (gender[i].style.color == "white") {
                    person.personGender = gender[i].innerText;
                }
            }
            person.personImg = $(".user-page").css("backgroundImage");
            console.log(person.personImg);
            person.personBirthday = document.querySelector(".birthday").value;
            person.startWorkYear = document.querySelector(".startworkyear").value;
            person.personTel = document.querySelector(".phone").value;
            person.personJObType = document.querySelector(".select-type").value;
            person.personEmail = document.querySelector(".email").value;
            person.personLoc = document.querySelector(".loc").value;
            person.idCardType = document.querySelector(".card-select").value;
            person.personId = document.querySelector(".id").value;

            $(".user-infor").hide();
            $(".preview-infor").show();

            /*================     向简历展示中填写个人的基本信息          ======================*/

            var nowTime = new Date();

            $(".p-username").text(person.personName);
            $(".p-user-icon").css("background-image", person.personImg)

            var workyear = nowTime.getFullYear() - person.startWorkYear;
            var age1 = nowTime.getFullYear()-new Date(person.personBirthday).getFullYear();
            //现居住于苏州工业园区 | 1年工作经验 | 男 | 22岁(1997/08/20) | 目前正在找工作

            var value = "现居住于" + person.personLoc + " | " + workyear + "年工作经验  |" + person.personGender +
                age1 + "岁(" + person.personBirthday + ")  |  " + person.personJObType;

            $(".p-user-content p").text(value);

            $(".p-email").text(person.personEmail);
            $(".p-phone").text(person.personTel);

         //   updatePersonInfo();

        }
        function updatePersonInfo(){
            console.log(1234565);
            var newresumeid = document.querySelector(".newresumeid").value;
            $.ajax({
                type:"post",
                url:"/zhaopin/resume",
                data:{
                    "option":"updatePersonInfo",
                    "newresumeid":newresumeid,
                    "person.personName":person.personName,
                    "person.personGender":person.personGender,
                    "personBirthday":person.personBirthday,
                    "startWorkYear":person.startWorkYear,
                    "person.personTel":person.personTel,
                    "person.personJObType":person.personJObType,
                    "person.personEmail":person.personEmail,
                    "person.personLoc":person.personLoc,
                    "person.idCardType":person.idCardType,
                    "person.personId":person.personId
                },
                success:function (resultjson) {
                    var result =  JSON.parse(resultjson);
                    if (result.status == 1){
                        console.log("保存成功")
                    }else{
                        console.log("保存失败");
                    }

                }


            })







        }

        $(".user-title a").click(function () {
            $(".preview-infor").hide();
            $(".user-infor").show();

            $(".user-page").css("background-image", person.personImg);
            $(".perName").val(person.personName);
            $(".birthday").val(person.personBirthday);
            $(".startworkyear").val(person.startWorkYear);
            $(".phone").val(person.personTel);
            $(".email").val(person.personEmail);
            $(".loc").val(person.personLoc);
            $(".card-select").val(person.idCardType);
            $(".id").val(person.personId);
            $(".select-type").val(person.personJObType);
        })


        $(".user-undo-btn").click(function () {
            $(".user-infor").hide();
            $(".preview-infor").show();

            /*================     向简历展示中填写个人的基本信息          ======================*/

            var nowTime = new Date();

            $(".p-username").text(person.personName);
            $(".p-user-icon").css("background-image", person.personImg)

            var workyear = nowTime.getFullYear() - person.startWorkYear;
            var age1 = nowTime.getFullYear()-new Date(person.personBirthday).getFullYear();

            //现居住于苏州工业园区 | 1年工作经验 | 男 | 22岁(1997/08/20) | 目前正在找工作

            var value = "现居住于" + person.personLoc + " | " + workyear + "年工作经验  |" + person.personGender +
                age1 + "岁(" + person.personBirthday + ")  |  " + person.personJObType;

            $(".p-user-content p").text(value);

            $(".p-email").text(person.personEmail);
            $(".p-phone").text(person.personTel);
        })


        /*    添加、修改年薪    */

        $(".year-income-title img").click(function () {
            $(".show-income").hide();
            $(".year-income").show();

        })


        $(".income-money").val(person.personIncome);
        /*   保存年薪   */
        $(".income-save-btn").click(function () {
            $(".year-income").hide();
            $(".show-income").show();
            person.personIncome = $(".income-money").val();
            console.log(person.personIncome)
            if (person.personIncome == "" || person.personIncome == null || person.personIncome == "0") {
                $(".year-income-title i").remove();
            } else {
                $(".income-value").text(person.personIncome);
            }
            savesalary();
        })

        function savesalary(){
            var personInco = $(".income-money").val();
            var newresumeid = document.querySelector(".newresumeid").value;
            $.ajax({
                type:"post",
                url:"/zhaopin/resume",
                data:{
                    "option":"savasalary",
                    "resumeid":newresumeid,
                    "personIncome":personInco
                },
                success:function (resultjson) {
                    console.log("salary保存成功")
                }
            })
        }

        $(".income-value").text(person.personIncome)
        /*    取消    */
        $(".income-undo-btn").click(function () {
            $(".year-income").hide();
            $(".show-income").show();
            if (person.personIncome == "" || person.personIncome == null || person.personIncome == "0") {
                $(".year-income-title i").remove();
            } else {
                $(".income-value").text(person.personIncome);

            }
        });


        /*       工作经验         */

//console.log($(".btn-jian").val())
        $(".btn-jian").click(function () {
            $(".btn-quan").css("background-color", "white");
            $(".btn-quan").css("color", "black");
            $(".btn-quan").css("border", "1px solid black");
            $(".btn-jian").css("background-color", "#ff6000");
            $(".btn-jian").css("color", "white");
            $(".btn-jian").css("border", "none");
        });

        $(".btn-quan").click(function () {
            $(".btn-quan").css("background-color", "#ff6000");
            $(".btn-quan").css("color", "white");
            $(".btn-quan").css("border", "none");
            $(".btn-jian").css("background-color", "white");
            $(".btn-jian").css("color", "black");
            $(".btn-jian").css("border", "1px solid black");
        });


        $(".job-experience").hide();
        $(".job-experience-show").show();
        initExper(workExperienceList);
        /*=渲染工作经验数据=*/
        function initExper(experList) {
            console.log("experList的数量" + experList.length);
            document.querySelector(".jse-con").innerHTML = "";
            for (var i = 0; i < experList.length; i++) {
                var exper = experList[i];
                console.log(exper);
                var time = new Date(exper.workStartTime).getFullYear() + "/" + (new Date(exper.workStartTime).getMonth() + 1) + "-" +
                    new Date(exper.workEndTime).getFullYear() + "/" + (new Date(exper.workEndTime).getMonth() + 1);
                console.log("time = " + time)
                var ssstring = "计算机软件 | " + exper.workCompanyScaler + " | " + exper.workCompanyProperty + " | " + exper.workDepartment;

                var experHtml = "<div class=\"jes-content\">\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>" + time + "</span>\n" +
                    "                        <em class=\"em1\">" + exper.workCompanyName + "</em>\n" +
                    "                        <em class=\"em2\">" + exper.workPosition + "</em>\n" +
                    "                        <a href=\"javascript:void(0)\" class=\"jes-update\"><img src=\"/static/images/update.svg\"></a>\n" +
                    "                        <a href=\"javascript:void(0)\" class=\"jes-delete\"><img src=\"/static/images/delete.svg\"></a>\n" +
                    "                        <input type=\"hidden\" value=\"" + exper.workExperiId + "\">\n" +
                    "                    </div>\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>" + ssstring + "</span>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>工作描述 ：</span><span> " + exper.workDesc + "</span>\n" +
                    "                    </div>\n" +
                    "                </div>"


                document.querySelector(".jse-con").innerHTML += experHtml;

                //  console.log(document.querySelector(".job-experience-show").innerHTML)
            }
        }


        $(".job-expr-save").click(function () {
            $(".job-experience-show").show();
            $(".job-experience").hide();

            /*    工作经验对象     */
            var jobExper = {
                jobTime: null,
                company: null,
                experJobLevel: null,
                companySize: null,
                depatement: null,
                companyType: null,
                jobDescription: null,
                experJobType: null
            }


            jobExper.jobTime = $(".time-ipt").val()
            jobExper.company = $(".company-name").val()
            jobExper.experJobLevel = $(".expr-job-level").val()
            jobExper.companySize = $(".expr-company-size").val()
            jobExper.depatement = $(".expr-dept").val()
            jobExper.companyType = $(".company-type").val()
            jobExper.jobDescription = $(".job-description").val()
            var experBtnList = $(".last-expr-row button");
            for (var i = 0; i < experBtnList.length; i++) {
                if (experBtnList[i].style.color == "white") {
                    jobExper.experJobType = experBtnList[i].innerText;
                    console.log("jobExper.experJobType = " + jobExper.experJobType)
                }
            }
            console.log(jobExper);

            var index = $(".job-exper-key").val();

            if (jobExper.jobTime != null && jobExper.company != null && jobExper.experJobLevel != null
                && jobExper.companySize != null && jobExper.depatement != null && jobExper.companyType != null
                && jobExper.jobDescription != null && jobExper.experJobType != null) {

                if (experList.length == 0) {
                    experList[0] = jobExper;
                } else if (experList.length != 0 && index == "") {
                    experList[experList.length] = jobExper;
                } else {
                    experList[index] = jobExper;
                }


            }

            var wordexpenid = $(".workexperienceid").val();
            if (wordexpenid==null||wordexpenid=="") {
                savaworkexperience();
                initExper();
            }else {
                updateworkexperience();
                initExper();
            }


        });
        function updateworkexperience() {
            var wordexpenid = $(".workexperienceid").val();
            var jobTime = $(".time-ipt").val();
            var startWorktime = jobTime.substring(0, 7);
            var endWorkTime = jobTime.substring(10) ;
            var company = $(".company-name").val();
            var experJobLevel = $(".expr-job-level").val();
            var companySize = $(".expr-company-size").val();
            var depatement = $(".expr-dept").val();
            var companyType = $(".company-type").val();
            var jobDescription = $(".job-description").val();
            var experBtnList = $(".last-expr-row button");
            for (var i = 0; i < experBtnList.length; i++) {
                if (experBtnList[i].style.color == "white") {
                    var experJobType = experBtnList[i].innerText;
                }
            }
            $.ajax({
                type:"post",
                url:"/zhaopin/workExperience",
                datatype:"json",
                data:{
                    "option":"update",
                    "wordexpenid":wordexpenid,
                    "startWorktime":startWorktime,
                    "endWorkTime":endWorkTime,
                    "companyName":company,
                    "companySize":companySize,
                    "depatement":depatement,
                    "jobName":experJobLevel,
                    "companyType":companyType,
                    "jobDescription":jobDescription,
                    "jobType":experJobType
                },
                success:function(jsonResult){
                    console.log(jsonResult);
                    var result = JSON.parse(jsonResult);
                    if(result.status ==1){
                        console.log("修改成功");
                        $(".job-experience-show").show();  // 显示读取模式
                        $(".job-experience").hide(); //隐藏编辑模式
                        initExper();
                    }else{
                        console.log("修改失败");
                    }
                }

            })

        }

        function savaworkexperience(){
            var jobTime = $(".time-ipt").val();
            var startWorktime = jobTime.substring(0, 7);
            var endWorkTime = jobTime.substring(10) ;
            var company = $(".company-name").val();
            var experJobLevel = $(".expr-job-level").val();
            var companySize = $(".expr-company-size").val();
            var depatement = $(".expr-dept").val();
            var companyType = $(".company-type").val();
            var jobDescription = $(".job-description").val();
            var experBtnList = $(".last-expr-row button");
            for (var i = 0; i < experBtnList.length; i++) {
                if (experBtnList[i].style.color == "white") {
                    var experJobType = experBtnList[i].innerText;
                }
            }
            var newresumeid = document.querySelector(".newresumeid").value;
            $.ajax({
                type:"post",
                url:"/zhaopin/workExperience",
                datatype:"json",
                data:{
                    "option":"add",
                    "resumeId":newresumeid,
                    "startWorktime":startWorktime,
                    "endWorkTime":endWorkTime,
                    "companyName":company,
                    "companySize":companySize,
                    "depatement":depatement,
                    "jobName":experJobLevel,
                    "companyType":companyType,
                    "jobDescription":jobDescription,
                    "jobType":experJobType
                },
                success:function(jsonResult){
                    console.log(jsonResult);
                    var result = JSON.parse(jsonResult);
                    if(result.status ==1){
                        console.log("添加成功");
                        console.log("这个工作经验的id是："+result.data.workExperiId)
                        $(".workexperienceid").val(result.data.workExperiId);
                        $(".job-experience-show").show();  // 显示读取模式
                        $(".job-experience").hide(); //隐藏编辑模式
                        initExper();
                    }else{
                        console.log("添加失败");
                    }
                }

            })




        }


        $(".job-expr-unsave").click(function () {
            $(".job-experience-show").show();
            $(".job-experience").hide();

            initExper();
        });


// console.log(document.querySelector(".job-experience-show"))

        document.querySelector(".job-experience-show").onclick = function (event) {

            var ele = event.target;


            if (ele.nodeName == "IMG") {
                var nextEle = ele.parentElement.nextElementSibling.lastElementChild;
                var preEle = ele.parentElement.previousElementSibling.lastElementChild;

                // console.log(nextEle);
                // console.log(preEle);

                if (nextEle != null && nextEle.nodeName == "IMG") {
                    $(".job-experience-show").hide();
                    $(".job-experience").show();

                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    var jobExper = experList[index];


                    $(".job-exper-key").val(index);
                    $(".time-ipt").val(jobExper.jobTime);
                    $(".company-name").val(jobExper.company);
                    $(".expr-job-level").val(jobExper.experJobLevel);
                    $(".expr-company-size").val(jobExper.companySize);
                    $(".expr-dept").val(jobExper.depatement);
                    $(".company-type").val(jobExper.companyType);
                    $(".job-description").val(jobExper.jobDescription);


                    if (jobExper.experJobType == "全职") {
                        $(".btn-quan").css("background-color", "#ff6000");
                        $(".btn-quan").css("color", "white");
                        $(".btn-quan").css("border", "none");
                        $(".btn-jian").css("background-color", "white");
                        $(".btn-jian").css("color", "black");
                        $(".btn-jian").css("border", "1px solid black");
                    } else {
                        $(".btn-quan").css("background-color", "white");
                        $(".btn-quan").css("color", "black");
                        $(".btn-quan").css("border", "1px solid black");
                        $(".btn-jian").css("background-color", "#ff6000");
                        $(".btn-jian").css("color", "white");
                        $(".btn-jian").css("border", "none");
                    }

                } else if (preEle.nodeName == "IMG") {
                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    experList.splice(index, 1);
                    console.log(experList.length)
                    initExper();
                }
            }


        }


        /*       项目经验        */

        function show2() {
            $(".pro-experience-show").hide();
            $(".pro-exp").show();
            $(".pro-exper-key").val("");
        }


        var proList = new Array();

        $(".pro-expr-save").click(function () {
            $(".pro-experience-show").show();
            $(".pro-exp").hide();


            var project = {
                proTime: null,
                proCompany: null,
                proName: null,
                proDesc: null,
                proDuty: null
            }


            project.proTime = $(".pro-time-ipt").val();
            project.proCompany = $(".pro-company-name").val();
            project.proName = $(".expr-pro-name").val();
            project.proDesc = $(".pro-description").val();
            project.proDuty = $(".pro-duty-description").val();
            var index = $(".pro-exper-key").val();

            console.log(project)


            if (project.proTime != null && project.proCompany != null && project.proName != null && project.proDesc != null && project.proDuty != null) {

                if (proList.length == 0) {
                    console.log("第一层");
                    proList[0] = project;
                } else if (proList.length != 0 && index == "") {
                    console.log("第二层");
                    proList[proList.length] = project;
                } else {
                    proList[index] = project;
                    console.log("第三层");
                }


            }

            var projectexperid = $(".projectexperienceid").val();
            if (projectexperid == null || projectexperid == ""){
                saveprojectexperience();
            }else{
                updateprojectexperience();
            }

            initProject();

        })
        function updateprojectexperience() {
            var proTime = $(".pro-time-ipt").val();
            var startprotime = proTime.substring(0, 7);
            var endproTime = proTime.substring(10) ;
            var proCompany = $(".pro-company-name").val();
            var proName = $(".expr-pro-name").val();
            var proDesc = $(".pro-description").val();
            var proDuty = $(".pro-duty-description").val();
            var newresumeid = document.querySelector(".newresumeid").value;
            var projectexperid = $(".projectexperienceid").val();
            $.ajax({
                type:"post",
                url:"/zhaopin/project",
                data:{
                    "option":"update",
                    "projectexperid":projectexperid,
                    "startprotime":startprotime,
                    "endproTime":endproTime,
                    "proCompany":proCompany,
                    "proName":proName,
                    "proDesc":proDesc,
                    "proDuty":proDuty
                },
                datatype:"json",
                success:function (resultjson) {
                    var result = JSON.parse(resultjson);
                    if (result.status==1){
                        console.log("项目经验修改成功")
                    }else{
                        console.log("项目经验修改失败")
                    }
                }
            })

        }
        function saveprojectexperience() {
            var proTime = $(".pro-time-ipt").val();
            var startprotime = proTime.substring(0, 7);
            var endproTime = proTime.substring(10) ;
            var proCompany = $(".pro-company-name").val();
            var proName = $(".expr-pro-name").val();
            var proDesc = $(".pro-description").val();
            var proDuty = $(".pro-duty-description").val();
            var newresumeid = document.querySelector(".newresumeid").value;
            $.ajax({
                type:"post",
                url:"/zhaopin/project",
                data:{
                    "option":"add",
                    "resumeid":newresumeid,
                    "startprotime":startprotime,
                    "endproTime":endproTime,
                    "proCompany":proCompany,
                    "proName":proName,
                    "proDesc":proDesc,
                    "proDuty":proDuty
                },
                datatype:"json",
                success:function (resultjson) {
                    var result = JSON.parse(resultjson);
                    if (result.status==1){
                        $(".projectexperienceid").val(result.data.projectExperiId);
                        console.log("项目经验保存成功")
                    }else{
                        console.log("项目经验保存失败")
                    }
                }
            })





        }

//console.log(document.querySelector(".pro-con").innerHTML)


        function initProject() {
            //   console.log(123)
            document.querySelector(".pro-con").innerHTML = "";

            //   console.log("proList.length"+proList.length)
            for (var i = 0; i < proList.length; i++) {
                var pro = proList[i];
                var time = pro.proTime.substring(0, 4) + "/" + pro.proTime.substring(5, 14) + "/" + pro.proTime.substring(15, 17);

                var proHtml = "<div class=\"jes-content\">" +
                    "<div class=\"jesc-row\">\n" +
                    "                        <span>" + time + "</span>\n" +
                    "                        <em class=\"em1\">" + pro.proName + "</em>\n" +
                    "                        <a href=\"javascript:void(0)\" class=\"jes-update\"><img src=\"/static/images/update.svg\"></a>\n" +
                    "                        <a href=\"javascript:void(0)\" class=\"jes-delete\"><img src=\"/static/images/delete.svg\"></a>\n" +
                    "                        <input type=\"hidden\" value=\"" + i + "\" class=\"pro-key\">\n" +
                    "                    </div>\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>所属公司 ：</span><span>" + pro.proCompany + "</span>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>工作描述 ：</span><span> " + pro.proDesc + "</span>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"jesc-row\">\n" +
                    "                        <span>工作描述 ：</span><span> " + pro.proDuty + "</span>\n" +
                    "                    </div> </div>"
                document.querySelector(".pro-con").innerHTML += proHtml;


            }
            //  console.log(document.querySelector(".pro-con").innerHTML)
        }

        $(".pro-expr-unsave").click(function () {
            $(".pro-experience-show").show();
            $(".pro-exp").hide();
            initProject();
        })


        document.querySelector(".pro-experience-show").onclick = function (event) {

            var ele = event.target;


            if (ele.nodeName == "IMG") {
                var nextEle = ele.parentElement.nextElementSibling.lastElementChild;
                var preEle = ele.parentElement.previousElementSibling.lastElementChild;

                console.log(nextEle);
                console.log(preEle);

                if (nextEle != null && nextEle.nodeName == "IMG") {
                    $(".pro-experience-show").hide();
                    $(".pro-exp").show();

                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    var project = proList[index];

                    $(".pro-time").val(project.proTime);
                    $(".pro-company-name").val(project.proCompany);
                    $(".expr-pro-name").val(project.proName);
                    $(".pro-description").val(project.proDesc);
                    $(".pro-duty-description").val(project.proDuty);
                    $(".pro-exper-key").val(index);


                } else if (preEle.nodeName == "IMG") {
                    var index = $(".pro-exper-key").val();
                    proList.splice(index, 1);
                    console.log(proList.length)
                    initProject();
                }
            }


        }


        /*       教育经历        */
        function show3() {
            $(".edu-experience-show").hide();
            $(".edu-exp").show();
            $(".edu-key").val("");
        }

        $(".btn-no").click(function () {
            $(".btn-yes").css("background-color", "white");
            $(".btn-yes").css("color", "black");
            $(".btn-yes").css("border", "1px solid black");
            $(".btn-no").css("background-color", "#ff6000");
            $(".btn-no").css("color", "white");
            $(".btn-no").css("border", "none");
        });

        $(".btn-yes").click(function () {
            $(".btn-yes").css("background-color", "#ff6000");
            $(".btn-yes").css("color", "white");
            $(".btn-yes").css("border", "none");
            $(".btn-no").css("background-color", "white");
            $(".btn-no").css("color", "black");
            $(".btn-no").css("border", "1px solid black");
        });


        var eduList = new Array();
        $(".edu-expr-save").click(function () {
            $(".edu-experience-show").show();
            $(".edu-exp").hide();


            var edu = {
                eduTime: null,
                eduSchool: null,
                eduLevel: null,
                isAllDay: null,
                major: null,
                majorDesc: null,
                overSeasExp: null
            }

            edu.eduTime = $(".edu-time-ipt").val();
            edu.eduSchool = $(".school-name").val();
            edu.eduLevel = $(".edu-select").val();
            edu.isAllDay = $(".isAllDay").val();
            edu.major = $(".major").val();
            edu.majorDesc = $(".major-description").val();
            var index = $(".edu-exper-key").val();

            var btnList = $(".edu-btn button");
            for (var i = 0; i < btnList.length; i++) {
                if (btnList[i].style.color == "white") {
                    edu.overSeasExp = "是";
                    console.log("btnList.experJobType = " + edu.overSeasExp)
                }
            }


            console.log(edu)

            if (edu.eduTime != null && edu.eduSchool != null && edu.eduLevel != null && edu.major != null
                && edu.majorDesc != null && edu.overSeasExp != null && edu.majorDesc != null) {

                if (eduList.length == 0) {
                    console.log(1223)
                    eduList[0] = edu;
                } else if (eduList.length != 0 && index == "") {
                    console.log(12364)
                    eduList[eduList.length] = edu;
                } else {
                    console.log(3645)
                    eduList[index] = edu;
                }

            }

            initEdu();


        })

        function initEdu() {
            document.querySelector(".edu-con").innerHTML = "";

            console.log("eduList.length"+eduList.length)
            for (var i = 0; i < eduList.length; i++) {
                var edu = eduList[i];
                var time = edu.eduTime.substring(0, 4) + "/" + edu.eduTime.substring(5, 14) + "/" + edu.eduTime.substring(15, 17);

                var eduHtml = "<div class=\"jes-content\">\n" +
                    "                        <div class=\"jesc-row\">\n" +
                    "                            <span>" + time + "</span>\n" +
                    "                            <em class=\"em1\">" + edu.eduSchool + "</em>\n" +
                    "                            <em class=\"em2\">" + edu.major + "</em>\n" +
                    "                            <span class=\"major-right\">" + edu.eduLevel + "</span>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-update\"><img src=\"static/images/update.svg\"></a>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-delete\"><img src=\"static/images/delete.svg\"></a>\n" +
                    "                            <input type=\"hidden\" value=\"" + i + "\" class=\"edu-key\">\n" +
                    "                        </div>\n" +
                    "                    </div>";
                document.querySelector(".edu-con").innerHTML += eduHtml;
            }
        }

        $(".edu-expr-unsave").click(function () {
            $(".edu-experience-show").show();
            $(".edu-exp").hide();
            initEdu();
        })


        document.querySelector(".edu-experience-show").onclick = function (event) {

            var ele = event.target;


            if (ele.nodeName == "IMG") {
                var nextEle = ele.parentElement.nextElementSibling.lastElementChild;
                var preEle = ele.parentElement.previousElementSibling.lastElementChild;

                console.log(nextEle);
                console.log(preEle);

                if (nextEle != null && nextEle.nodeName == "IMG") {
                    $(".edu-experience-show").hide();
                    $(".edu-exp").show();

                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    var edu = eduList[index];

                    $(".edu-time-ipt").val(edu.eduTime);
                    $(".school-name").val(edu.eduSchool);
                    $(".edu-select").val(edu.eduLevel);
                    $(".isAllDay").val(edu.isAllDay);
                    $(".major").val(edu.major);
                    $(".major-description").val(edu.majorDesc);
                    $(".edu-exper-key").val(index);


                    if (edu.overSeasExp = "是"){
                        $(".btn-yes").css("background-color", "#ff6000");
                        $(".btn-yes").css("color", "white");
                        $(".btn-yes").css("border", "none");
                        $(".btn-no").css("background-color", "white");
                        $(".btn-no").css("color", "black");
                        $(".btn-no").css("border", "1px solid black");
                    } else{
                        $(".btn-yes").css("background-color", "white");
                        $(".btn-yes").css("color", "black");
                        $(".btn-yes").css("border", "1px solid black");
                        $(".btn-no").css("background-color", "#ff6000");
                        $(".btn-no").css("color", "white");
                        $(".btn-no").css("border", "none");
                    }


                } else if (preEle.nodeName == "IMG") {
                    var index = $(".edu-key").val();
                    eduList.splice(index, 1);
                    console.log(eduList.length)
                    initEdu();
                }
            }


        }


        /*      在校荣誉         */
        function show4() {
            $(".aword-experience-show").hide();
            $(".aword").show();
            $(".aword-key").val("");
        }

        var awordList = new Array();

        $(".aword-expr-save").click(function () {
            $(".aword-experience-show").show();
            $(".aword").hide();

            var aword = {
                awordTime:null,
                awordName:null,
                awordLevel:null
            }

            aword.awordTime = $(".aword-time").val();
            aword.awordName = $(".aword-name").val();
            aword.awordLevel = $(".aword-level").val();
            var index = $(".aword-key").val();

            if (aword.awordName!=null && aword.awordTime!=null && aword.awordLevel!=null) {

                if (awordList.length == 0) {
                    awordList[0] = aword;
                } else if (awordList.length != 0 && index == "") {
                    awordList[awordList.length] = aword;
                } else {
                    awordList[index] = aword;
                }

            }

            initAword();

        })


        function initAword() {
            console.log(" awordList.length:" + awordList.length)
            document.querySelector(".aword-con").innerHTML = "";
            for (var i = 0; i < awordList.length; i++) {
                var aword = awordList[i];

                var awordHtml = "<div class=\"jes-content\">\n" +
                    "                        <div class=\"jesc-row\">\n" +
                    "                            <span>"+aword.awordTime+"</span>\n" +
                    "                            <em class=\"em1\">"+aword.awordName+"</em>\n" +
                    "                            <em class=\"em2\">"+aword.awordLevel+"</em>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-update\"><img src=\"static/images/update.svg\"></a>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-delete\"><img src=\"static/images/delete.svg\"></a>\n" +
                    "                            <input type=\"hidden\" value=\""+i+"\" class=\"aword-key\">\n" +
                    "                        </div>\n" +
                    "                    </div>";



                document.querySelector(".aword-con").innerHTML += awordHtml;
            }
        }

        $(".aword-expr-unsave").click(function () {
            $(".aword-experience-show").show();
            $(".aword").hide();
            initAword();
        })


        document.querySelector(".aword-experience-show").onclick = function (event) {

            var ele = event.target;


            if (ele.nodeName == "IMG") {
                var nextEle = ele.parentElement.nextElementSibling.lastElementChild;
                var preEle = ele.parentElement.previousElementSibling.lastElementChild;

                console.log(nextEle);
                console.log(preEle);

                if (nextEle != null && nextEle.nodeName == "IMG") {
                    $(".aword-experience-show").hide();
                    $(".aword").show();

                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    var aword = awordList[index];

                    $(".aword-time").val(aword.awordTime);
                    $(".aword-name").val(aword.awordName);
                    $(".aword-level").val(aword.awordLevel);
                    $(".aword-key").val(index);



                } else if (preEle.nodeName == "IMG") {
                    var index = $(".aword-key").val();
                    awordList.splice(index, 1);
                    initAword();
                }
            }


        }


        /*      技能特长         */
        function show5() {
            $(".skill-experience-show").hide();
            $(".skill").show();
            $(".skill-key").val("");
        }


        var skillList = new Array();

        $(".skill-expr-save").click(function () {
            $(".skill-experience-show").show();
            $(".skill").hide();

            var skill = {
                skillName:null,
                skillLevel:null
            }

            skill.skillName = $(".skill-name").val();
            skill.skillLevel = $(".skill-level").val();
            var index = $(".skill-key").val();


            if (skill.skillName != null && skill.skillLevel!=null){
                if (skillList.length == 0){
                    skillList[0] = skill;
                } else if (skillList.length !=0 && index == ""){
                    skillList[skillList.length] = skill;
                } else {
                    skillList[index] = skill;
                }
            }

            initSkill();


        })


        function initSkill() {
            document.querySelector(".skill-con").innerHTML = "";
            for (var i = 0; i < skillList.length; i++) {
                var skill = skillList[i];

                var skillHtml = "<div class=\"jes-content\">\n" +
                    "                        <div class=\"jesc-row\">\n" +
                    "                            <span>"+skill.skillName+"</span>\n" +
                    "                            <em class=\"em1\">"+skill.skillLevel+"</em>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-update\"><img src=\"static/images/update.svg\"></a>\n" +
                    "                            <a href=\"javascript:void(0)\" class=\"jes-delete\"><img src=\"static/images/delete.svg\"></a>\n" +
                    "                            <input type=\"hidden\" value=\""+i+"\" class=\"skill-key\">\n" +
                    "                        </div>\n" +
                    "                    </div>";

                document.querySelector(".skill-con").innerHTML += skillHtml;
            }

        }

        $(".skill-expr-unsave").click(function () {
            $(".skill-experience-show").show();
            $(".skill").hide();
            initSkill();
        })


        document.querySelector(".skill-experience-show").onclick = function (event) {

            var ele = event.target;


            if (ele.nodeName == "IMG") {
                var nextEle = ele.parentElement.nextElementSibling.lastElementChild;
                var preEle = ele.parentElement.previousElementSibling.lastElementChild;

                console.log(nextEle);
                console.log(preEle);

                if (nextEle != null && nextEle.nodeName == "IMG") {
                    $(".skill-experience-show").hide();
                    $(".skill").show();

                    var index = ele.parentElement.parentElement.lastElementChild.value;
                    var skill = skillList[index];

                    $(".skill-name").val( skill.skillName);
                    $(".skill-level").val(skill.skillLevel);
                    $(".skill-key").val(index);


                } else if (preEle.nodeName == "IMG") {
                    var index = $(".skill-key").val();
                    eduList.splice(index, 1);
                    initEdu();
                }
            }


        }




    }
})
function show() {
    var resumeid = $(".newresumeid").val();
    console.log("reid  id:"+resumeid);
    $.ajax({
        type:"get",
        url:"/resume/show/"+resumeid,
        datatype:"json",
        success:function (result) {
            location.href="/show"
        }
    })
}