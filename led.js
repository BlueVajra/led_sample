function loadLed(jQuery) {

  createDots();

  var cycles = []

  cycles[0] = ["green", "blank", "blank", "blank", "green", "blank", "blank", "blank"];
  cycles[1] = ["blank", "green", "blank", "blank", "blank", "green", "blank", "blank"];
  cycles[2] = ["blank", "blank", "blue", "blank", "blank", "blank", "red", "blank"];
  cycles[3] = ["blank", "blank", "blank", "blue", "blank", "blank", "blank", "red"];

  var count = 0;
  dots = []
  for (var i = 0; i < 180; i++) {
    dots[i] = cycles[count];
    count++;
    if (count == cycles.length){
      count = 0;
    }
  }

  var timer = 0
  var myVar = setInterval(function () {
    myTimer()
  }, 300);

  function myTimer() {
    for (var i = 0; i < 180; i++) {
      $('#led' + i).removeClass();
      $('#led' + i).addClass(dots[i][timer])
    }
    timer++
    if (timer == cycles[0].length) {
      timer = 0;
    }
  }


}
function createDots() {
  angle = (2 * Math.PI) / 180
  radius = 300;

  $('#led').css('left', radius + 50);
  $('#led').css('top', radius + 50);
  for (var i = 0; i < 180; i++) {

    var left = radius * Math.cos(angle * i)
    var top = radius * Math.sin(angle * i);
    var deg = i * 2
    var html = "<div id='led" + i + "' class='blank' style='left:" + left + "; top:" + top + ";'></div>";

    $('#led').append(html)
  }
}

$(document).ready(loadLed);