$().ready(function(){
$(".design").click(function(){
$(".par").toggle("slow");
});
});
$().ready(function(){
$("#lucy").click(function(){
$("#para").toggle("slow");
});
});
$().ready(function(){
$("#jim").click(function(){
$("#karimi").toggle("slow");
 });
});
// $().ready(function(){
//  $("#wangeci").hover(function(){
//     $("#frank").hover("red");
//  });
// });
$("button").click(function(wanjii){
  var customer = document.getElementById("june").value;
  alert(" Dear " +" esteemed " + customer + " we have received your message succecifully. " +" Feel free to reach out unto us anytime");
  wanjii.preventDefault();
});