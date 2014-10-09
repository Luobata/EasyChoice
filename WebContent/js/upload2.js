$(function(){
			
			$("#file").bind("change",function(){
				var file = $(this).val();
				if(file==""){
					alert("请选择文件");
					return;
				}else{
					$("#fileUpload").ajaxForm(function(data) { 
						var obj = JSON.parse(data);
						
						$("#userPhoto").attr({src:"photo"+obj.realpath});
						if(obj.result=="success"){
							$("#userPhoto").attr({src:"<%=path%>"+obj.path});
							/*$("#preview").attr({src:"<%=path%>"+obj.path});*/
							/*$("#imageName").val(obj.path);*/
							window.location.reload();
							
						}else{
							alert("图片保存失败,请选择正确的jpeg/jpg格式图片，并不大于200k");
							$("#fileContener").val("");
						}
		            }).submit(); 
				}
			});
			/*$("#userPhoto").error(function(){
				$(this).attr("src","<%=path%>/photo/default.png");
			});
			$("#preview").error(function(){
				$(this).attr("src","<%=path%>/photo/default.png");
			});*/
			$("#saveCutComfirm").click(function(e){
				if($("#width").val()==""||$("#height").val()==""
						||$("#width").val()=='0'||$("#height").val()=="0"
						||$("#width").val()==0||$("#height").val()==0){
					alert("请先选择截图，然后再提交");
					e.preventDefault();
					return;
				}
				$('#saveCut').ajaxForm(function(data) { 
					if(data=="success"){
						alert("头像修改成功");
						$("#editPhoto").hide();
						window.history.back();
					}else{
						alert("修改失败");
					}
					return;
				});
			});
		});
		
		