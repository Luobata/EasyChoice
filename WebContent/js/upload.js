//�����ȡ����ķ���
function $(objectId) {
  if(document.getElementById && document.getElementById(objectId)) {
// W3C DOM
return document.getElementById(objectId);
  } else if (document.all && document.all(objectId)) {
// MSIE 4 DOM
return document.all(objectId);
  } else if (document.layers && document.layers[objectId]) {
// NN 4 DOM.. note: this won't find nested layers
return document.layers[objectId];
  } else {
return false;
  }
var filesInput = $("filesInput"),
    info = $("info"),
    imageBox = $("imageBox"),
    btnUpload = $("btnUpload"),
    progress = $("Progress"),
    percent = $("percent"),
    uploadSpeed = $("uploadSpeed");
//������ͼƬ���������
var uploadImgArr = [];
//��ֹͼƬ�ϴ���ɺ��ٵ���ϴ���ť��ʱ���ظ��ϴ�ͼƬ
var isUpload = false;
//�����ȡͼƬ��Ϣ�ĺ���
function getFiles(e) {
    isUpload = false;
    e = e || window.event;
    //��ȡfile input�е�ͼƬ��Ϣ�б�
    var files = e.target.files,
    //��֤�Ƿ���ͼƬ�ļ�������
    reg = /image\/.*/i;
    //console.log(files);
    for (var i = 0,f; f = files[i]; i++) {
        //�����if�ж�ȥ����Ҳ���ϴ�����ļ�
        if (!reg.test(f.type)) {
            imageBox.innerHTML += "<li>��ѡ���" + f.name + "�ļ�����ͼƬ</li>";
            //����ѭ��
            continue;
        }
        //console.log(f);
        uploadImgArr.push(f);
        var reader = new FileReader();
        //������ԭ��JSʵ��tabһ�����հ��ķ��������μ�http://www.css119.com/archives/1418
        reader.onload = (function(file) {
            //��ȡͼƬ��ص���Ϣ
            var fileSize = (file.size / 1024).toFixed(2) + "K",
            fileName = file.name,
            fileType = file.type;
            //console.log(fileName)
            return function(e) {
                //console.log(e.target)
                //��ȡͼƬ�Ŀ��
                var img = new Image();
                img.addEventListener("load", imgLoaded, false);
                img.src = e.target.result;
                function imgLoaded() {
                    imgWidth = img.width;
                    imgHeight = img.height;
                    //ͼƬ������ɺ���ܻ�ȡimgWidth��imgHeight
                    alert("1");
                    /*$("#userPhoto").attr({src:e.target.result});*/
                    alert("2");
                   /* window.location.reload();*/
                    imageBox.innerHTML += "<li><img src='" + e.target.result + "' alt='" + fileName + "' title='" + fileName + "'> ͼƬ�����ǣ�" + fileName + ";ͼƬ�ĵĴ�С�ǣ�" + fileSize + ";ͼƬ�������ǣ�" + fileType + ";ͼƬ�ĳߴ��ǣ�" + imgWidth + " X " + imgHeight + "</li>";
                }
            }
        })(f);
        //��ȡ�ļ�����
        reader.readAsDataURL(f);
    }
    //console.log(uploadImgArr);
}
if (window.File && window.FileList && window.FileReader && window.Blob) {
    filesInput.addEventListener("change", getFiles, false);
} else {
    info.innerHTML = "�����������֧��HTML5����";
    info.className="tips";
}
//��ʼ�ϴ���Ƭ
function uploadFun() {
    var j = 0;
    function fun() {
        if (uploadImgArr.length > 0 && !isUpload) {
            var singleImg = uploadImgArr[j];
            var xhr = new XMLHttpRequest();
            if (xhr.upload) {
                //������(��http://www.css119.com/archives/1476)
                xhr.upload.addEventListener("progress",
                function(e) {
                    if (e.lengthComputable) {
                        progress.value = (e.loaded / e.total) * 100;
                        percent.innerHTML = Math.round(e.loaded * 100 / e.total) + "%";
                        //��������
                        var nowDate = new Date().getTime();
                        var x = (e.loaded) / 1024;
                        var y = (nowDate - startDate) / 1000;
                        uploadSpeed.innerHTML = "���٣�" +(x / y).toFixed(2) + " K\/S";
                    } else {
                        percent.innerHTML = "�޷������ļ���С";
                    }
                },
                false);
                // �ļ��ϴ��ɹ�����ʧ��
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200 && eval("(" + xhr.responseText + ")").status == true) {
                            info.innerHTML += singleImg.name + "�ϴ����; ";
                            //��Ϊprogress�¼��ǰ�һ��ʱ��η������ݵģ����Ե���progress������100%�ģ��������ô����ǿ������100%
                            progress.value = 100;
                            percent.innerHTML = "100%";
                            isUpload = true;
                        } else {
                            info.innerHTML += singleImg.name + "�ϴ�ʧ��; ";
                        }
                        //�ϴ��ɹ�������ʧ�ܣ�һ�ź��ٴε���fun������ģ��ѭ��
                        if (j < uploadImgArr.length - 1) {
                            j++;
                            isUpload = false;
                            fun();
                        }
                    }
                };
                var formdata = new FormData();
                formdata.append("FileData", singleImg);
                // ��ʼ�ϴ�
                xhr.open("POST", "upload.php", true);
                xhr.send(formdata);
                var startDate = new Date().getTime();
            }
        }
    }
    fun();
}
btnUpload.addEventListener("click", uploadFun, false);