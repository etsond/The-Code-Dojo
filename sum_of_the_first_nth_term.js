// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

function SeriesSum(n)
{
//   start at zero
 let sum = 0;
//   iterate over the sum and acc them to sum
  for (let i = 0; i < n; i++) {
//     calculate the sum using the formula
    //     1,4,7,10,13,16 differnce is 3
//     1 / (1 + (n-1)*3)
    sum += 1 / (1 + i * 3);
  }
//   round to two decimal places and return as a string
  return sum.toFixed(2);
}