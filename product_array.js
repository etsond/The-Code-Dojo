// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 20 is the product of all array's elements except the first element

// The second element 12 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2


// way i did it
function productArray(arr) {
   //length of the array
  const n = arr.length;
  //initializes a new array prod n  fills el with 1
  const prod = new Array(n).fill(1);

  //multiply each el * left and update left per each iteration
  let left = 1;
  for (let i = 0; i < n; i++) {
    prod[i] *= left;
    left *= arr[i];
  }

//   calculate the product of all el on the right
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    prod[i] *= right;
    right *= arr[i];
  }

  return prod;
}

// refactored 
function productArray(numbers){
  return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
}