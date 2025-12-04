import { readFile } from 'node:fs/promises';

let file

try {
  const filePath = new URL('./input.txt', import.meta.url);
  file = await readFile(filePath, { encoding: 'utf8' }) as string;
} catch (err: any) {
  console.error(err.message);
}

// part 1

const brackets = file!.split('');

let floor = 0;

for (const bracket of brackets) {
  if (bracket === '(') {
    floor += 1;
  } else if (bracket === ')') {
    floor -= 1;
  }
}

console.log(floor)

// part 2

let floorPt2 = 0;
let firstBasementIndex

for (const [i, bracket] of brackets.entries()) {
  console.log(i)

  if (bracket === '(') {
    floorPt2 += 1;
  } else if (bracket === ')') {
    floorPt2 -= 1;
  }

  if (floorPt2 === -1) {
    firstBasementIndex = i + 1; // position starts from 1, so add 1 to index 
    break
  }

}

console.log(firstBasementIndex)