// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var today = dayjs(); //Variable for todays date
  $('#currentDay').text(today.format('dddd, MMMM DD')); //Display current date
  var currentTime = dayjs().hour(); //Gets hour not including minutes. 2:56pm will be 14  

//Event listeners for each work hour 9am - 5pm !HELP REPEAT CODE
  $('#SB9').click(function() {
    localStorage.setItem('9am', $('#9am').val());
  })

  $('#SB10').click(function() {
    localStorage.setItem('10am', $('#10am').val());
  })

  $('#SB11').click(function() {
    localStorage.setItem('11am', $('#11am').val());
  })

  $('#SB12').click(function() {
    localStorage.setItem('12pm', $('#12pm').val());
  })

  $('#SB1').click(function() {
    localStorage.setItem('1pm', $('#1pm').val());
  })

  $('#SB2').click(function() {
    localStorage.setItem('2pm', $('#2pm').val());
  })

  $('#SB3').click(function() {
    localStorage.setItem('3pm', $('#3pm').val());
  })

  $('#SB4').click(function() {
    localStorage.setItem('4pm', $('#4pm').val());
  })

  $('#SB5').click(function() {
    localStorage.setItem('5pm', $('#5pm').val());
  })



//To check if event. target has specific class, call the classList. contains() method on the target object, e.g. event.

  //Fills in text boxes with appropriate colors !REAPEAT CODE NEEDS FIXED
  if (currentTime == 9) {
    $('#hour-9').addClass('present');
  } else if (currentTime > 9) {
    $('#hour-9').addClass('past');
  } else {
    $('#hour-9').addClass('future');
  }

  if (currentTime == 10) {
    $('#hour-10').addClass('present');
  } else if (currentTime > 10) {
    $('#hour-10').addClass('past');
  } else {
    $('#hour-10').addClass('future');
  }

  if (currentTime == 11) {
    $('#hour-11').addClass('present');
  } else if (currentTime > 11) {
    $('#hour-11').addClass('past');
  } else {
    $('#hour-11').addClass('future');
  }

  if (currentTime == 12) {
    $('#hour-12').addClass('present');
  } else if (currentTime > 12) {
    $('#hour-12').addClass('past');
  } else {
    $('#hour-12').addClass('future');
  }

  if (currentTime == 13) {
    $('#hour-1').addClass('present');
  } else if (currentTime > 13) {
    $('#hour-1').addClass('past');
  } else {
    $('#hour-1').addClass('future');
  }

  if (currentTime == 14) {
    $('#hour-2').addClass('present');
  } else if (currentTime > 14) {
    $('#hour-2').addClass('past');
  } else {
    $('#hour-2').addClass('future');
  }

  if (currentTime == 15) {
    $('#hour-3').addClass('present');
  } else if (currentTime > 15) {
    $('#hour-3').addClass('past');
  } else {
    $('#hour-3').addClass('future');
  }

  if (currentTime == 16) {
    $('#hour-4').addClass('present');
  } else if (currentTime > 16) {
    $('#hour-4').addClass('past');
  } else {
    $('#hour-4').addClass('future');
  }

  if (currentTime == 17) {
    $('#hour-5').addClass('present');
  } else if (currentTime > 17) {
    $('#hour-5').addClass('past');
  } else {
    $('#hour-5').addClass('future');
  }

//Grabs localStorage keys and plugs them in if they exist !HELP REPEAT CODE 

if (window.localStorage.getItem('9am') !== null) { //Checks if 9am key exists
  var text = window.localStorage.getItem('9am');
  console.log(text);
  $('#9am').text(text);
}

if (window.localStorage.getItem('10am') !== null) { //Checks if 10am key exists
  var text = window.localStorage.getItem('10am');
  console.log(text);
  $('#10am').text(text);
}

if (window.localStorage.getItem('11am') !== null) { //Checks if 11am key exists
  var text = window.localStorage.getItem('11am');
  console.log(text);
  $('#11am').text(text);
}

if (window.localStorage.getItem('12pm') !== null) { //Checks if 12am key exists
  var text = window.localStorage.getItem('12pm');
  console.log(text);
  $('#12pm').text(text);
}

if (window.localStorage.getItem('1pm') !== null) { //Checks if 1pm key exists
  var text = window.localStorage.getItem('1pm');
  console.log(text);
  $('#1pm').text(text);
}

if (window.localStorage.getItem('2pm') !== null) { //Checks if 2pm key exists
  var text = window.localStorage.getItem('2pm');
  console.log(text);
  $('#2pm').text(text);
}

if (window.localStorage.getItem('3pm') !== null) { //Checks if 3pm key exists
  var text = window.localStorage.getItem('3pm');
  console.log(text);
  $('#3pm').text(text);
}

if (window.localStorage.getItem('4pm') !== null) { //Checks if 4pm key exists
  var text = window.localStorage.getItem('4pm');
  console.log(text);
  $('#4pm').text(text);
}

if (window.localStorage.getItem('5pm') !== null) { //Checks if 5pm key exists
  var text = window.localStorage.getItem('5pm');
  console.log(text);
  $('#5pm').text(text);
}

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//<!--bootstrap jquery jqeuryui dayjs myjs (order of sources)-->