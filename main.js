$(".main").click(function() {
    $(this).addClass('main-clicked');
  });

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
  document.getElementById('slowo1').value = '';
  document.getElementById('slowo2').value = '';
  document.getElementById('slowo3').value = '';
  document.getElementById('slowo4').value = '';
  document.getElementById('slowo5').value = '';
  document.getElementById('slowo6').value = '';
});

$(".dodaj").on("click", function() {

  $(".main").removeClass("main main-clicked").addClass("main");

  var slowo1 = document.getElementById('slowo1').value;
  var slowo2 = document.getElementById('slowo2').value;
  var slowo3 = document.getElementById('slowo3').value;
  var slowo4 = document.getElementById('slowo4').value;
  var slowo5 = document.getElementById('slowo5').value;
  var slowo6 = document.getElementById('slowo6').value;
  document.getElementById('div1').innerHTML = slowo1;
  document.getElementById('div2').innerHTML = slowo2;
  document.getElementById('div3').innerHTML = slowo3;
  document.getElementById('div4').innerHTML = slowo4;
  document.getElementById('div5').innerHTML = slowo5;
  document.getElementById('div6').innerHTML = slowo6;
  $(".popup-overlay, .popup-content").removeClass("active");

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});