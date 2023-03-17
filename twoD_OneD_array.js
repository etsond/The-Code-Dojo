// Hello! Your are given x and y and 2D array size tuple (width, height) and you have to:

// Calculate the according index in 1D space (zero-based).
// Do reverse operation.
// Implement:
// to_1D(x, y, size):
//   --returns index in 1D space
// to_2D(n, size)
//   --returns x and y in 2D space
// 1D array: [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 2D array: [[0 -> (0,0), 1 -> (1,0), 2 -> (2,0)], 
//            [3 -> (0,1), 4 -> (1,1), 5 -> (2,1)], 
//            [6 -> (0,2), 7 -> (1,2), 8 -> (2,2)]]
// to_1D(0, 0, (3,3)) returns 0 to_1D(1, 1, (3,3)) returns 4 to_1D(2, 2, (3,3)) returns 8 to_2D(5, (3,3)) returns (2,1) to_2D(3, (3,3)) returns (0,1)
// Assume all input are valid: 
// 1 < width  < 500; 
// 1 < height < 500





function to1D(x, y, size) {
    // get the width and height--destructuring
  const [width, height] = size;
  //calculating the index by multiply y cor by width + x cor
  return y * width + x;
}

// takes n and size n
function to2D(n, size) {
    // width and height
  const [width, height] = size;
  //calculate x by taking the remainder---- x-cor increases by 1 every width of the array
  const x = n % width;
  //calculate y cor by / n by width --- y cor increase by 1 every width
  const y = Math.floor(n / width);
//   return x and y in an array of points of the 2d array
  return [x, y];
}


// refactor
function to1D(x, y, [w,h]) {
  return y * w + x;
}

function to2D(n, [w,h]) {
  return [n%w, n/w|0];
}