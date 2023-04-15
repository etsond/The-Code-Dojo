// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

// If the string matches, return true else false.

// For example:
// solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
// solve("codewars","codewars") = true, because the strings already match.
// solve("a","b") = false
// solve("*", "codewars") = true

function solve(a, b) {
  if (a === b) {
    return true; // a and b are already identical
  }

  if (a.includes("*")) {
    const parts = a.split("*");
    const prefix = parts[0];
    const suffix = parts[1];

    if (prefix.length + suffix.length > b.length) {
      return false; // combined length of prefix and suffix is greater than b, so a cannot match b
    }

    if (!b.startsWith(prefix) || !b.endsWith(suffix)) {
      return false; // b does not start with prefix or does not end with suffix, so a cannot match b
    }

    return true; // a matches b
  }

  return false; // a does not contain an asterisk and is not equal to b, so a cannot match b
}