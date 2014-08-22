var interval;
var levelInterval;
var speed = ($('.starting-speed').val() * 1000);
var counter = 0;

$(document).ready(function() {

  $(document).on('mouseover', '.block', function() {

    $(this).css("background-color", "#1D4B73");


}).on('mouseout', '.block', function() {

    $(this).css("background-color", "white");
  });

  $(document).on("click", ".block", function(event) {

    $(this).remove();

  });


  $('.go-button').click( function(event){

    if($(this).text() == 'GO!') {
      var level = $(".level").val();
      if (level == "Hard") {
        speed -= speed * .10;
      } else if (level == "Medium") {
        speed -= speed * .10;
      } else if (level == "Easy") {
        speed -= speed * .10;
      }

      setTimer(speed, 'start');
      $(this).text('Pause');
      $(".starting-speed").prop("disabled", true);
    } else {
      setTimer(speed, 'pause');
      $(this).text('GO!');
      $(".starting-speed").prop("disabled", false);
    }

  });

  $('.restart-button').click( function(event){
    location.reload();
  });

});

  function setTimer(speed, type){

    if(type == 'start') {
      interval = setInterval(function(){
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



      }, speed);
    } else if (type == "pause") {
      clearInterval(interval);
    }
  }

  function setFrequency(frequency, speed, type) {


    levelInterval = setInterval(function(){
      if(type == 'start') {
        setTimer(speed, 'pause');
        setTimer(speed, 'start');
      } else {
        clearInterval(levelInterval);
      }

    }, frequency);
  }
