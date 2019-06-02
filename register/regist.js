var input = document.getElementsByTagName('input');
var len = input.length;

input[0].onfocus = function(){
		if(this.value == "请输入手机号码"){
			this.value = "";
		}
			
}
input[1].onfocus = function(){
		this.value = "";
}
input[2].onfocus = function(){
		this.value = "";
}
input[0].onblur = function(){
		this.value = "请输入手机号码";
}
input[1].onblur = function(){
		this.value = "请录入图片字符";
}
input[2].onblur = function(){
		this.value = "请输入验证码";
}