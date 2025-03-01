console.log("External file");

//--------------------- Add error ---------------------//

console.error("This file has some problems!!!");

//--------------------- Add grouping ---------------------//
console.group("Group of logs");

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

console.groupEnd();

//--------------------- Add table ---------------------//

console.table({ name: "Ramey", age: 35 });

//--------------------- Add styles ---------------------//

const styles =
  "background-color:lightblue; color:black; margin:20px; padding:15px";

console.log("%cStart coding, now!", styles);
//--------------------- Add warning ---------------------//

console.warn("Check this file!!!");
