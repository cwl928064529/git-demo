var input = document.getElementsByTagName('input');
var code = document.getElementsByClassName('code')[0];
var picCode = document.getElementById('picCode');
var len = input.length;
var count = 0;
var key = true;
var touch = 0;
picCode.addEventListener('touchstart',function(e){
    touch ++;
    code.style.backgroundImage = "";
    if(touch % 2 == 1){
        code.style.backgroundImage = "url(img/yan.jpg)";
        console.log("yan:" + touch);
    }else{
        code.style.backgroundImage = "url(img/zheng.jpg)";
        console.log("zheng:" + touch);
    }
})

for (var i = 0; i < len; i++) {  //聚焦
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

for (var i = 0; i < len; i++) {   //失焦
    (function(j){
        input[j].addEventListener('blur',function(e){
            console.log(e.target.value);
            console.log("i:" + j);
            if(j == 0 && e.target.value == ""){
                e.target.value = "请输入手机号";
            }
            if(j == 1 && e.target.value == ""){
                e.target.value = "请录入图片字符";
            }
            if(j == 2 && e.target.value == ""){
                e.target.value = "请输入验证码";
            }
        },false)
    }(i))
        
}


input[0].addEventListener('input', function(){
    count = this.value.length;
    console.log(this.value.length);
    console.log("count:" + count);

    if((count > 11 && key == true) || String(Number(this.value)) == "NaN"){
        // NumberLayer.style.display = "block";
        
        (function () {
            layer.open({
                type:5,
                area:['600px','300px'],
                title: ['提示','font-size:44px;height:60px;line-height:60px'],
                maxmin:true,

                content: '请输入正确的手机号',
                    btn: ['确定', '取消'],

                    yes: function (index) {
                        layer.close(index);
                }
            });
        })();
        this.value = "";
        key = false;
    }
    else{
        key = true;
    }
},false)

input[1].addEventListener('input', function(){
    count = this.value.length;
    console.log(this.value.length);
    console.log("count:" + count);

    if((count > 4 && key == true)){
        // NumberLayer.style.display = "block";
        
        (function () {
            layer.open({
                type:5,
                area:['600px','300px'],
                title: ['提示','font-size:44px;height:60px;line-height:60px'],
                maxmin:true,

                content: '请输入正确的图片字符',
                    btn: ['确定', '取消'],

                    yes: function (index) {
                        layer.close(index);
                }
            });
        })();
        this.value = "";
        key = false;
    }
    else{
        key = true;
    }
},false)

input[2].addEventListener('input', function(){
    count = this.value.length;
    console.log(this.value.length);
    console.log("count:" + count);

    if((count > 6 && key == true)){
        // NumberLayer.style.display = "block";
        
        (function () {
            layer.open({
                type:5,
                area:['600px','300px'],
                title: ['提示','font-size:44px;height:60px;line-height:60px'],
                maxmin:true,

                content: '请输入正确的验证码',
                    btn: ['确定', '取消'],

                    yes: function (index) {
                        layer.close(index);
                }
            });
        })();
        this.value = "";
        key = false;
    }
    else{
        key = true;
    }
},false)
    
//验证码
var counts = 60;
 
function settime(val) {
 if(counts == 0) {
  val.removeAttribute("disabled");
  val.value = "获取验证码";
  counts = 60;
  return false;
 } else {
  val.setAttribute("disabled", true);
  val.value = "重新发送（" + counts + "）";
  counts--;
 }
 setTimeout(function() {
  settime(val);
 }, 1000);
}

$(function(){
 //获取验证码
 $("#verCodeBtn").click(function() {
  var userinfo = {
   "UserPhoneNum": '86//' + $("input[name='phoneNumber']").val()
  }
  $.ajax({
   url: "https://www.xxxxx.cn/user/sendcode/",
   data: userinfo,
   type: "get",
   success: function(data) {
    if(JSON.parse(data).state === 404 || JSON.parse(data).state === 202 || userinfo.UserPhoneNum === '86//') {
     alert("验证码发送失败")
    } else {
     alert("验证码发送成功，请耐心等待")
    }
   },
   error: function() {
    alert("发送失败");
   }
  });
 });
})
