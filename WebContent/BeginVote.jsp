<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
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
<title>EasyChoice</title>
<script type="text/javascript">

	function submitImg(){
		var content=document.getElementById("content").value;
		var src=document.getElementById("userPhoto1").src;
		alert(src);
		
	}

</script>
</head>
<body>
<header>
<p class="title">EasyChoice</p>
<div><img  class="EasyChoice" src="img/EasyChoice.jpg"/></div>
</header>
<div class="head"><div class="lable">标题</div><input class="bt"  name="content" id="content"  value="" placeholder="请输入标题"></input></div>
	<div class="head"><div class="lable">类型</div>
		<input class="item-txt" id="item-txt"type="button" value="文字"></input>
		<input class="item-img" id="item-img"type="button" value="图片"></input>
	</div>
<div class="txt">
	<form action="">
		<div class="head"><div class="lable">选项</div><input class="bt"  placeholder="A"></input></div>
		<div class="head"><div class="lable"></div><input class="bt"  placeholder="B"></input></div>
		<div class="head" style="display:none"><div class="lable"></div><input class="bt"  placeholder="C" ></input></div>
		<div class="head" style="display:none"><div class="lable"></div><input class="bt"  placeholder="D" ></input></div>
		<div class="head"><div class="lable"></div><input class="item-add" type="image" src="img/add.jpg" ></input></div>
	</form>
	<form action=""	>
		<div class="head"><div class="lable"></div><input class="item-add" type="submit"  ></input></div>
	</form>
</div>

<div class="image" style="display:none">
	<form action="fileUploadAction.action" id="fileUpload" enctype="multipart/form-data" method="post">
		<div></div>
		<div class="head"><div class="lable">选项	</div>
				<div style="overflow:hidden;">
				<div class="update-image">
					<p>A</p>
					<span id="editPhoto" >
						<img id="userPhoto1"class="photo" src="photo/background.jpg" />
  					</span>
  				</div>
  				<div class="update-image">
					<p>A</p>
					<span id="editPhoto" >
						<img id="userPhoto"class="photo" src="photo/background.jpg" />
  					</span>
  				</div>
  				<div class="update-image">
					<p>A</p>
					<span id="editPhoto" >
						<img id="userPhoto"class="photo" src="photo/background.jpg" />
  					</span>
  				</div>
  				<div class="update-image">
					<p>A</p>
					<span id="editPhoto" >
						<img id="userPhoto"class="photo" src="photo/background.jpg" />
  					</span>
  				</div>
  				</div>
			</div>
			
		<div class="head"><div class="lable"></div><div class="file-box"><input class="item-add" type="button"  style="background-image:url('img/add-img.jpg'); "  ></input><input type="file" multiple name="file" class="file" id="file" accept="image/jpeg" /></div></div>
	</form>
		<div class="head"><div class="lable"></div><input class="item-add" type="button" src="img/add-img.jpg" onclick="submitImg()" ></input></div>
</div>
<s:debug></s:debug>
 <script src="js/jquery-1.8.3.min.js"></script>
 <script src="js/vote.js"></script>
 <script type="text/javascript" src="<%=path %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=path %>/js/jquery.Jcrop.js"></script>
<script type="text/javascript" src="<%=path %>/js/json2.js"></script>
<script type="text/javascript" src="<%=path %>/js/jquery.form.min.js"></script>
  <script src="js/upload.js"></script>
  <script src="js/upload2.js"></script>
</body>
</html>