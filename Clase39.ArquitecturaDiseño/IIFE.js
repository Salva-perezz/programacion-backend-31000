const SingletonClass = require("./singleton.js");

// (() => {
//   const num1 = 5;
//   const num2 = 10;
//   const result = num1 + num2;

//   console.log(result);
// })();

const obj1 = SingletonClass.getInstance();
const obj2 = SingletonClass.getInstance();

console.log(obj1.value === obj2.value);
