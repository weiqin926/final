function check(){
    if(document.getElementById("txt1").value.length==0){
        window.alert("請輸入聯絡電話");
    }
    if(document.getElementById("txt2").value.length==0){
        window.alert("請輸入地址");
    }
    var checkRadio = document.querySelector(
        'input[name="payway"]:checked');
      
    if(checkRadio == null) {
        window.alert("請選擇付款方式");
    }
    var checkRadio1 = document.querySelector(
        'input[name="transport"]:checked');
      
    if(checkRadio1 == null) {
        window.alert("請選擇運送方式");
    }

    if(document.getElementById("txt1").value.length!=0 && document.getElementById("txt2").value.length!=0 && checkRadio != null && checkRadio1 != null){
        window.alert("訂單完成，回首頁")
        self.location='../html/index.html';
    }
}
    

