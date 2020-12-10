var dailyItems = [];

//Puts current day on the planner title
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));

  console.log(moment().format("MMMM Do YYYY"));

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var scheduleText = $(this).siblings(".description").val();
    localStorage.setItem(time, scheduleText);
  });

  function renderItems() {
    $(btn8).on("click", function (event) {
      event.preventDefault();
      var userText = $("#user-input8").val();
      var userInput = $("<h1>" + userText + "</h1>");
      $("#user-input8").append(userInput);
      console.log(userText);
      localStorage.setItem("8 AM", userText);
      dailyItems.push(userText);
    });

    $(btn9).on("click", function (event) {
      event.preventDefault();
      var userText = $("#user-input9").val();
      var userInput = $("<h1>" + userText + "</h1>");
      $("#user-input9").append(userInput);
      console.log(userText);
      localStorage.setItem("9 AM", userText);
      dailyItems.push(userText);
    });

    $(btn10).on("click", function (event) {
      event.preventDefault();
      var userText = $("#user-input10").val();
      var userInput = $("<h1>" + userText + "</h1>");
      $("#user-input10").append(userInput);
      console.log(userText);
      localStorage.setItem("10 AM", userText);
      dailyItems.push(userText);
    });
  }
  // renderItems();

  // function init() {
  //   var storedItems = JSON.parse(localStorage.getItem("dailyItems"));

  //   if (storedItems !== null) {
  //     dailyItems = storedItems;
  //   }

  //   // renderItems();
  // }

  // function storedItems() {
  //   // Stringify and set "todos" key in localStorage to todos array
  //   localStorage.setItem("dailyItems", JSON.stringify(dailyItems));
  // }
  // var time = 11;

  function timeColor() {
    var currentTime = moment().hours();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id"));

      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if ((blockTime = currentTime)) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  timeColor();

  $(".time-count").append(timeColor);

  $("#8 .description").val(localStorage.getItem("8"));

  $("#9 .description").val(localStorage.getItem("9"));
});
