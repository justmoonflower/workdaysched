var todayDate = moment().format('MMM Do, YYYY');
$("#currentDay").html(todayDate);
// Sets the date to current day in real time.

$(document).ready(function () {
 $(".saveBtn").on("click", function () {
// Save input into local storage, which are the times of day.
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

//Local storage- representing each time slot. When text is entered the "save" button stores the data. 
//When you refresh page, the data is still secured in time slots.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));

$("#hour-10 .description").val(localStorage.getItem("hour-10"));

$("#hour-11 .description").val(localStorage.getItem("hour-11"));

$("#hour-12 .description").val(localStorage.getItem("hour-12"));

$("#hour-1 .description").val(localStorage.getItem("hour-1"));

$("#hour-2 .description").val(localStorage.getItem("hour-2"));

$("#hour-3 .description").val(localStorage.getItem("hour-3"));

$("#hour-4 .description").val(localStorage.getItem("hour-4"));

$("#hour-5 .description").val(localStorage.getItem("hour-5"));
  
});