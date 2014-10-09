package com.luobata.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.luobata.dao.imgVote;
import com.luobata.util.DbUtil;
import com.opensymphony.xwork2.ActionSupport;

public class listuploadAction extends ActionSupport{

	private List<File> file;
	private List<String> fileFileName;
	private List<String> fileContentType;
	private String message;
	private String root;
	private String date;
	private String content;
	public List<File> getFile() {
		return file;
	}
	public void setFile(List<File> file) {
		this.file = file;
	}
	public List<String> getFileFileName() {
		return fileFileName;
	}
	public void setFileFileName(List<String> fileFileName) {
		this.fileFileName = fileFileName;
	}
	public List<String> getFileContentType() {
		return fileContentType;
	}
	public void setFileContentType(List<String> fileContentType) {
		this.fileContentType = fileContentType;
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getRoot() {
		return root;
	}
	public void setRoot(String root) {
		this.root = root;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

	DbUtil dbUtil=new DbUtil();
	@Override
	public String execute() throws Exception {
		
		try{
			//��õ�ǰ����
			date=new SimpleDateFormat("yyyy-MM-dd").format(new Date());
			//��ø�Ŀ¼
			root=ServletActionContext.getServletContext().getRealPath("/attachments");
			root=root+"/"+date;
			//ѭ���ϴ��ļ�
			for (int i = 0; i < file.size(); i++) {
				//�����ļ�������
				InputStream is=new FileInputStream(file.get(i));
				//�ж��ļ���β����Ϊexe�ļ����˳�
				if(fileFileName.get(i).endsWith(".exe")){
					message="�Բ���,���ϴ����ļ���ʽ������!!!";
					return ERROR;
				}
				//����·��
				File dirFile=new File(root);
				if(!dirFile.exists()){
					dirFile.mkdirs();
				}
				//���ļ��洢��tomcat���·����
				File destFile=new File(root,this.getFileFileName().get(i));
				//destFile.mkdir();
				OutputStream os=new FileOutputStream(destFile);
				//��������ϴ�byte
				byte[] bt=new byte[1024];
				int length =0;
				while((length=is.read(bt))!=-1){
					os.write(bt, 0, length);
				}
				is.close();
				os.flush();
				os.close();	
				Connection con=null;
				try {
					con=dbUtil.getCon();
					imgVote iv=new imgVote();
				} catch (Exception e) {
					message="���ݿ����ʧ��";
				}
			}
		}catch (Exception e) {
			message="�ļ��ϴ�ʧ��";
			e.printStackTrace();// TODO: handle exception
		}
		
		
		
		return super.execute();
	}
	
	
	
}
