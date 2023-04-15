// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

function toNumberArray(stringarray){
  const outputArr = [];
  for (let i = 0; i < stringarray.length; i++) {
    const num = stringarray[i];
    const parsedNum = Number(num);
    if (isNaN(parsedNum)) {
      outputArr.push(parseInt(num));
    } else {
      outputArr.push(parsedNum);
    }
  }
  return outputArr;


}