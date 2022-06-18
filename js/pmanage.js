let btn=document.querySelector("#show");
let infoModal=document.querySelector("#add");
let close=document.querySelector("#close");
btn.addEventListener("click", function(){
  infoModal.showModal();
})
close.addEventListener("click", function(){
  infoModal.close();
})

let btn1=document.querySelector("#show2");
let infoModal1=document.querySelector("#add2");
let close1=document.querySelector("#close2");
btn1.addEventListener("click", function(){
  infoModal1.showModal();
})
close.addEventListener("click", function(){
  infoModal1.close();
})

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
    }
}