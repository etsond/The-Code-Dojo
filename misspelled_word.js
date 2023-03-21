// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

function mispelled(word1, word2) {
 //if the words are the same
  if (word1 === word2) {
    //true
    return true;
  }
  // if the absolute difference in length between the two words is > than 1 
  if (Math.abs(word1.length - word2.length) > 1) {
    //  returns false if it is.
    return false;
  }
  // if word1 is longer than word2.
  if (word1.length > word2.length) {
//     swaps word1 and word2
    [word1, word2] = [word2, word1];
  }
// i, j, & diff, && initializes them to 0.
  let i = 0, j = 0, diff = 0;
//while loop that continues as long as i is less than the length of word1 & j is less than the length of word2.
  while (i < word1.length && j < word2.length) {
    //compare the characters at positions i & j (word1 and word2). 
    //If they are different, the diff variable is incremente
    if (word1[i] !== word2[j]) {
      diff++;
      // if it is greater than 1
      if (diff > 1) {
        //returns false
        return false;
      }
      // If the lengths of word1 and word2 are the same
      if (word1.length === word2.length) {
        // i is incremented to check the next character
        i++;
      }
    } else {
      i++;
    }
    j++;
  }
  //ends while loop & returns true if diff equals 1, 
  //meaning there is exactly one difference between the two words. 
  //If the lengths of word1 and word2 are different and there are no differences, 
  //the function also returns true. Otherwise, it returns false.
  return diff === 1 || (word1.length !== word2.length && diff === 0);
}
