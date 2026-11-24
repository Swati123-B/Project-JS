const word = "racecar";
const cleanWord = word.toLowerCase();
let isPalindrome = true;

for (let i = 0; i < cleanWord.length / 2; i++) {
  if (cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome ? `${word} is a palindrome` : `${word} is not a palindrome`);