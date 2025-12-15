import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2020/day_1/input_test.txt';
const file = readTxtFile(filePath);

// this is basically 2 Sum

// pt 1 - manual solution

const nums = file.split('\n').map(num => parseInt(num))

const sortedNums = nums.toSorted((a,b) => a - b);
console.log(sortedNums)

const targetSum = 2020
let lowerNumFinal = 0;
let higherNumFinal = 0;

for (let i = 0; i < sortedNums.length; i++) {

  // break out of loop if we found the numbers
  if (lowerNumFinal || higherNumFinal) break;

  const lowerNum = sortedNums[i];

  const higherNumMinimum = targetSum - lowerNum;
  
  // the higher value can't be greater than the targetSum - lowerNum

  // second loop to iterate through list backwards
  for (let j = sortedNums.length - 1; j > 0; j--) {

    const higherNum = sortedNums[j];

    // skip check as higherNum is out of range
    if (higherNum > higherNumMinimum) {
      continue
    }

    if (higherNum + lowerNum === targetSum) {
      lowerNumFinal = lowerNum;
      higherNumFinal = higherNum;
    }
  }
}

console.log(lowerNumFinal);
console.log(higherNumFinal);

const multipled = lowerNumFinal * higherNumFinal;
console.log(multipled);

// pt 1 - hash-set solution

const seenNums = new Set();
let iteratedNum = 0;
let complementNum = 0;

for (const num of nums) {
  const complement = targetSum - num;

  // terminates once the paired value is found
  if (seenNums.has(complement)) {
    iteratedNum = num;
    complementNum = complement;
    break
  }

  seenNums.add(num);
}

const multiplication = iteratedNum * complementNum;
console.log(multiplication)