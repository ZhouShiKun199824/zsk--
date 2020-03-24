$(".login_tail").click(function () {
    var username = $(".username").val();
    var password = $(".password").val();
    var type;
    var datafomrt ="&username="+username+"&password="+password;
    if (/^[1][3,4,5,7,8][0-9]{9}$/.test(username)){
        type = 1;
    }else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(username)){
        type = 2;
    }else {
        type = 3;
    }
    $.ajax({
        type:"POST",
        url: "/customer/login",
        datatype:"json",
        data:"type="+type+datafomrt,
        success:function (result) {
               if (result.status == 1){
               console.log("登录成功")
                $(window).attr("location","/");
               }else {
                   console.log("账户或密码不正确")
               }
        }


    })

})