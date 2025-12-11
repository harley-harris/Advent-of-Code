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

console.log(total)