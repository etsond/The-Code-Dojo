// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"


function stringMerge(word1, word2, letter) {
  // Find the index of the given letter in the first word
  var index1 = word1.indexOf(letter);

  // Find the index of the given letter in the second word
  var index2 = word2.indexOf(letter);

  // Extract the parts of the words before and after the given letter
  var prefix1 = word1.slice(0, index1);
  var prefix2 = word2.slice(0, index2);
  var suffix1 = word1.slice(index1);
  var suffix2 = word2.slice(index2);

  // Combine the prefixes and suffixes to create the merged word
  var mergedWord = prefix1 + suffix2;

  // Return the merged word
  return mergedWord;
}