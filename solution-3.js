//rotation must be between 0-13
const ROTATION = 13;

function rot13(str) {
  // make empty string
  let result = "";
  //loop through the string
  for (let i = 0; i < str.length; i++) {
    //if the character is a letter
    const character = str[i];
    //if the charcode - rotation >= 65
    if (/[a-z]/i.test(character)) {
      const charCode = character.charCodeAt(0);
      if (charCode - ROTATION >= "A".charCodeAt(0)) {
        // add the character rotated backwards (i.e. subtract)
        result += String.fromCharCode(charCode - ROTATION);
      }
      //else
      //Add the character rotated forwards (i.e. add)
      else {
        result += String.fromCharCode(charCode + ROTATION);
      }
    }
    //else
    //not a letter, convert
    else {
      result += character;
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
