import { readFile } from 'node:fs/promises';

let file

try {
  const filePath = new URL('./input.txt', import.meta.url);
  file = await readFile(filePath, { encoding: 'utf8' }) as string;
} catch (err: any) {
  console.error(err.message);
}

// part 1

const giftdimensions = file!.split('\n');
let wrappingPaper = 0;

console.log(giftdimensions)

giftdimensions.forEach((gift) => {
  
  // separate the dimensions and convert to numbers
  const dimensions = gift.split('x').map((dimension) => parseInt(dimension));
  
  // sort in ascending order to get smallest sides for extra wrapping paper
  const sortedDimension = dimensions.sort((a, b) => a - b);
  const extraWrappingPaper = sortedDimension[0] * sortedDimension[1]


  const length = dimensions[0];
  const width = dimensions[1];
  const height = dimensions[2];

  const surfaceArea = (2 * length * width) + (2 * width * height) + (2 * height * length);
  wrappingPaper += surfaceArea + extraWrappingPaper
})

console.log(wrappingPaper)

// part 2
