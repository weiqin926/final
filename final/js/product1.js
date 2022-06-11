
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function minusNUM(){
let value = Number(document.getElementById('num').value);
if(value != 1){
    document.getElementById("num").value = value-1;
}
}
function addNUM(){
  let value = Number(document.getElementById('num').value);
    document.getElementById('num').value = value+1;
  }
function limiteValue(obj){
  obj.value=obj.value.replace(/[^\d]/g,'');//輸入的值僅是數字
 if(obj.value<1){
   this.value=obj;
 }
  }


