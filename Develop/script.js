// √ 1. Get moment.js date on the page
//2. Create table with 11 rows and 3 columns (bootstrap)
    // a. left column is a time that is dynamic - ie syncs up with moment.js (I'm thinking some sort of hardcode and a for loop with momentjs that changes the color of the row when that time is reached) - seen this example in W3Schools
        //-classes in css: row, hour, past, present, future, saveBtn
    // b. 
//3. Allow the ability for users put in info into rows
    // a. Text column will need input option (html <input> inside rows? or js?)
//4. Alloww users to save info to local storage
//5. Make it so that rows change color depending on the time of day
    // a. for loop with if, else if, else (if i > x time then, if i < x time then, if i is neither then)


$(document).ready(function(){
      $("#currentDay").text(moment().format('MMMM Do YYYY'));
});
console.log(moment().format('MMMM Do YYYY'));



