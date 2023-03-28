// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []


// possible sol
function invert(arr) {
    // return a new array
   return arr.map( (el) => el * -1);
}

// second possible sol

function invert(arr){
    let inverse = []

    for(let i=0; i < arr.length; i++){
        inverse.push(arr[i] * -1)
    }
    return inverse
}