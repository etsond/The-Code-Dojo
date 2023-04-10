// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!


function solve(str) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  let numCount = 0;
  let charCount = 0;

  const uppercaseLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLet = 'abcdefghijklmnopqrstuvwxyz';
  const num = '0123456789';

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (uppercaseLet.includes(char)) {
      uppercaseCount++;
    } else if (lowercaseLet.includes(char)) {
      lowercaseCount++;
    } else if (num.includes(char)) {
      numCount++;
    } else {
      charCount++;
    }
  }

  return [uppercaseCount, lowercaseCount, numCount, charCount];
}

console.log(solve("*'&ABCDabcde12345")); 
