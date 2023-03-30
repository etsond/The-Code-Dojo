// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



function countSheep(num) {
//   start with an empty string
  let mur = "";
  //loop through numbers from 1 up to num
  for (let i = 1; i <= num; i++) {
//     adding each num & string "sheep..." to murmur.
    mur += i + " sheep...";
  }
  return mur;
}