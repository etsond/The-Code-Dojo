// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.



let number = function(busStops){
//   keep track of the passengers
  let passengers = [0]
  
//   loop through each busStop
  for(let i=0; i< busStops.length; i++){
//     add passengers who get on at this stop
    passengers += busStops[i][0]
//     subtract the passengers who gets off at this stop
    passengers -= busStops[i][1]
  }
//   return the passengers who are still on the bus
  return passengers
}


// using forEach
function number(busStops){
  let passengers = 0;
  busStops.forEach(stop => {
    passengers += stop[0] - stop[1];
  });
  return passengers;
}




function number(busStops){
  let passengers = 0;
  busStops.forEach(stop => {
    passengers += stop[0] - stop[1];
  });
  return passengers;
}
