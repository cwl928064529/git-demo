var input = document.getElementsByTagName('input');
var len = input.length;

for (var i = 0; i < len; i++) {
    input[i].addEventListener('focus',function(e){
        console.log(e.target.value);
        if(e.target.value == "请输入手机号"){
            e.target.value = "";
        }else if(e.target.value == "请录入图片字符"){
            e.target.value = "";
        }else if(e.target.value == "请输入验证码"){
            e.target.value = "";
        }
    },false)
}

for (var i = 0; i < len; i++) {
    input[i].addEventListener('blur',function(e){
        console.log(e.target.value);
        if(e.target.value == ""){
            e.target.value = "请输入手机号";
        }else if(e.target.value == ""){
            e.target.value = "请录入图片字符";
        }else if(e.target.value == ""){
            e.target.value = "请输入验证码";
        }
    },false)
}

