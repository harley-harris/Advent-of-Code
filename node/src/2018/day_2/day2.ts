import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2018/day_2/input.txt';
const file = readTxtFile(filePath);

const input = file.split('\n');

let numTwiceFrequency = 0;
let numThriceFrequency = 0;

input.forEach((letters) => {

  const freqMap = new Map<string, number>();

  for (const letter of letters) {

    const getCurrentLetterFreq = freqMap.get(letter);

    // if the letter has already been seen, increment it
    if (getCurrentLetterFreq) {
      freqMap.set(letter, getCurrentLetterFreq + 1)
    }

    // set letter if not been seen
    if (!freqMap.has(letter)) {
      freqMap.set(letter, 1)
    }

  }

  // convert map iterator to set for quick lookup comparisons
  const frequenciesSet = new Set(freqMap.values())

  if (frequenciesSet.has(2)) {
    numTwiceFrequency += 1;
  } 
  
  if (frequenciesSet.has(3)) {
    numThriceFrequency += 1
  }

});

const checksum = numTwiceFrequency * numThriceFrequency;
// console.log(checksum)

// pt 2

let firstSimilarLetters = '';
let secondSimilarLetters = '';
let finalString = '';
let found = false;

// loop over first set of letters
for (let i = 0; i < input.length; i ++) {

  // break for early return after values have been found
  if (found) {
    break;
  }

  const firstLetters = input[i];

  // loop over second set of letters for comparison
  for (let j = i+1; j < input.length; j++) {

    const nextLetters = input[j];
    let differences = 0;
    let matchingString = '';

    // loop over character values
    for (let k = 0; k < firstLetters.length; k++) {

    // Skip if character values are the same
    if (firstLetters[k] === nextLetters[k]) {
      matchingString += firstLetters[k];
      continue
    }

    // if character values differ, increase differences
    differences += 1;
    }

    if (differences === 1) {
      firstSimilarLetters = firstLetters;
      secondSimilarLetters = nextLetters;
      finalString = matchingString;
      found = true;
      break
    }

  }
}

console.log(firstSimilarLetters)
console.log(secondSimilarLetters)
console.log(finalString)