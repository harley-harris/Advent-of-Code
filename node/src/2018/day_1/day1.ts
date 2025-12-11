import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2018/day_1/input.txt';
const file = readTxtFile(filePath);

const nums = file.split('\n').map((num) => parseInt(num));
console.log(nums)

// pt 1

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);

// pt 2

let currFrequencyTotal = 0;
let duplicateFrequency;
const frequencySet = new Set();
frequencySet.add(currFrequencyTotal);

let i = 0;

while (!duplicateFrequency) {

  currFrequencyTotal += nums[i];

  // once duplicate is found break out of loop
  if (frequencySet.has(currFrequencyTotal)) {
    duplicateFrequency = currFrequencyTotal;
    break
  };

  // add unique frequencies values to set
  frequencySet.add(currFrequencyTotal);

  // increase i for next iteration
  i++;

  // reached the end of the array, reset the loop
  if (i === nums.length) {
    i = 0;
  }
}

console.log(duplicateFrequency);