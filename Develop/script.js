// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var date = dayjs().format('ddd-MMMM-DD-YYYY');
  $('#currentDay').text(date);

  // TODO: Add a listener for click events on the save button. 
  $('.saveBtn').on('click', myFunction);

  // This code should use the id in the containing time-block as a key to save the user input in local storage.
  //  HINT: What does `this` reference in the click listener function?

  function myFunction() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();


    localStorage.setItem(key, value);
  }


  //  How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function time() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      //grabs each id 
      var timeBlockId = $(this).attr('id');

      var timeBlockIdNum = parseInt(timeBlockId.slice(5, 7));

      // console.log(timeBlockId);
      if (timeBlockIdNum < currentHour) {

        $('#' + timeBlockId).removeClass('present');
        $('#' + timeBlockId).removeClass('future');
        $('#' + timeBlockId).addClass('past');
        // console.log('past ran');
      } else if (timeBlockIdNum > currentHour) {
        $('#' + timeBlockId).removeClass('present');
        $('#' + timeBlockId).removeClass('past');
        $('#' + timeBlockId).addClass('future');
        // console.log('future ran');
      } else {
        $('#' + timeBlockId).removeClass('future');
        $('#' + timeBlockId).removeClass('past');
        $('#' + timeBlockId).addClass('present');
        // console.log('present ran');
      }
      // need to get the numbers only for each id, go through every string method
      //figure out how to convert string to integers
      //when its transfered to integers
    });

  }
  time();

  function saveText(){
    var key2 = $('.saveBtn').parent().attr('id');
    // var myId = $('.saveBtn');
    // var myClass = $(key2 + '.description');



    var storage = localStorage.getItem(key2);
    $('#hour-9 .description').html(storage);
    $('#hour-10 .description').html(storage);
    $('#hour-11 .description').html(storage);
    $('#hour-12 .description').html(storage);
    $('#hour-13 .description').html(storage);
    $('#hour-14 .description').html(storage);
    $('#hour-15 .description').html(storage);
    $('#hour-16 .description').html(storage);
    $('#hour-17 .description').html(storage);
    console.log(key2);
    // console.log(JSON.stringify(myClass));
  }
  saveText();


  // function getUserInput() {
  //   var keys = {
  //     1: '#hour-9 .description',
  //     2: '#hour-10 .description',
  //     3: '#hour-11 .description',
  //     4: '#hour-12 .description',
  //     5: '#hour-13 .description',
  //     6: '#hour-14 .description',
  //     7: '#hour-15 .description',
  //     8: '#hour-16 .description',
  //     9: '#hour-17 .description'
  //   }
  //   var key2 = $('.saveBtn').parent().attr('id');
  //   for (let i = 0; i <= 9; i++) {

  //     var storage = localStorage.getItem(key2);
  //     $(keys[i]).html(storage);
  //     console.log(keys[i])
  //   }
  //   console.log(storage);
  // }

  // getUserInput();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

