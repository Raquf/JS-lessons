//--------------------- 1th JS lesson ---------------------//

// console.log("External file");

//--------------------- Add error ---------------------//

//console.error("This file has some problems!!!");

//--------------------- Add grouping ---------------------//
//console.group("Group of logs");

//console.log("1");
//console.log("2");
//console.log("3");
//console.log("4");
//console.log("5");

//console.groupEnd();

//--------------------- Add table ---------------------//

//console.table({ name: "Ramey", age: 35 });

//--------------------- Add styles ---------------------//

//const styles =
//  "background-color:lightblue; color:black; margin:20px; padding:15px";

//console.log("%cStart coding, now!", styles);
//--------------------- Add warning ---------------------//

//console.warn("Check this file!!!");

//--------------------- 2th JS lesson "Variables" ---------------------//

//--------------------- Add variables ---------------------//

//-Declaration (let info);
//-Assignment (info = "work");

//let info = "work";

/* let a = 1;
b = 2;
c = 3;

console.log(info); */

// const firstName = "Ramey";
// const age = 35;

// console.log(typeof firstName, typeof age);

//--------------------- 3th JS lesson "Data types" ---------------------//

// 8 data types: number, bigInt, string, boolean, underfined, null, object, symbol

//--------------------- Number ---------------------//

// const age = 35;

// console.log(age);
// console.log(typeof age);

//--------------------- String ---------------------//

// const firstName = "Ramey";

// console.log(firstName);
// console.log(typeof firstName);

//--------------------- BigInt ---------------------//

// const bigNumber = 12345678654323456n;

// console.log(bigNumber);
// console.log(typeof bigNumber);

//--------------------- Boolean ---------------------//

// const isActive = true;
// const isConfirned = false;

// console.log(isActive, isConfirned);
// console.log(typeof isActive, typeof isConfirned);

//--------------------- Null ---------------------//

// const city = null;

// console.log(city);
// console.log(typeof city);

//--------------------- Underfined ---------------------//

// let isLoading;

// console.log(isLoading);
// console.log(typeof isLoading);

//--------------------- Symbol ---------------------//

// const id = Symbol("123");

// console.log(id);
// console.log(typeof id);

//--------------------- Reference types ---------------------//

//--------------------- Object ---------------------//

// const person = {
//   firstName: "Ramey",
//   lastName: "Mehdiyev",
//   age: 35,
// };

// console.log(person);
// console.log(typeof person);

//--------------------- Array ---------------------//

// const numArr = [1, 2, 3, 4, 5];

// console.log(numArr);
// console.log(typeof numArr);

//--------------------- Function ---------------------//

// function info() {
//   return "Hello World!";
// }

// console.log(info);
// console.log(typeof info);

//--------------------- Operators ---------------------//

// let lessons = 10;

// lessons = 10 + 10;

// console.log(lessons);

// lessons = 10 - 5;

// console.log(lessons);

// lessons = 10 * 10;

// console.log(lessons);

// lessons = 10 / 10;

// console.log(lessons);

// lessons = 10 % 2; // remainder from division

// console.log(lessons);

//------------------------------------------------------

// let x;

// x = 2 ** 2; // raising to a power

// console.log(x);

// x = 1;

// x = x + 1;

// console.log(x);

// x = x++;

// console.log(x);

// x = ++x;

// console.log(x);

//------------------------------------------------------

// let a = 10;

// // let b = a++; // b = 10, but a = 11

// // console.log(a, b);

// let b = ++a; // b =11, and a = 11;

// console.log(a, b);

//--------------------- Assignment operators ---------------------//

// let d = 10;

// d += 1; // d = d + 1 - similar option

// console.log(d);

//--------------------- Comparison operators ---------------------//

// >, <, >=, <=
// ==, ===, !=, !==

// console.log(1 == 1); // true
// console.log(1 === 1); // true
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false
// console.log(1 != 1); // false
// console.log(1 != "1"); // false
// console.log(1 !== "1"); // true

//--------------------- Сoncatenation ---------------------//

// const greeting = "Hey " + "baby";

// console.log(greeting);

//--------------------- 6th JS lesson ---------------------//

// let value = 10;

// value = value + ""; // convert number to string

// console.log(value, typeof value);

// value = `${value} Ramey`; // casting a number to a variable

// console.log(value, typeof value);

// value = value.toString(); // convert number to string

// console.log(value, typeof value);

// value = Number(value); // convert string  to number

// console.log(value);

// value = +value; // convert string  to number (innar number)

// console.log(value, typeof value);

// value = parseInt(value); //  convert string  to number (with help "Parse")

// console.log(value);

// value = "10.33";

// value = parseInt(value); // convert string  to  number (with help "Parse")

// console.log(value);

// value = "10.33";

// value = parseFloat(value); // convert string  to float number (with help "Parse")

// console.log(value);

// value = 10.12345;

// value = value.toFixed(2);

// value = parseFloat((10.1213234).toFixed(5));

// console.log(value);

//--------------------- Сasting ---------------------//

// value = 10 + "10";

// console.log(value);

// value = 10 - "10";

// console.log(value);

// value = 10 * "10";

// console.log(value);

// value = 10 / "10";

// console.log(value);

// value = 10 % "10";

// console.log(value);

// value = 10 + true;

// console.log(value);

// value = 10 + false;

// console.log(value);

// value = 10 + null;

// console.log(value);

// value = 10 + undefined;

// console.log(value);

// value = 10 + NaN;

// console.log(value);

// value = 10 + [];

// console.log(value);

// value = 10 + {};

// console.log(value);

// value = true + true;

// console.log(value);

// value = true + false;

// console.log(value);

// value = false + false;

// console.log(value);

//--------------------- == & === ---------------------//

// let res;

// res = true == true;

// console.log(res);

// res = true === true; // more stromg

// console.log(res);

// res = true == 1;

// console.log(res);

// res = true === 1;

// console.log(res);

// res = false == 0;

// console.log(res);

// res = false === 0;

// console.log(res);

// res = 1 == "1";

// console.log(res);

// res = 1 === "1";

// console.log(res);

// res = null == undefined;

// console.log(res);

// res = null === undefined;

// console.log(res);

// res = "" == [];

// console.log(res);

// res = "" === [];

//--------------------- 7th JS lesson (If, else construct. Ternary operator) ---------------------//

//--------------------- Сonditional branches - If statements

// const age = 19;

// if (age >= 18) {
//   console.log("Come in please!!!");
// } else {
//   console.log("Come out!!!");
// }

if (0) {
} // false

if (1) {
} // true

if ("0") {
} // true

if ("") {
} // false

if (" ") {
} //true

// const result = prompt("How are you?");

// if (result === "Good") {
//   alert("You are well done!");
// } else if (result === "Normal") {
//   alert("All right");
// } else if (result === "Bad") {
//   alert("What is happened?");
// } else {
//   alert("Never give up!!!");

//--------------------- Ternary operator

const myAge = 36;

// if (myAge < 18) {
//   alert("This is man so little");
// } else if (myAge === 35) {
//   alert("Yes, it's true!!!");
// } else if (myAge > 35) {
//   alert("He is very old");
// }

// "If" - ?
// "else" - :
//

// myAge < 18 ? alert("This is man so little") : alert("Yes, it's true");
