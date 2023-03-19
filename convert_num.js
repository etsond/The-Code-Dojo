// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// first sol

function digitize(n) {
  let initialArr = (""+n).split('');
  let reversedArr = [];
  for (let i = initialArr.length - 1; i >= 0; i--) {
    reversedArr[i] = parseInt(initialArr.shift(),10);
  }
  return reversedArr;
}

// short

function digitize(n) {
  //code here
  return n.toString().split('').reverse().map(Number)
}