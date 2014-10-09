package com.luobata.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class uploadAction extends ActionSupport {
	private static final long serialVersionUID = -5016873153441103539L;

    private File file;
    private String fileFileName;
    private String fileFileContentType;
    private String realpath="";

    private String message = "���ѳɹ��ϴ��ļ�";
    
    public String getRealpath() {
		return realpath;
	}

	public void setRealpath(String realpath) {
		this.realpath = realpath;
	}

	public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public File getFile() {
        return file;
    }

    public void setFile(File file) {
        this.file = file;
    }

    public String getFileFileName() {
        return fileFileName;
    }

    public void setFileFileName(String fileFileName) {
        this.fileFileName = fileFileName;
    }

    public String getFileFileContentType() {
        return fileFileContentType;
    }

    public void setFileFileContentType(String fileFileContentType) {
        this.fileFileContentType = fileFileContentType;
    }

    @SuppressWarnings("deprecation")
    @Override
    public String execute() throws Exception {
        
        //String path = ServletActionContext.getRequest().getRealPath("/upload");
    		String path="D:/workspace/j2ee/EasyChoice/WebContent/photo";
        try {
            File f = this.getFile();
            if(this.getFileFileName().endsWith(".exe")){
                message="�Բ���,���ϴ����ļ���ʽ������!!!";
                return ERROR;
            }
            FileInputStream inputStream = new FileInputStream(f);
            realpath="/"+ this.getFileFileName();
            FileOutputStream outputStream = new FileOutputStream(path + "/"+ this.getFileFileName());
            byte[] buf = new byte[1024];
            int length = 0;
            while ((length = inputStream.read(buf)) != -1) {
                outputStream.write(buf, 0, length);
            }
            inputStream.close();
            outputStream.flush();
        } catch (Exception e) {
            e.printStackTrace();
            message = "�Բ���,�ļ��ϴ�ʧ����!!!!";
        }
        return SUCCESS;
    }

}