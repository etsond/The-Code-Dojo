// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    let sumOfMarks = 0

    for(let i = 0; i === marks.length-1; i++){
        // adding to sum
        sumOfMarks += marks[i]
    }
    // calculating the average
    let averageOfMarks = sumOfMarks / marks.length;
    return Math.floor(averageOfMarks)
}