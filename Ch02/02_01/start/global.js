// let hello = "Hello World from Node.js";
// let justNode = hello.slice(17);
// console.log(`Who let the ${justNode} out?`);


// console.log("hello world");
// const path = require("path");

// console.log(__dirname);
// console.log(__filename);

// console.log(
//   `This file name is ${path.basename(__filename)}`
// );

// for (let key in global) {
//   console.log(key);
// }

// console.log(process.argv);

// function grab(flag) {
//   let indexAfterFlag = process.argv.indexOf(flag) + 1;
//   return process.argv[indexAfterFlag];
// }

// let greeting = grab("--greeting");
// let user = grab("--user");

// console.log(greeting);
// console.log(user);

// const questions = [

const waitTime = 3000;
console.log(`Setting wait time to ${waitTime / 1000} seconds`);

const timerFnished = () => console.log("Done");

setTimeout(timerFnished, waitTime);