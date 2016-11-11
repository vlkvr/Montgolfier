console.log("© Volkov Roman. www.volkovra.ru");

$(document).ready(function(){ // когда DOM будет готов выполняем какой-то код

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    margin: 7,
    nav: true,
    navText:['','']
  });

  function calc(){
    var sum = 0;
    var price = 4000;
    var amount = $("#amount").val();
    sum = sum + (price * amount)
    $("#sum").text(sum);
  }

  $(".nav_main>a").click(function() {
    $(".nav_main>a").removeClass("nav_main-item--active")
    $(this).addClass("nav_main-item--active");
  });

});