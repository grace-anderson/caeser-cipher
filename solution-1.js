// each character has a corresponding converted character
// A => N
// N => A
// B => O
// P => C

const CHARACTER_CHART = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M'
  }
  
  function rot13(str) {
    //start building an empty string
    let convertedString = "";
    //loop through the input string's characters
    for (let i = 0; i < str.length; i++) { 
      const character = str[i];
      let convertedCharacter = "";
      //if the character is a letter, convert it
      if (/[a-z]/i.test(character)) {
        convertedCharacter = CHARACTER_CHART[character];
      } else {
        convertedCharacter = character;
      }
      //add the converted / not converted character to the result string
      convertedString += convertedCharacter
    } 
    //return result string
    return convertedString;
  }
  
  const result = rot13("SERR PBQR PNZC!!!");
  
  console.log(result);
  