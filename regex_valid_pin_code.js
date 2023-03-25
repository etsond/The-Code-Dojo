// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN(pin) {
  // is pin string
  if (typeof pin !== 'string') {
    return false;
  }

  // is pin 4 and 6 num lon
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // Check PIN contains only num
  for (let i = 0; i < pin.length; i++) {
    let characCode = pin.charCodeAt(i);
    if (characCode < 48 || characCode > 57) {
      return false;
    }
  }

  //if everything succeed pin is valid
  return true;
}
