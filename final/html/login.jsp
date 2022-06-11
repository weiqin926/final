<%@page contentType="text/html;charset=utf-8" language="java" import="java.sql.*"%>
 <%@ page import = "java.io.*"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登入</title>
    <link rel="stylesheet" type="text/css" href="../css/login.css">
    <script src="../js/login.js"></script>
</head>
<body>
    <header>
        <div class="logo"> <a href="index.jsp"><img src="../images/logo.png"></a></div>
    </header>
<section>
            <!-- 登入框 -->
            <div class="frame">
                <div class="form">
                    <h1>會員登入</h1>
                    <form name="login" action="login_detail.jsp" method="POST">
                       <div class="inputBox">
                    <input type="email" id="email" placeholder="帳號" required>

                </div>
                <div class="inputBox">
                    <input type="password" id="pwd" placeholder="密碼(只能輸入英文或數字)" oninput="if(!((/^[0-9]*$/.test(value))||(/^[A-Za-z]+$/.test(value))||(/^[A-Za-z0-9]+$/.test(value)) )){value=''}" required>
                   
                </div>
                <div class="check">
                 <input type="checkbox" onclick="ShowPwd()">顯示密碼
                </div>
               
                <div class="inputBox">
                    <input type="submit" value="Login">
                </div>   
                <p class="no">沒有帳戶?
                    <a href="../html/register.html"> 註冊</a>
                  </p>
       </form>  
        </div>
    </div>
    </section>
   </body>
</html>