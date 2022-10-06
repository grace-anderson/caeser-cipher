function rot13(str) {
  //Create empty string
  let result = "";
  //Loop through input string
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    //if the character is a letter from A-M
    if (/[a-m]/i.test(character)) {
      //turn character into char code
      let charCode = character.charCodeAt(0);
      //add 13 to char code
      charCode += 13;
      //Turn char code back to character
      //Add to the result string
      result += String.fromCharCode(charCode);
    }
    //Else if the character is a letter from N-Z
    else if (/[n-z]/i.test(character)) {
      //Turn into char code
      let charCode = character.charCodeAt(0);
      //Subtract 13 from char code
      charCode -= 13;
      // Turn char code back to character
      // Add to result string
      result += String.fromCharCode(charCode);
    }
    //Else
    else {
      //Add character to result string
      result += character;
    }
  }
  //return result string
  return result;
}
