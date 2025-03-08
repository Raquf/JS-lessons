//---------------------- Task 1

/*Will it be output to the console?
if ('0') {
    console.log('какой то текст');
}

//********** Solution **********/

/* if ("0") {
   console.log("Something text");
}*/

//---------------------- Task 2

/* Using the if..else construct, write code that receives a number via prompt and then outputs it to the console?
(Assuming only numbers are entered into the prompt)

 1 if the value is greater than zero,
-1 if the value is less than zero,
 0 if the value is zero.

*/

const num = prompt("Write number___");

/*
 if (num > 0) {
   console.log("It's number more than 0");
 } else if (num === 0) {
   console.log("It's number equal 0");
} else {
   console.log("It's number less 0");
 }
*/

//---------------------- Task 3

/* Using the if..else construct, write code that receives a number via prompt and then outputs it to the console?
(Assuming only numbers are entered into the prompt) - "Rewrite problem 2 using the ternary operator (?)""

 1 if the value is greater than zero,
-1 if the value is less than zero,
 0 if the value is zero.

*/

num > 0
  ? console.log("It's number more than 0")
  : num === 0
  ? console.log("It's number equal 0")
  : console.log("It's number less 0");
