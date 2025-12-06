import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2017/day_1/input.txt';
const file = readTxtFile(filePath);

const numbers = file.split('').map((num) => parseInt(num));
console.log(file)

// pt 1

let total = 0;

for (let i = 0; i < numbers.length; i++) {
  
  const currentNum = numbers[i];
  let nextNum
  
  // if last value in array, assign nextNum to the first number in the array
  if (numbers.length - i === 1) {
    nextNum = numbers[0];
  } else {
    nextNum = numbers[i + 1];
  }

  if (currentNum === nextNum) {
    total += currentNum;
  }
}

console.log('Part 1:');
console.log(total);

// pt 2

let halfwayTotal = 0;

for (let i = 0; i < numbers.length; i++) {
  
  const currentNum = numbers[i];
  const halfway = numbers.length / 2;

  // checking if index of current iteration is in first half of the array
  if (i < halfway) {
    // to get the other num, add the halfway value to current num index
    const nextNumHalfway = numbers[i + halfway];

    if (currentNum === nextNumHalfway) {
      halfwayTotal += currentNum;
    }
  } else {
        // to get the other num, subtract the halfway value from current num index
        const nextNumHalfway = numbers[i - halfway];
        if (currentNum === nextNumHalfway) {
          halfwayTotal += currentNum;
        }
  }
  
}

console.log('Part 2:')
console.log(halfwayTotal)