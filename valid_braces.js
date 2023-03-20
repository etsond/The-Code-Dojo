// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False






function validBraces(braces){
  // initializes empty array called "stack" & a dictionary "pairs" 
  let stack = [];
  let pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  // loop through each character in the input string, 
  //push opening braces onto the stack & popping last opening brace from  stack .
  //if a corresponding closing brace is found. 
  //If the input string contains any invalid brace pairs, the function returns false. 
  //Finally, if the stack is empty at the end of the loop, the function returns true.
  for (let i = 0; i < braces.length; i++) {
    let brace = braces[i];
    if (["(", "[", "{"].includes(brace)) {
      stack.push(brace);
    } else if (stack.length > 0 && pairs[brace] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  // checking whether the input string contains valid brace pairs, and it runs in linear time with respect to the length of input string.
  return stack.length === 0;
}