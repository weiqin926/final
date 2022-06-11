setInterval("randomImg()",1000);//兩秒更新
function sequentialImg() {
var jsImg_len = jsImg.length;
var i = 0;
console.log(jsImg_len);
document.getElementById("cover").innerHTML  = "<img src='" + jsImg[i] + "' width=80%>";        
if(i >= jsImg_len)  
{
  i = 0;
}
i++;
}