$(document).ready(function () {
   $(".send-out").mouseover(function () {
        $(".send-out").css("backgroundColor","#ff6000");
       $(".send-out").css("color","white");
       $(".send-out").css("cursor","pointer");
   })
    $(".send-out").mouseout(function () {
        $(".send-out").css("backgroundColor","#FFF2E3");
        $(".send-out").css("color","#ff6000");
    })
    $(".phonenumber").blur(function () {
        checkTelVali();
    })

    function checkTelVali() {
       console.log(123)
       //获得手机号
        var phonenumber = $(".phonenumber").val();
        if (phonenumber != "") {
            $.ajax({
                type: "get",
                url: "/customer/testphone/"+phonenumber,
                datatype: "json",
                success: function (result) {
                    if (result.status == 1) {
                        $("#remindph").css("visibility","visible");
                        $("#remindph").text("该号码已经注册过")
                    } else {
                        console.log(result.status)
                        $("#remindph").css("visibility","visible");
                        $("#remindph").html("可以正常注册")
                    }
                }
            })
        }else {
            $("#remindph").css("visibility","visible");
            $("#remindph").html("号码为空")
        }
    }

    var interValObj ;// 计时器变量，控制时间
    var count = 60; // 间隔函数
    var curCount ;//当前剩余秒数
    //2. 获得按钮点击，点击后，按钮内部显示 倒计时
    $(".send-out").click(function () {
        console.log("点击了获取验证码");
        curCount = count;
        $(".send-out").attr("disabled","true");
        $(".send-out").text(curCount + "秒重新发");
        interValObj = window.setInterval(setRemainTime,1000);
        interValTime = window.setInterval(setTime,1000);
    });

    //60s后servcode失效
    function setTime() {
        if(curCount == 0){
            window.clearInterval(interValTime);
           serverCode="";
           console.log("sercode失效了！！")
        }else{
            curCount--;
        }
    }
    function  setRemainTime() {
        if(curCount == 0){
            window.clearInterval(interValObj);
            $(".send-out").removeAttr("disabled");
            $(".send-out").text("获取验证码");
        }else{
            curCount--;
            $(".send-out").text(curCount + "秒重新发");
            console.log(curCount)
        }
    }



    var serverCode ;//用于服务器中短信验证码

   //ajax请求到后端先检查手机号，若没被注册过，获得验证码
    $(".send-out").click(function (){
        var phonenumber = $(".phonenumber").val(); // 获得手机号
        $.ajax({
            type:"get",
            url: "/customer/getcode/"+phonenumber,
            datatype:"json",
            success:function (result) {
                if(result.status == 2){
                    //服务器返回验证码
                    serverCode = result.data;
                    console.log("获取到验证码："+serverCode)
                }else{
                    window.clearInterval(interValObj);
                    $(".send-out").removeAttr("disabled");
                    $(".send-out").val("获取验证码");
                }
            }


        })

    });

//带着验证码与表单中其他数据进行注册
    $("#resgit").click(function () {
        var inputCode = $(".inputcode").val();

        var password = $(".password").val(); // 获得密码
        var realpassword = $(".realpassword").val(); // 获得确认密码
        if (password == realpassword){
            if(inputCode == serverCode){
                //ajax 请求注册用户 （添加数据到数据库中）
                var phoneNumber = $(".phonenumber").val(); // 获得手机号
                var password = $(".password").val(); // 获得手机号
                $.ajax({
                    type:"post",
                    url: "/customer/regist",
                    data:{
                        "phonenumber":phoneNumber,
                        "password":password
                    },
                    datatype:"json",
                    success:function (result) {
                        console.log("result:"+result);
                        if (result.status==1){
                            console.log("注册成功,跳转到index")
                            $(window).attr("location","/login");
                        }
                    }


                })
                console.log("ajax 请求注册用户");
            }else{
                //用户输入的验证码错误
                console.log("用户输入的验证码错误,请重新输入");
            }
        }else{
            console.log("两次密码不正确，请重新输入")
        }

    });





})