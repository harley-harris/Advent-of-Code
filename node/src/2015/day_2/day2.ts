import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2015/day_2/input.txt';
const file = readTxtFile(filePath);

// part 1 + 2

const giftdimensions = file!.split('\n');
let wrappingPaper = 0;
let ribbon = 0;

console.log(giftdimensions);

giftdimensions.forEach((gift) => {
  
  // separate the dimensions and convert to numbers
  const dimensions = gift.split('x').map((dimension) => parseInt(dimension));
  
  // sort in ascending order to get smallest sides for extra wrapping paper
  const sortedDimension = dimensions.toSorted((a, b) => a - b);
  const extraWrappingPaper = sortedDimension[0] * sortedDimension[1]
  const smallestPerimeterRibbon = (sortedDimension[0] + sortedDimension[0]) + (sortedDimension[1] + sortedDimension[1]);

  const length = dimensions[0];
  const width = dimensions[1];
  const height = dimensions[2];

  const bowRibbon = length * width * height;

  const surfaceArea = (2 * length * width) + (2 * width * height) + (2 * height * length);
  
  wrappingPaper += surfaceArea + extraWrappingPaper;
  ribbon += smallestPerimeterRibbon + bowRibbon
})

console.log(wrappingPaper)
console.log(ribbon)
