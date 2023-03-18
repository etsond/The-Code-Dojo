// We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.

// Your mission is to write a function which removes this noise from the message.

// Notice that noise can only be %$&/#·@|º\ª characters, other characters are not as considered noise

// For example:

// removeNoise("h%e&·%$·llo w&%or&$l·$%d")
// // returns hello world

// takes a string
function removeNoise(str) {
//   storing the special characters needed to remove
  const specialChars = ["%", "$", "&", "/", "#", "·", "@", "|", "º", "\\", "ª"];
//   initialize an empty string will be store with the cleans str
  let cleanedStr = "";
  
  //iterate through each input str
  for (let i = 0; i < str.length; i++) {
    //current char being processes
    const char = str[i];
    
    //checks if the current character is not included in the specialChars array
    if (!specialChars.includes(char)) {
      //if not, then we append the current character to the cleanedStr variable
      cleanedStr += char;
    }
  }
  //exit the for loop and return the cleanedStr variable
  return cleanedStr;
}

//another cool way
function removeNoise(str){
	return str.replace(/[%$&/#·@|º\\ª]/gi,'');
}
