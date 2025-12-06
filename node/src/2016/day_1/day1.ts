import { readTxtFile } from '../../utils/readfile';

const filePath = 'src/2016/day_1/input.txt';
const file = readTxtFile(filePath);

const instructions = file!.split(',');
console.log(instructions)

// part 1 + 2
// this solution is a bit messy

// structured clone is very important otherwise pointer problem related to assigning arrays
// ??= used to set the easterBunnyBuildingCoords once and then prevent it being re-assigned as it starts undefined

const cardinalDirections = 'NESW'

let facingDirection = cardinalDirections[0]
let facingDirectionIndex = 0;
let coords = [0,0];
let easterBunnyBuildingCoords

const seenCoords = new Set();

instructions.forEach((instruction) => {
  
  const sanitisedInstruction = instruction.trim();

  const turn = sanitisedInstruction[0];
  const stepsToTake = parseInt(sanitisedInstruction.slice(1));

  console.log(turn);
  console.log(stepsToTake)

  if (turn === 'R') {
    facingDirectionIndex = (facingDirectionIndex + 1) % 4
    facingDirection = cardinalDirections[facingDirectionIndex];
  }

  if (turn === 'L') {
    facingDirectionIndex = (facingDirectionIndex + 3) % 4
    facingDirection = cardinalDirections[facingDirectionIndex];
  }

  if (facingDirection === 'N') {
    for (let i = 1; i <= stepsToTake; i++) {
      coords[1] += 1;  // Move up (increase Y)
      const key = `${coords[0]},${coords[1]}`;

      if (seenCoords.has(key)) {
        easterBunnyBuildingCoords ??= structuredClone(coords)
      }
      seenCoords.add(key);
    }
  }

  if (facingDirection === 'S') {
    for (let i = 1; i <= stepsToTake; i++) {
      coords[1] -= 1;  // Move down (decrease Y)
      const key = `${coords[0]},${coords[1]}`;

      if (seenCoords.has(key)) {
        easterBunnyBuildingCoords ??= structuredClone(coords)
      }
      seenCoords.add(key)
    }
  }

  if (facingDirection === 'E') {
    for (let i = 1; i <= stepsToTake; i++) {
      coords[0] += 1;  // Move right (increase X)
      const key = `${coords[0]},${coords[1]}`;

      if (seenCoords.has(key)) {
        easterBunnyBuildingCoords ??= structuredClone(coords)
      }
      seenCoords.add(key)
    }
  }

  if (facingDirection === 'W') {
    for (let i = 1; i <= stepsToTake; i++) {
      coords[0] -= 1;  // Move left (decrease X)
      const key = `${coords[0]},${coords[1]}`;

      if (seenCoords.has(key)) {
        easterBunnyBuildingCoords ??= structuredClone(coords)
      }
      seenCoords.add(key)
    }
  }
})

const distanceFromStart = Math.abs(coords[0]) + Math.abs(coords[1]);
const distanceFromEasterBunnyBuilding = Math.abs(easterBunnyBuildingCoords![0]) + Math.abs(easterBunnyBuildingCoords![1]);

console.log(distanceFromStart)
console.log(distanceFromEasterBunnyBuilding)