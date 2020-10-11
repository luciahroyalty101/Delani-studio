$().ready(function () {
  $(".design").click(function () {
    $(".par").toggle("slow");
  });
});
$().ready(function () {
  $("#lucy").click(function () {
    $("#para").toggle("slow");
  });
});
$().ready(function () {
  $("#jim").click(function () {
    $("#karimi").toggle("slow");
  });
});
$("button").click(function () {
  var form1 = document.getElementById("form1").value;
  var form2 = document.getElementById("form2").value;
  var comment = document.getElementById("comment").value;
  if (form1 === "") {
    alert("please enter appropriate name")
  } else
  if (form2 === "") {
    alert("please enter appropriate email")
  } else
  if (comment === "") {
    alert("please enter a comment")
  } else {
    alert(" Dear " + " esteemed " + form1 + " we have received your message successfully. " + " Feel free to reach out unto us anytime");
  }
});
$().ready(function () {
  $("#img1").mouseover(function () {
    $("#frank").show();
  }).mouseout(function () {
    $("#frank").hide();
  });
});
$().ready(function () {
  $(".img2").mouseover(function () {
    $("#pro2").show();
  }).mouseout(function () {
    $("#pro2").hide();
  });
});
$().ready(function () {
  $(".img3").mouseover(function () {
    $("#pro3").show();
  }).mouseout(function () {
    $("#pro3").hide();
  });
});
$().ready(function () {
  $(".img4").mouseover(function () {
    $("#pro4").show();
  }).mouseout(function () {
    $("#pro4").hide();
  });
});
$().ready(function () {
  $(".img5").mouseover(function () {
    $("#pro5").show();
  }).mouseout(function () {
    $("#pro5").hide();
  });
});
$().ready(function () {
  $(".img6").mouseover(function () {
    $("#pro6").show();
  }).mouseout(function () {
    $("#pro6").hide();
  });
});
$().ready(function () {
  $(".img7").mouseover(function () {
    $("#pro7").show();
  }).mouseout(function () {
    $("#pro7").hide();
  });
});
$().ready(function () {
  $(".img8").mouseover(function () {
    $("#pro8").show();
  }).mouseout(function () {
    $("#pro8").hide();
  });
});































// $( "#wangeci" )
//   .odd()
//     .hide()
//   .end()
//   .even()
//     .hover(function() {
//       $( this )
//         .toggleClass( "active" )
//         .next()
//           .stop( true, true )
//           .slideToggle();
//     });
// $( "#wangeci" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );

// $( "#frank" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });