function doubleChar(str) {
  // A place to store the result
  let output = '';

  // Read each letter and
  for (let i = 0; i < str.length; i+= 1) {
    // Add it to the storage var twice
    output = output + str[i] + str[i];
  }
  
  return output;
}

function doubleChar(str){
  //regex
  return str.replace(/./g, '$&$&');
}

console.log(
    doubleChar('Hello World'),
    doubleChar('TugBoat'),
    doubleChar('Happy Halloween!')
);