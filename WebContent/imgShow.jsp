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
<link rel="stylesheet" href="css/imgshow.css">
<title>EasyChoice</title>
</head>
<body>
<header>
<p class="title">EasyChoice</p>
<div><img  class="EasyChoice" src="img/EasyChoice.jpg"/></div>
</header>
<div class="content">
	<div class="head"><div class="lable">标题</div><input class="bt"  placeholder="请输入标题"></input></div>
	<table>
	<tr>
		<td>
		<div class="result_content">
			<div  class="colum_content" ><div class="colum"></div></div>
			<div class="img_show" style="background-image:url('photo/background.jpg')">
			</div>
			<div class="img_title">A</div>
		</div>
		</td>
		<td>
		<div class="result_content">
			<div  class="colum_content" ><div class="colum"></div></div>
			<div class="img_show" style="background-image:url('photo/background.jpg')">
			</div>
			<div class="img_title">B</div>
		</div>
		</td>
		<td>
		<div class="result_content">
			<div  class="colum_content" ><div class="colum"></div></div>
			<div class="img_show" style="background-image:url('photo/background.jpg')">
			</div>
			<div class="img_title">C</div>
		</div>
		</td>
		<td>
		<div class="result_content">
			<div  class="colum_content" ><div class="colum"></div></div>
			<div class="img_show" style="background-image:url('photo/background.jpg')">
			</div>
			<div class="img_title">D</div>
		</div>
		</td>
	</tr>
	</table>
	<div class="discuss">
	<p class="img_discuss">讨论区</p>
	
		
			<p id="test" style="display: none;position:relative">test</p>
			<p id="test2" style="display: none;position:relative">test2</p>
	</div>
</div>

 <script src="js/jquery-1.8.3.min.js"></script>
  <script src="js/imgshow.js"></script>
 <script type="text/javascript" src="<%=path %>/js/jquery.js"></script>

</body>
</html>