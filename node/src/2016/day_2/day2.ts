import { readFile } from 'node:fs/promises';

let file

try {
  const filePath = new URL('./input.txt', import.meta.url);
  file = await readFile(filePath, { encoding: 'utf8' }) as string;
} catch (err: any) {
  console.error(err.message);
}

// part 1

const codes = file!.split('\n');
console.log(codes)

const keypad = [['1','2','3',],
                ['4','5','6',],
                ['7','8','9']];

// start at 5
let rowIndex = 1;
let columnIndex = 1;

let inputCode = ''

codes.forEach((code) => {

  // console.log('start')
  // console.log([rowIndex, columnIndex])

  for (const input of code) {
    console.log(input)

    // Move up on keypad, so rowIndex decreases
    if (input === 'U') {
      const newRowIndex = rowIndex - 1;
      
      // start row index is not on the upper boundary
      if (rowIndex > 0) {
        rowIndex = newRowIndex;
      }
    }

    // Move down on keypad, so rowIndex increases
    if (input === 'D') {
      const newRowIndex = rowIndex + 1;

      // start row index is not on the lower boundary
      if (rowIndex !== 2) {
        rowIndex = newRowIndex;
      }
    }

    // Move left on keypad, so column index decreases
    if (input === 'L') {
      const newColumnIndex = columnIndex - 1;

      // start column index is not on the lower boundary
      if (columnIndex > 0) {
        columnIndex = newColumnIndex;
      }
    }

    // Move right on keypad, so column index increases
    if (input === 'R') {
      const newColumnIndex = columnIndex + 1;

      // start column index is not on the upper boundary
      if (columnIndex !== 2) {
        columnIndex = newColumnIndex;
      }
    }

    console.log([rowIndex, columnIndex]);
  }
  inputCode += keypad[rowIndex][columnIndex]
})

console.log(inputCode);