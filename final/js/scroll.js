var spend=35; 
var flag;
function Marquee(){ 
  if(golefttwo.offsetWidth-goleft.scrollLeft<=0) { 
    goleft.scrollLeft-=goleftone.offsetWidth; 
  } 
  else{ 
    goleft.scrollLeft++; 
  } 
}
function handlerMover() { 
  clearInterval(flag) 
} 
function handlerOut() { 
  flag=setInterval(Marquee,spend) 
} 
window.onload=function(){
  var goleft=document.getElementById('goleft'); 
  var goleftone=document.getElementById('goleftone'); 
  var golefttwo=document.getElementById('golefttwo'); 
   
  golefttwo.innerHTML=goleftone.innerHTML; 
  flag=setInterval(Marquee,spend);
  goleft.onmouseover=handlerMover;
  goleft.onmouseout=handlerOut;
}