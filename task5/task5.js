var d = prompt("Enter your age");
var now = new Date(); //a Date object for the current date and time.
var nowYear = now.getFullYear(); //Extract the years.
now.setFullYear(nowYear - d); //Reset the Date object d yeas ago.
document.write(now);