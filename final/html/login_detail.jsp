<%@page contentType="text/html;charset=utf-8" language="java" import="java.sql.*"%>
<%@include file="config.jsp" %>
<%
if(request.getParameter("Email") !=null && !request.getParameter("Email").equals("")
	&& request.getParameter("Password") !=null && !request.getParameter("Email").equals("")){
	
	sql = "SELECT * FROM `member` WHERE `Email`='"+request.getParameter("Email") + 
	"' AND `Password`='"+request.getParameter("Password")+"'" ;
	
	ResultSet rs =con.createStatement().executeQuery(sql);
	
	if(rs.next()){
		session.setAttribute("Email",request.getParameter("Email"));
		con.close();
		out.print("<script>alert('登入成功 !');location.href='index.jsp'</script>");
	}
	else{
		con.close();
		out.print("<script>alert('帳號或密碼不符 !');location.href='login.jsp'</script>");
	}
}
else
	response.sendRedirect("<script>alert('帳號或密碼不能為空 ! ');location.href='login.jsp'</script>");
%>