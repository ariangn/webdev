$(document).ready(function() {

  // style application
  let altstyle = false;
  $("#style").click(function() {
    if (altstyle) {
      $("#special").css("color", "black");
      $(".highlight").css("background-color", "#F3EEE8");
      $("p#p").each(function(index) {
        $(this).css({
          "width": "100%",
          "background-color": "#F3EEE8",  
          "display": "flex",
          "border": "none",
          "border-radius": "0"
        });
      });
    } else {
      $("#special").css("color", "green");
      $(".highlight").css("background-color", "#FFFAA0");
      $(".highlight").css("width", "210px");
      $("p#p").each(function(index) {
        $(this).css({ 
          "background-color": "#D1CBC4",  
          "display": "block",
          "width": "200px",
          "border": "1px dotted black",
          "border-radius": "5px"
        });
        alert("HTML content of <p> element #" + (index + 1) + ":\n" + $(this).html());
      });
    }
    altstyle = !altstyle;
  });


  // image application
  $("#hide").click(function() {
        $("#face").hide();
  });

  $("#show").click(function() {
      $("#face").show();
  });

  $("#fadeout").click(function() {
      $("#face").fadeOut("slow"); 
  });

  $("#fadein").click(function() {
      $("#face").fadeIn("slow"); 
  });


  // animation application
  $("#animate").click(function() {
    $("#ani img").attr("src", "imgs/cat.gif");
    $(".cat").animate({
        opacity: 1,
        left: "-=70%",
        height: "+=50px", 
        width: "+=50px" 
    }, 2000, function() {
        $("#ani img").attr("src", "imgs/cat.png");
        $("#ani img").css("left", "80%");
        $("#ani img").css("height", "100px");
        $("#ani img").css("width", "100px");

    });
  });


  //username and password application
  $("#user, #pw").change(function() {
    var usernameValue = $("#user").val();
    var passwordValue = $("#pw").val();

    if (usernameValue === "" || passwordValue === "") {
      if (usernameValue === "") {
          $("#user").focus();
          $("#user").css("background-color", "#FFFAA0");
      } 
      else {
          $("#pw").focus();
          $("#pw").css("background-color", "#FFFAA0");
      }
      alert("Please enter a value for the " + (usernameValue === "" ? "username" : "password") + " field");
    } 
    else {
      $("#demo").text("username: " + usernameValue + ", password: " + passwordValue);
      $("#user, #pw").css("background-color", ""); 
    }
  });
});
