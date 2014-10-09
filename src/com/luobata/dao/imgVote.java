package com.luobata.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;




public class imgVote {

	public boolean create(Connection con,String UserId,String type) throws Exception{
	
		String sql="insert into t_vote values(null,?,null,?,?,?)";
		PreparedStatement pstmt=con.prepareStatement(sql);
		pstmt.setString(1, type);
		pstmt.setString(3, type);
		pstmt.setString(4, type);
		pstmt.setString(5, type);
		return true;
	}
}
