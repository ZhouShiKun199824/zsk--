var input_focus = document.querySelectorAll(".register div input");
for (var i =0;i <input_focus.length-1;i++){
    input_focus[i].onblur = function () {
        var values = this.value.trim();
        if (this.nextElementSibling.className == "remind") {
            if (values == null || values == "") {
                this.nextElementSibling.style.visibility = "visible";
            } else {
                this.nextElementSibling.style.visibility = "hidden";
            }
        }
    }
}

var res = document.querySelector(".register .res");
res.onclick = function () {
    var flag = true;
    console.log(flag);
    if (input_focus[1].value == input_focus[2].value) {
        for (var i = 0; i < input_focus.length; i++) {
            if (i <= input_focus.length - 2) {
                var values = input_focus[i].value.trim();
                if (values == null || values == "") {
                    flag = false;
                }

            } else {
                if (!input_focus[i].checked) {
                    flag = false;
                }
                console.log(flag);
            }
        }
    }else {
        flag = false;
    }

}