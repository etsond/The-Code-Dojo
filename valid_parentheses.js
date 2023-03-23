// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.
==

function validParentheses(parenStr) {
    // empty arr
  let stack = [];

    // loop through parentStr
  for (let i = 0; i < parenStr.length; i++) {
    // checking if equals (
    if (parenStr[i] === '(') {
        // add it to them empty arr
      stack.push(parenStr[i]);

    }
    //If the current charac is a closing parenthesis, indicated by the charac ')', 
    //check if there are any opening parentheses in the stack array. 
    //If there are no opening parentheses in the stack, then the parentheses are unbalanced,
    // so we return false. If there is at least one opening parenthesis in the stack, 
    //we use the pop() method to remove it from the stack array. 
    else if (parenStr[i] === ')') {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  //if there are any opening parentheses  in the stack arr. If the stack arr is empty,
  // then we know that all opening parentheses have been matched with closing parentheses.
  // return true, otherwise, we return false

  return stack.length === 0;
}
