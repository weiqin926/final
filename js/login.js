function ShowPwd1() {
    var x = document.getElementById("input1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function ShowPwd2() {
    var x = document.getElementById("input2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function ShowPwd() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function validate(){   
    var word1= document.getElementById("input1").value;
    var word2 = document.getElementById("input2").value;
    if(word1 != word2){      
         window.alert("請輸入兩次一致的密碼！");     
         input1.value='';      
         input2.value='';      
    }
}
          
