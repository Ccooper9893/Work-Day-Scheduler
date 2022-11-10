// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

var today = dayjs(); //Variable for todays date
$('#currentDay').text(today.format('dddd, MMMM DD')); //Display current date
var currentTime = dayjs().hour(); //Gets hour not including minutes. 2:56pm will be 14  

//Grabs localStorage keys and plugs them in if they exist !HELP REPEAT CODE 
function init () {
  for (i=9; i<18; i++) {
    if (window.localStorage.getItem(`${i}box`) !== null) { //Checks if 9am key exists
      var text = window.localStorage.getItem(`${i}box`);
      console.log(text);
      $(`#${i}h`).text(text);
    }
  }};

//Fills in text boxes with appropriate colors
function boxFill() {
  for (i=9; i<18; i++) {
    if (currentTime == i) {
      $(`#hour-${i}`).addClass('present');
    } else if (currentTime > i) {
      $(`#hour-${i}`).addClass('past');
    } else {
      $(`#hour-${i}`).addClass('future');
    }
  }
};

boxFill();
init();

//Event listeners for each save button
$('#SB9').click(function(event) {
  localStorage.setItem('9box', $('#9h').val());
})

$('#SB10').click(function() {
  localStorage.setItem('10box', $('#10h').val());
})

$('#SB11').click(function() {
  localStorage.setItem('11box', $('#11h').val());
})

$('#SB12').click(function() {
  localStorage.setItem('12box', $('#12h').val());
})

$('#SB13').click(function() {
  localStorage.setItem('13box', $('#13h').val());
})

$('#SB14').click(function() {
  localStorage.setItem('14box', $('#14h').val());
})

$('#SB15').click(function() {
  localStorage.setItem('15box', $('#15h').val());
})

$('#SB16').click(function() {
  localStorage.setItem('16box', $('#16h').val());
})

$('#SB17').click(function() {
  localStorage.setItem('17box', $('#17h').val());

})

});