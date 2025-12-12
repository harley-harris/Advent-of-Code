import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2019/day_1/input.txt';
const file = readTxtFile(filePath);

const masses = file.split('\n').map(mass => parseInt(mass));
console.log(masses)

// pt 1

const totalFuel = masses.reduce((acc, mass) => {
  return acc += Math.floor(mass / 3) - 2;
}, 0);

console.log(totalFuel);

// pt 2

const recursiveMasses = masses.reduce((acc, mass) => {

  let currentFuel = mass;

  while (true) {

    const nextFuel = Math.floor(currentFuel / 3) - 2;

    // mass cannot be reduced further
    if (nextFuel <= 0) {
      acc.total += acc.accumulatedMass;

      // reset the accumulatedMass total for the next fuel value in the array
      acc.accumulatedMass = 0;
      return acc;
    }

    acc.accumulatedMass += nextFuel
    currentFuel = nextFuel;
  }
}, {
  total: 0,
  accumulatedMass: 0
})

console.log(recursiveMasses.total);