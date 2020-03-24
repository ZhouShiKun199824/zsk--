// 点击验证码登录
var login_warp = document.querySelector(".login_wrap");
var login_wrap_verification_code = login_warp.nextElementSibling;
var btn_verification_code = document.querySelector(".tab_verification_code");
btn_verification_code.onclick = function () {
    var password = btn_verification_code.previousElementSibling;
    password.className = "tab_passwordChange";
    btn_verification_code.className = "tab_verification_codeChange";

    login_warp.style.display = "none";
    login_wrap_verification_code.style.display = "block";
};
// 点击密码登录
var btn_password = document.querySelector(".tab_password");
btn_password.onclick = function () {
    var verification_code = btn_password.nextElementSibling;
    verification_code.className = "tab_verification_code";
    btn_password.className = "tab_password";

    login_warp.style.display = "block";
    login_wrap_verification_code.style.display = "none";
};
//提示语
var input_focus = document.querySelectorAll(".login_box input");
for (var i = 0; i <input_focus.length;i++){
    input_focus[i].onblur = function () {
        var values = this.value.trim();
        if (values == null || values == ""){
            this.previousElementSibling.style.visibility = "visible";
        }else {
            this.previousElementSibling.style.visibility = "hidden";
        }
    }
}
//














// 记住密码
// var btn_checkbox = document.querySelector("#checkboxs");
// var password = btn_checkbox.previousElementSibling;
// var userName = password.previousElementSibling;
// var flag = false;
// //闭合函数
// (function () {
//     if (localStorage.getItem("username") != null && localStorage.getItem("password") != null){
//         userName.value = localStorage.getItem("username");
//         password.value = localStorage.getItem("password");
//         btn_checkbox.checked = true;
//         flag = true;
//     }
// })();
// btn_checkbox.onclick = function () {
//     if (btn_checkbox.checked) {
//         if (password.value != "" && userName != "") {
//             localStorage.setItem("username", userName.value);
//             localStorage.setItem("password", password.value);
//             flag = true;
//         }
//     }else {
//         localStorage.clear();
//         flag = false;
//     }
// };








