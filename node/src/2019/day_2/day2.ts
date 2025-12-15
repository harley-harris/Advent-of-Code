import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2019/day_2/input.txt';
const file = readTxtFile(filePath);

const nums = file.split(',').map(num => parseInt(num));
console.log(nums)

// pt 1

const opcodeSolver = (firstIndexValue: number, secondIndexValue: number, nums: number[]): number => {

  // manual value changes requested by problem
  nums[1] = firstIndexValue;
  nums[2] = secondIndexValue;

  // iterate in jumps of 4 to process each opcode
  for (let i = 0; i <= nums.length -4; i+=4) {
    const opcodeNum = nums[i];

    const secondNumIndex = nums[i+1];
    const thirdNumIndex = nums[i+2];

    // replace the sum of the other 2 numbers at this index
    const replacementNumIndex = nums[i+3];

    const secondNum = nums[secondNumIndex];
    const thirdNum = nums[thirdNumIndex];

    if (opcodeNum === 1) {
      const sum = secondNum + thirdNum;
      
      // do the replacement
      nums[replacementNumIndex] = sum;
    }

    if (opcodeNum === 2) {
      const product = secondNum * thirdNum;

      // do the replacement
      nums[replacementNumIndex] = product;
    }

    if (opcodeNum === 99) {
      break;
    }
  }

  return nums[0];
}

// manual replacements requested by problem
const firstIndexValue = 12;
const secondIndexValue = 2;

// use structuredClone to not mutate / contaminate the array for pt2
const zeroIndexValue = opcodeSolver(firstIndexValue, secondIndexValue, structuredClone(nums));
console.log(zeroIndexValue)

// pt 2

const targetZeroIndexValue = 19690720;
let noun = 0
let verb = 0
let found = false

for (let i = 0; i <= 99; i++) {
  
  if (found) {
    break;
  }

  for (let j = 0; j <= 99; j++) {

    // clone the array to prevent array mutations by the function
    const numsClone = structuredClone(nums);

    const zeroIndexValue = opcodeSolver(i,j, numsClone);

    // found target is found, exit
    if (zeroIndexValue === targetZeroIndexValue) {
      noun = i;
      verb = j;
      found = true;
      break;
    }
  }
}

console.log(noun);
console.log(verb);

const output = 100 * noun + verb;
console.log(output);