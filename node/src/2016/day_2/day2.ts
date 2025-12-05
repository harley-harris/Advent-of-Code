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
// console.log(codes)

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
    // console.log(input)

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

    // console.log([rowIndex, columnIndex]);
  }
  inputCode += keypad[rowIndex][columnIndex]
})

console.log('Part 1:')
console.log(inputCode);

// part 2

//                       col   col   col  col   col
const bathroomKeypad = [// 0    1     2    3     4
                        [null, null,  1,  null, null], // row 0
                        [null,  2  ,  3,    4 , null], // row 1
                        [  5 ,  6  ,  7,    8 ,  9  ], // row 2
                        [null, 'A' , 'B',  'C', null], // row 3
                        [null, null, 'D', null, null]  // row 4
                        ];

// start at 5
let bathroomRowIndex = 2;
let bathroomColumnIndex = 0;

let bathroomCode = ''

codes.forEach((code) => {

  // console.log('start')
  // console.log([bathroomRowIndex, bathroomColumnIndex])

  for (const input of code) {

    // Move up on keypad, so rowIndex decreases
    if (input === 'U') {
      const newRowIndex = bathroomRowIndex - 1;

      // check the new row exists, otherwise you can't check for the next value
      if (newRowIndex >= 0) {
        const newRowValue = bathroomKeypad[newRowIndex][bathroomColumnIndex];

        // if the value in the new row is defined - not null or undefined
        if (newRowValue) {
          bathroomRowIndex = newRowIndex;
        }
      }
    }

    // Move down on keypad, so rowIndex increases
    if (input === 'D') {
      const newRowIndex = bathroomRowIndex + 1;
      
      // check the new row exists, otherwise you can't check for the next value 
      if (newRowIndex <= 4) {
        const newRowValue = bathroomKeypad[newRowIndex][bathroomColumnIndex];

        // if the value in the new row is defined - not null or undefined
        if (newRowValue) {
          bathroomRowIndex = newRowIndex;
        }
      }
    }

    // Move left on keypad, so column index decreases
    if (input === 'L') {
      const newColumnIndex = bathroomColumnIndex - 1;

      // Explicit bounds check, prevents column value being assigned to undefined
      if (newColumnIndex >= 0) {
        const newColumnValue = bathroomKeypad[bathroomRowIndex][newColumnIndex];

        // if the value in the new column is defined - not null or undefined
        if (newColumnValue) {
          bathroomColumnIndex = newColumnIndex;
        }
      }
    }

    // Move right on keypad, so column index increases
    if (input === 'R') {
      const newColumnIndex = bathroomColumnIndex + 1;

      // Explicit bounds check, prevents column value being assigned to undefined
      if (newColumnIndex <= 4) {
        const newColumnValue = bathroomKeypad[bathroomRowIndex][newColumnIndex];

        // if the value in the new column is defined - not null or undefined
        if (newColumnValue) {
          bathroomColumnIndex = newColumnIndex;
        }
      }
    }

    // console.log([bathroomRowIndex, bathroomColumnIndex]);
  }
  bathroomCode += bathroomKeypad[bathroomRowIndex][bathroomColumnIndex]
})

console.log('Part 2:')
console.log(bathroomCode);