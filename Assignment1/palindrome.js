

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

rl.question('Enter a word to check if it is a palindrome: ', (answer) => {
  const result = isPalindrome(answer);

  if (result) {
    console.log(`${answer} is a palindrome.`);
  } else {
    console.log(`${answer} is not a palindrome.`);
  }

  rl.close();
});
