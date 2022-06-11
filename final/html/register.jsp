<%@page contentType="text/html;charset=utf-8" language="java" import="java.sql.*"%>
<%@include file="config.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>註冊</title>
    <link rel="stylesheet" type="text/css" href="../css/register.css">
    <script src="../js/login.js"></script>
</head>
<body>
    <header>
        <div class="logo"> <a href="index.jsp"><img src="../images/logo.png"></a></div> 
    </header>
<section>
    <div class="frame">
        <div class="form">
            <h1>註冊成為會員</h1>
            <form action="register_detail.jsp" method="POST">
                <div class="inputBox">
                    <input type="text" id="name" name="Name" placeholder="姓名" maxlength="8" required>

                </div>
                <div class="inputBox">
                    <input type="email" id="email" name="Email" placeholder="設定帳號" required>

                </div>
                <div class="inputBox">
                    <input type="password" id="input1" name="Password" placeholder="設定密碼(只能輸入英文或數字)" oninput="if(!((/^[0-9]*$/.test(value))||(/^[A-Za-z]+$/.test(value))||(/^[A-Za-z0-9]+$/.test(value)) )){value=''}" required>
                   
                </div>
                <div class="check">
                 <input type="checkbox" onclick="ShowPwd1()">顯示密碼
                </div>
                <div class="inputBox">
                    <input type="password" id="input2" name="Password_1" placeholder="確認密碼"  oninput="if(!((/^[0-9]*$/.test(value))||(/^[A-Za-z]+$/.test(value))||(/^[A-Za-z0-9]+$/.test(value)) )){value=''}" required>
                </div>
                <div class="check">
                    <input type="checkbox" onclick="ShowPwd2()">顯示密碼
                   </div>
                <div class="inputBox">
                    <input type="submit" value="Register" onclick=" return validate()">
                </div>   
                <p class="yes">已有帳戶
                    <a href="login.jsp"> 登入</a>
                  </p>
       </form>  
        </div>
    </div>
</section>
</body>
</html>