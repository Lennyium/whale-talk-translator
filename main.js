/**
 * Whale Talk Translator
 * Translates a given string into "whale talk" by extracting and duplicating specific vowels.
 * For example: "turpentine and turtles" becomes "UUEEIEEAUUEE"
 */

function whaleTalkTranslator(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (vowels.includes(currentChar)) {
      // Double 'e' and 'u', otherwise single
      if (currentChar === 'e' || currentChar === 'u') {
        resultArray.push(currentChar, currentChar);
      } else {
        resultArray.push(currentChar);
      }
    }
  }

  return resultArray.join('').toUpperCase();
}

// Example usage:
const input = "turpentine and turtles";
const whaleSpeak = whaleTalkTranslator(input);

console.log(`Input: ${input}`);
console.log(`Whale Talk: ${whaleSpeak}`);
