// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.
// Note: only positive integers will be tested.


function sumOfIntegersInString(s) {
  let numStr = "";
  const nums = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (isDigit(c)) {
      numStr += c;
    } else {
      if (numStr !== "") {
        nums.push(parseInt(numStr));
        numStr = "";
      }
    }
  }
  if (numStr !== "") {
    nums.push(parseInt(numStr));
  }
  return nums.reduce((sum, num) => sum + num, 0);
}

function isDigit(c) {
  return c >= "0" && c <= "9";
}