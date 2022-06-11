function register() {
    var username = document.getElementById("name");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    if (username.value == "") {
    alert("請填寫使用者名稱");
    }
    else if (email.value  == "") {
        alert("請填寫帳號");
        }  
     else if (pass.value  == "") {
    alert("請填寫密碼");
    }  
}