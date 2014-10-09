<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0;" />
<link rel="stylesheet" href="css/common.css">
<link rel="stylesheet" href ="css/txtvote.css">
<title>EasyChoice</title>
</head>
<body>

<header>
<p class="title">EasyChoice</p>
<div><img  class="EasyChoice" src="img/EasyChoice.jpg"/></div>
</header>
<div class="head"><div class="lable">标题</div><input class="bt"  placeholder="请输入标题"></input></div>
<form action=""	>
	<div class="txt_check"><input type="radio" name="radiobutton" value="radiobutton"><p>A.此处为说明内容</p></div>
	<div class="txt_check"><input type="radio" name="radiobutton" value="radiobutton"><p>B.此处为说明内容</p></div>
	<div class="txt_check"><input type="radio" name="radiobutton" value="radiobutton"><p>C.此处为说明内容</p></div>
	<div class="txt_check"><input type="radio" name="radiobutton" value="radiobutton"><p>D.此处为说明内容</p></div>
	<div class="head"><input class="item-add" type="submit" value="确认投票" style="width:100%"></input></div>
</form>

</body>
</html>