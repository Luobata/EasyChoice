$(document).ready(function(){
 loginChoose();
});
var loginChoose=function(){
	$("#item-img").click(function(){
		/*sjhm.src="img/login-sjhm.png";
       jtbm.src="img/login-jtbm-selected.png";*/
       $(".image").attr("style","display:block");
       $(".txt").attr("style","display:none");
	});

	$("#item-txt").click(function(){
  /*     sjhm.src="img/login-sjhm-selected.png";
       jtbm.src="img/login-jtbm.png";*/
       $(".image").attr("style","display:none");
       $(".txt").attr("style","display:block");
	});
}