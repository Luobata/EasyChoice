$(document).ready(function(){
 voteChoose();
 vote();
});
var voteChoose=function(){
   $("#test").fadeIn(1000);
   $("#test").animate({
	   top:'20px'
   },2000);
   
   $("#test").fadeOut(1000);
   //$("#test").attr("style","top:0;position:relative");
   $("#test").fadeIn(1000);
};
var vote=function(){
	$("#test2").fadeIn(3000);
}