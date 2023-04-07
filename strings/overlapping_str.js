// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"


function overlapStrings(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  let overlapLength = 0;

  for (let i = 1; i <= Math.min(len1, len2); i++) {
    if (str1.slice(len1 - i) === str2.slice(0, i)) {
      overlapLength = i;
    }
  }

  return str1 + str2.slice(overlapLength);
}
