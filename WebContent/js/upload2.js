$(function(){
			
			$("#file").bind("change",function(){
				var file = $(this).val();
				if(file==""){
					alert("��ѡ���ļ�");
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
							alert("ͼƬ����ʧ��,��ѡ����ȷ��jpeg/jpg��ʽͼƬ����������200k");
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
					alert("����ѡ���ͼ��Ȼ�����ύ");
					e.preventDefault();
					return;
				}
				$('#saveCut').ajaxForm(function(data) { 
					if(data=="success"){
						alert("ͷ���޸ĳɹ�");
						$("#editPhoto").hide();
						window.history.back();
					}else{
						alert("�޸�ʧ��");
					}
					return;
				});
			});
		});
		
		