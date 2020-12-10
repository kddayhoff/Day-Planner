var dailyItems = [];

//Puts current day on the planner title
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY"));
});
console.log(moment().format("MMMM Do YYYY"));

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
renderItems();

function init() {
  var storedItems = JSON.parse(localStorage.getItem("dailyItems"));

  if (storedItems !== null) {
    dailyItems = storedItems;
  }
  renderItems();
}

function storedItems() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("dailyItems", JSON.stringify(dailyItems));
}
var time = 11;

function timeColor() {
  for (var i = 0; i < time; i++);

  var past = $(".time-count").addClass(".past");
  var present = $(".time-count").addClass(".present");
  var future = $(".time-count").addClass(".future");
  var currentTime = moment();

  if (time < currentTime) {
    past.toggle();
    past = "past";
    console.log(past);
  } else if ((time = currentTime)) {
    present.toggle();
    present = "present";
    console.log(present);
  } else time > currentTime;
  future.toggle();
  future = "future";
  console.log(future);
}

timeColor();
$(".time-count").append(timeColor);
