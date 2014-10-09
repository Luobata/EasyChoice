$(document).ready(function(){
 voteChoose();
});
var voteChoose=function(){
	$(".img_checkbox").bind("click",function(e){

    var tar=e.target;
   
    var child=tar.firstChild;
    var s=child.nextElementSibling;
    var select=$(s);
    $(".photo").attr("style","display:none");
    select.show();  

	})
		
	
};
/*var voteChoose=function(){
	$('#.img_checkbox').bind("click",function(e){
		$('#img_chechbox').attr("style","display:block");
		
	});
};*/
