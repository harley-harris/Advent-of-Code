import { readFile } from 'node:fs/promises';

let contents

try {
  const filePath = new URL('./day1_test.txt', import.meta.url);
  contents = await readFile(filePath, { encoding: 'utf8' }) as string;
} catch (err: any) {
  console.error(err.message);
}

const dialTurns = contents?.split('\n');
const dialTurnsMap = dialTurns?.map((turn) => {
  const turnMap = new Map<string, number>()
  const direction = turn[0];
  const amount = Number(turn.slice(1));
  return turnMap.set(direction, amount);
})

const dialStart = 50;
let dialCount = dialStart;
const dialsReset = 100;
let zeroDials = 0

dialTurnsMap?.forEach((turn) => {
  if (turn.has('L')) {
    let turnValue = turn.get('L');
    if (turn.get('L') >= 100) {
      turnValue = turn.get('L') % 100
    }
    const dialRotation = dialCount - turnValue;
    if (dialRotation < 0) {
      dialCount = dialsReset + dialRotation;
    } else {
      dialCount = dialRotation;
    }
  } else {
    let turnValue = turn.get('R')
    if (turn.get('R') >= 100) {
      turnValue = turn.get('R') % 100
    }
    const dialRotation = dialCount + turnValue;
    if (dialRotation >= dialsReset) {
      dialCount = dialRotation - dialsReset;
    } else {
      dialCount = dialRotation;
    }
  }
  if (dialCount === 0) {
    zeroDials += 1;
  }
})

console.log(zeroDials)

