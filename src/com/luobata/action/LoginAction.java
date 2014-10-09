package com.luobata.action;

import java.sql.Connection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.interceptor.ServletRequestAware;

import com.luobata.model.User;
import com.luobata.util.StringUtil;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport implements ServletRequestAware{

	private User user;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
	HttpServletRequest request;
	@Override
	public String execute() throws Exception {
		
		HttpSession session=request.getSession();
		if(StringUtil.isEmpty(user.getUserName())){
			return ERROR;
		}
		session.setAttribute("currentUser", user.getUserName());
		
		return SUCCESS;
	}

	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
	}

		
}
