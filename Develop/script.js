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
    var currentHour =  dayjs().hour();
    $('.time-block').each(function (){
      var timeBlockId = $(this).attr('id');

      console.log(timeBlockId);
      console.log(Number(timeBlockId));

      if (timeBlockId < currentHour) {
        timeBlockId.addClass('past');
        console.log('if statement is true.');
      }
      // need to get the numbers only for each id, go through every string method
      //figure out how to convert string to integers
      //when its transfered to integers

    });
  
  }
  time();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

