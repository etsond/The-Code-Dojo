// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

function day(numbers){

    if(numbers === 1){
        return "Sunday"
    }else if(numbers === 2){
        return "Monday"
    }else if(numbers === 3){
        return "Tuesday"
    }else if(numbers === 4){
        return "Wednesday"
    }else if(numbers === 5){
        return "Thursday"
    }else if(numbers === 6){
        return "Friday"
    }else if(numbers === 7){
        return "Saturday"
    }else{
        return `Wrong, please enter a number between 1 and 7`
    }
    
}