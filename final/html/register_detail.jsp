<%@page contentType="text/html;charset=utf-8" language="java" import="java.sql.*"%>
<%@include file="config.jsp" %>
<%
        if(con.isClosed())
           out.println("連線建立失敗");
        else {
//Step 3: 選擇資料庫   
           sql="use bakery";
           con.createStatement().execute(sql);
           
		   String Email=request.getParameter("Email");
		   String Name=request.getParameter("Name");
		   String Password=request.getParameter("Password");

//Step 4: 執行 SQL 指令	
 try
		   {
			   String sql1 = "SELECT * FROM `member` WHERE`Email`='" +Email+ "'"  ; 
               ResultSet rs =con.createStatement().executeQuery(sql1);
               if(rs.next())
	           { 
                out.print("<script>alert(decodeURIComponent('註冊失敗！帳號已存在'));location.href='register.jsp'</script>");
				if(request.getParameter("Password") != request.getParameter("Password_1"))
				{
					out.print("<script>alert(decodeURIComponent('密碼兩次輸入不相符'));location.href='register.jsp'</script>");
				}
	           }
               else
	           {
			   sql="INSERT INTO `member`(`Email`,`Name`,`Password`) values('"+Email+"','"+Name+"','"+Password+"')";
		       con.createStatement().execute(sql);
	           out.print("<script>alert('註冊成功');location.href='login.jsp'</script>");
	           }
		      
		       
		   }
//Step 6: 關閉連線
           catch(SQLException sExec)
		   {
			response.sendRedirect("login.jsp");
		   }
       }
    
%>