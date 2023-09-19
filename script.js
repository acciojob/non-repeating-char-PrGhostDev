function firstNonRepeatedChar(str) {
 // Write your code here
  const charFrequency = {};
  for (const char of str) {
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char; 
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
