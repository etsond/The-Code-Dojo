// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  // Check if all sides are greater than 0
  if (a > 0 && b > 0 && c > 0) {
    // Check if the sum of any two sides is greater than the third side
    if (a + b > c && b + c > a && c + a > b) {
      return true;
    }
  }
  // If any of the above conditions fail, return false
  return false;
}