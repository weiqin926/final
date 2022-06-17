var ckbox = document.getElementsByClassName("ckbox");
var ckbtn = document.getElementsByClassName("ckbtn");
var btnleft = document.getElementsByClassName("btnleft");
var btnright = document.getElementsByClassName("btnright");
var txt = document.getElementsByClassName("txt");
var price=document.getElementsByClassName("price");
var totle=document.getElementsByClassName("totle");
var allprice=document.getElementsByClassName("totleprice")[0];
var number=document.getElementsByClassName("number")[0];
var count=0;
//商品信息前複選框的事件
for(var i=0;i<ckbtn.length;i++){
    ckbtn[i].onclick=function(){
        if(this.checked){
            count++;
        }
        else{
            count--;
        }
        if(count==ckbtn.length){
            ckbox[0].checked=true;
            ckbox[1].checked=true;
        }
        else{
            ckbox[0].checked=false;
            ckbox[1].checked=false;
        }
        ischoose();
    }
}
//全選複選框的事件
for (key in ckbox) {
    ckbox[key].index = key;  //給index屬性上綁值，綁個索引
    ckbox[key].onclick = function () {
        ckbox[this.index == 0 ? 1 : 0].checked = !ckbox[this.index == 0 ? 1 : 0].checked;
        if(this.checked){
            for (var i = 0; i < ckbtn.length; i++) {
                ckbtn[i].checked = true;
            }
        }
        else{
            for (var i = 0; i < ckbtn.length; i++) {
                ckbtn[i].checked = false;
            }
        }
        ischoose();
    }
}
//購物車數量的增減事件
for (var i = 0; i < btnleft.length; i++) {
    btnleft[i].index = i;
    btnleft[i].onclick = function () {
        var val = txt[this.index].value;
        val--;
        if (val < 1) {
            val = 1;
        }
        txt[this.index].value = val;
        addprice(this.index,val);
        ischoose();
    }
    btnright[i].index=i;
    btnright[i].onclick = function () {
        var val=txt[this.index].value;
        val++;
        txt[this.index].value=val;
        addprice(this.index,val);
        ischoose();
    }
}
//金額的計算方法
function addprice(index,value){
    totle[index].innerHTML="$"+(price[index].getAttribute("data-price")*value).toFixed(2);
    totle[index].setAttribute("data-totle",(price[index].getAttribute("data-price")*value).toFixed(2));
}
//判斷商品信息前的複選框是否打勾
function ischoose(){
    var totleprice=0;
    var num=0;
    for(var i=0;i<ckbtn.length;i++){
        if(ckbtn[i].checked){
            totleprice+=parseFloat(totle[i].getAttribute("data-totle"));
            num+=parseInt(txt[i].value);
        }
    }
    allprice.innerHTML="$"+totleprice.toFixed(2);
    number.innerHTML=num;
}
window.onload=function(){
    var obt=document.getElementById("btnDelete");
    var otb=document.getElementById("tb");
    var tbody=otb.getElementsByTagName("tbody")[0];  
    obt.onclick=function(){
      var cks=document.getElementsByName("del");
      for(var index=cks.length-1;index>=0;index--){
        if(cks[index].checked==true){
          tbody.removeChild(cks[index].parentNode.parentNode);
        }
      }
      ischoose();
      addprice();
    }
}
function check(){
    var checkBox = document.querySelector(
        'input[name="del"]:checked');
      
    if(checkBox == null) {
        window.alert("請勾選結帳商品");
    }
    if(checkBox != null){
        window.location.href='../html/order.html';
    }
}