// Consider the following expansion:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

// More examples in test cases.

function solve(str) {
  const stack = [];
  let currentString = '';
  let currentCount = 1;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    
    if (char === '(') {
      stack.push(currentCount);
      stack.push(currentString);
      currentString = '';
      currentCount = 1;
    } else if (char === ')') {
      const prevString = stack.pop();
      const prevCount = stack.pop();
      currentString = prevString + currentString.repeat(prevCount);
      currentCount = 1;
    } else if (char >= '0' && char <= '9') {
      currentCount = parseInt(char);
    } else {
      currentString += char;
    }
  }
  
  return currentString;
}
