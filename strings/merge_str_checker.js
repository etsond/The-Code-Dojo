// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears


function isMerge(s, part1, part2) {
  if (s.length !== part1.length + part2.length) {
    return false;
  }

  let i = 0;
  let j = 0;

  for (let k = 0; k < s.length; k++) {
    if (s[k] === part1[i] && s[k] === part2[j]) {
      // If the current character in s matches with characters in both part1 and part2,
      // we have two choices: either choose part1 or part2 to form s
      // We try both options recursively
      const isMergeWithPart1 = isMerge(s.slice(k + 1), part1.slice(i + 1), part2.slice(j));
      const isMergeWithPart2 = isMerge(s.slice(k + 1), part1.slice(i), part2.slice(j + 1));
      return isMergeWithPart1 || isMergeWithPart2;
    } else if (s[k] === part1[i]) {
      i++;
    } else if (s[k] === part2[j]) {
      j++;
    } else {
      return false;
    }
  }

  // Additional check to ensure that all characters in part1 and part2 have been used
  // If not, then s cannot be formed from part1 and part2
  if (i !== part1.length || j !== part2.length) {
    return false;
  }

  return true;
}
