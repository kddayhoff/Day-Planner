// √ 1. Get moment.js date on the page
//2. Create table with 11 rows and 3 columns (bootstrap)
    // a. left column is a time that is dynamic - ie syncs up with moment.js (I'm thinking some sort of hardcode and a for loop with momentjs that changes the color of the row when that time is reached) - seen this example in W3Schools
        //-classes in css: row, hour, past, present, future, saveBtn
    // √ b. Use bootstrap to create table
//3. Allow the ability for users put in info into rows
    // a. Text column will need input option (html <input> inside rows? or js?)
//4. Alloww users to save info to local storage
//5. Make it so that rows change color depending on the time of day
    // a. for loop with if, else if, else (if i > x time then, if i < x time then, if i is neither then)



$(document).ready(function(){
      $("#currentDay").text(moment().format('MMMM Do YYYY'));
});
console.log(moment().format('MMMM Do YYYY'));


function planner1() {
// for (i = 0; i < 11; i++) {
    var time = $("<row col-10>", "<row>");
    var userInputForm = $("<input type='text' col-1 class='form-control'>", "<row>");
    var btn = $("<button class='btn btn-primary' col-10>", "<row>");

    $(btn).text("Save");
    $("#div8").append(time, userInputForm, btn);
    $(time).text("8 AM");

    $(btn).on("click", function() {
        var userInput = $(userInputForm).val();
        localStorage.setItem("8AM", userInput);
        console.log("8 AM " + userInput);
        $("#div8").append(userInputForm);

    });
    // $(btn).on("click", function() {
    //     var stuff = localStorage.getItem("8AM");
    //     $("#div8")
    //}
    };
planner1();

function planner2() {
    // for (i = 0; i < 11; i++) {
    var time = $("<row col-10>", "<row>");
    var userInputForm = $("<input type='text' col-1 class='form-control'>", "<row>");
    var btn = $("<button class='btn btn-primary' col-10>", "<row>");

    $(btn).text("Save");
    $("#div9").append(time, userInputForm, btn);
    $(time).text("9 AM");

    $(btn).on("click", function() {
        var userInput = $(userInputForm).val();
        localStorage.setItem("9AM", userInput);
        console.log("9 AM " + userInput);
        localStorage.getItem(userInput);
    }
    )};
planner2();

    function planner3() {
        // for (i = 0; i < 11; i++) {
        var time = $("<row col-10>", "<row>");
        var userInputForm = $("<input type='text' col-1 class='form-control'>", "<row>");
        var btn = $("<button class='btn btn-primary' col-10>", "<row>");
        
        $(btn).text("Save");
        $("#div10").append(time, userInputForm, btn);
        $(time).text("10 AM");

        $(btn).on("click", function() {
            var userInput = $(userInputForm).val();
            localStorage.setItem("10AM", userInput);
            console.log("10 AM " + userInput);
        // function getBack () {
        //     var name = localStorage.getItem("10 AM");
        //     if (name !== null) $("#div10").val("10 AM");
        // }
        // getBack();
        })};
        planner3();
        
      
       

// var btn = $("#eight-am").btn("button");
// for (var i = 0; 1 < )
// $(btn).on("click", function() {
//     var userText = $("#user-input8").val();
//     var userInput = $("<h1>" + userText + "</h1>");
//     $("#user-input8").append(userInput);
//     console.log(userText);
//     localStorage.setItem("8 AM", userText);
// })
// function container () {
// for (i=0; i < 12; i++) {
//     // Re-creating Bootstrap in a for loop
//     container.append($("<div></div>").addClass("row"));
//     $(".row:eq(" + i + ")").append($("<div></div>").addClass("col-md-1"), $("<div>").addClass("col-md-10"), $("<div></div>").addClass("col-md-1"));
//     $(".col-md-10:eq(" + i + ")").append($("<div></div>").addClass("hourSlot"), $("<div>").addClass("input-group mb-3"));
//     $(".mb-3:eq(" + i + ")").append($("<div>").addClass("input-group-prepend"), $("<input>").addClass("form-control").attr("type", "text").attr("aria-label", "Text input with checkbox"));
//     $(".input-group-prepend:eq(" + i + ")").append($("<input>").addClass("btn btn-primary").attr("type", "submit").attr("value", "Save"));
//  } };
// Don’t code each button static, render them with a loop and give each input a unique Id then you can console log the value. Don’t worry about a table, just make each loop create a div with a class of row so bootstrap formats it nice and pretty 
// But first, DO NOT start with styling. Just get one div on the page, console log its value, get that to local storage, and then get moment to work on that single div. then after you’ve done that for one div, then you can role it out for the rest of the divs that you loop through
// $("#btn9").on("click", function() {
//     var userText = $("#user-input9").val();
//     var userInput = $("<h1>" + userText + "</h1>");
//     $("#user-input9").append(userInput);
//     console.log(userText);
//     localStorage.setItem("9 AM", userText);
// })

// var btn1 = "#btn1";
// console.log(btn1);

// $("#btn1").on("click", function() {
//     var userText = $(".user-input").val();
//     var userInput = $("<h2>" + userText + "<h2>");
//     $("#text-here1").append(userInput);
//     console.log(userText);
// })

// {/* <input class='todo' data-time="8am">
// <button id="8am"></button>

//var input = $(".todo").val();
// console.log(input);

// $("#8am).on("click", function()) {
//     $("")
// }
// $(btn).on("click", function() { */}
//     var userText = $("#user-input2").val();
//     var userInput = $("<p>" + userText + "<p>");
//     //$("#text-here1").append(userInput);
//     console.log(userText);
// })


// $("#save-button2").on("click", function() {
//     var userText = $("#user-input2").val();
//     var userInput = $("<p>" + userText + "<p>");
//     $("#user-input2").append(userInput);
//     console.log(userText);
// })




