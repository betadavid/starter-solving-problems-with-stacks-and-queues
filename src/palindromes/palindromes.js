const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  const middle = Math.floor(sentence.length/2);
  const letterStack = new Stack();
  const firstHalf = sentence.slice(0, middle);
  for (const letter of firstHalf){
    letterStack.push(letter);
  }
  const secondHalfOfSentence = (sentence.length % 2) ? sentence.slice(middle+1):sentence.slice(middle);
  for (const letter of secondHalfOfSentence){
    const letterPopped = letterStack.pop();
    if(letter !== letterPopped){
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
