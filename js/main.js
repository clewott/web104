$(document).ready(function() {

  $(document).on('mouseover', '.block', function() {

    $(this).css("background-color", "#1D4B73");


}).on('mouseout', '.block', function() {

    $(this).css("background-color", "white");
  });

  $(document).on("click", ".block", function(event) {

    $(this).remove();

  });

  var counter = 0;

  setInterval(function(){
    if(counter == 0) {
      $('body').append('<div class="row"><div class="block">New Block</div></div>');
      counter++;
    } else if(counter > 0 && counter < 3) {
      $('.row').last().append('<div class="block">New Block</div>');
      counter++;
    } else {
      $('.row').last().append('<div class="block">New Block</div>');
      counter = 0;
    }



  }, 2000);










});
