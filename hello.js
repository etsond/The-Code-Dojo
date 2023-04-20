// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`
// Good luck and try to be as creative as possible!


function helloWorld() {
  // Use String.fromCharCode() to construct the string
  const h = String.fromCharCode(72); // H
  const e = String.fromCharCode(101); // e
  const l = String.fromCharCode(108); // l
  const o = String.fromCharCode(111); // o
  const comma = String.fromCharCode(44); // ,
  const space = String.fromCharCode(32); // space
  const W = String.fromCharCode(87); // W
  const r = String.fromCharCode(114); // r
  const d = String.fromCharCode(100); // d
  const exclamation = String.fromCharCode(33); // !
  
  // Construct the string using concatenation
  const result = h + e + l + l + o + comma + space + W + o + r + l + d + exclamation;
  
  return result;

}