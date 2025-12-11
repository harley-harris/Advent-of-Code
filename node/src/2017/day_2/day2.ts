import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2017/day_2/input.txt';
const file = readTxtFile(filePath);

const numRows = file.split('\n').map(row => row.split('\t').map(num => parseInt(num)))
console.log(numRows);

// part 1

let total = 0;

numRows.forEach((row) => {

  const max = Math.max(...row);
  const min = Math.min(...row);

  const difference = max - min;
  total += difference;
})

// console.log(total)

// part 2

let divisibleTotal = 0;

numRows.forEach((row) => {
  row.forEach((num, i) => {
    console.log(num);
    console.log(`Current num index: ${i}`);

    const currentNum = row[i];

    // start loop at the next number after current number, iterate until end of list to complete loop
    for (let j = i + 1; j < row.length; j++) {
      console.log(`Current comparison num index: ${j}`);
      const loopNum = row[j];

      const max = Math.max(currentNum, loopNum);
      const min = Math.min(currentNum, loopNum);

      // if both nums are evenly divisible
      if (max % min === 0) {
        console.log('evenly divisible');
        divisibleTotal += max / min;
      } 
    }

  });
})

console.log(divisibleTotal)
