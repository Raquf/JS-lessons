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

const age = 35;

console.log(age);
console.log(typeof age);

//--------------------- String ---------------------//

const firstName = "Ramey";

console.log(firstName);
console.log(typeof firstName);

//--------------------- BigInt ---------------------//

const bigNumber = 12345678654323456n;

console.log(bigNumber);
console.log(typeof bigNumber);

//--------------------- Boolean ---------------------//

const isActive = true;
const isConfirned = false;

console.log(isActive, isConfirned);
console.log(typeof isActive, typeof isConfirned);

//--------------------- Null ---------------------//

const city = null;

console.log(city);
console.log(typeof city);

//--------------------- Underfined ---------------------//

let isLoading;

console.log(isLoading);
console.log(typeof isLoading);

//--------------------- Symbol ---------------------//

const id = Symbol("123");

console.log(id);
console.log(typeof id);

//--------------------- Reference types ---------------------//

//--------------------- Object ---------------------//

const person = {
  firstName: "Ramey",
  lastName: "Mehdiyev",
  age: 35,
};

console.log(person);
console.log(typeof person);

//--------------------- Array ---------------------//

const numArr = [1, 2, 3, 4, 5];

console.log(numArr);
console.log(typeof numArr);

//--------------------- Function ---------------------//

function info() {
  return "Hello World!";
}

console.log(info);
console.log(typeof info);
////
