
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
    // storing the sum and cub
  let squareSum = 0;
  let cubeSum = 0;
  
//   loop through arr and adding the square of el to the squareSum
  for (let i = 0; i < a.length; i++) {
    squareSum += a[i] ** 2;
  }
//   loop through arr and adding the cube of el to cubSum
  for (let i = 0; i < b.length; i++) {
    cubeSum += b[i] ** 3;
  }
//   compare and return a boolean
  return squareSum > cubeSum;
}


// usign reduce

function arrayMadness(a, b) {
  return (a.reduce( (acc, curr) => acc + curr **2 ,0) > b.reduce( ( acc,curr) => acc + curr **3,0))
}
