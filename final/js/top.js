window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() { 
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn","myBtn0").style.display = "block";
  } 
  else {
    document.getElementById("myBtn","myBtn0").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var Price=document.getElementById("price");

var Hide=document.getElementsByClassName("hide")[0];

var HideA=document.querySelectorAll(".title .hide a");




var List=document.querySelectorAll("#header ul li");

var ListUl=document.querySelector("#header ul");

var arr=[];

       Price.onmousemove=function () {

        Hide.style.display="block";

       };

      Price.onmouseout=function () {

          Hide.style.display="none";

      };

  for (var i=0; i<HideA.length; i++)

  {

        HideA[i].index=i;

        HideA[i].onclick=function () {

       Sort(this.index)

      }

  }

   for ( i=0; i<List.length;i++)

   {

       arr[i]=[];

       arr[i][0] = List[i].querySelector("img").src;

       arr[i][1]=List[i].querySelector("p").innerHTML;

       arr[i][2]=Number(List[i].querySelector("span").innerHTML);

       console.log(arr[i][0])

   }

   function Sort(index) {

        if (index)

        {

           arr.sort(function (a,b) {

               return a[2]-b[2];

           })

        }

        else {

            arr.sort(function (a,b) {

                return b[2]-a[2]

            })

        }

       ListUl.innerHTML="";

    for (i=0; i<List.length; i++)

     {

         ListUl.innerHTML+="<li><img src='"+arr[i][0]+"'><p>"+arr[i][1]+"</p><div class='txt'>￥<span>"+arr[i][2]+"</span></div> </li>"

     }

   }
