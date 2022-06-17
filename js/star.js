var array = '';
$(".my-rating-6").starRating({
  totalStars: 5,
  emptyColor: 'lightgray',
  hoverColor: 'lightyellow',
  activeColor: 'yellow',
  initialRating: 0,
  strokeWidth: 5,
  useGradient: false,
  minRating:1,
});

$('.jq-star:nth-child(1)').hover(function(){
  $('#myP').html('很差');
});

$('.jq-star:nth-child(2)').hover(function(){
  $('#myP').html('差');
});

$('.jq-star:nth-child(3)').hover(function(){
  $('#myP').html('普通');
});

$('.jq-star:nth-child(4)').hover(function(){
  $('#myP').html('好');
});

$('.jq-star:nth-child(5)').hover(function(){
  $('#myP').html('很好');
});

// var app = new Vue({
//   el: '#test',
//   data: {
//     message: array
//   }
// })