const fs = require('fs');

const input = fs.readFileSync("real_input.txt", 'utf-8').split(/\r?\n/).map(e => e.replace(/\s/g, ""));

// A - Rock
// B - Paper
// C - Scissors

// X - Rock
// Y - Paper
// Z - Scissors

// X - Lose
// Y - Draw
// Z - Win

// pt. 1

const player_choice_map = new Map([["X","A"],["Y","B"],["Z","C"]]);
const transformed_input = input.map(e => {
    return e[0] + player_choice_map.get(e[1]);
});

const selection_bonus = {
    A: 1,
    B: 2,
    C: 3
}

function calcWinner(opponent, player) {
    if (opponent === player) {
        return 3;
    } else if (opponent === "A") {
        return player === "B" ? 6 : 0
    } else if (opponent === "B") {
        return player === "C" ? 6 : 0
    } else if (opponent === "C") {
        return player === "A" ? 6 : 0
    }
}

const total_score = transformed_input.reduce((acc, e) => {
    return acc + calcWinner(e[0], e[1]) + selection_bonus[e[1]];
}, 0);

// console.log(total_score); --- CORRECT ANSWER

// pt 2

function rigGame(outcome) {
    if (outcome === "Y") {
        return 3
    } else if (outcome === "X") {
        return 0
    } else if (outcome === "Z") {
        return 6
    }
}

function decryptChoice(opponent, outcome) {

    if (outcome === "Y") {
        return opponent;
    } else if (outcome === "X") {
        if (opponent === "A") {
            return "C"
        } else if (opponent === "B") {
            return "A"
        } else if (opponent === "C") {
            return "B"
        }
    } else if (outcome === "Z") {
        if (opponent === "A") {
            return "B" 
        } else if (opponent === "B") {
            return "C"
        } else if (opponent === "C") {
            return "A"
        }
    }
}

const rigged_scores = input.reduce((acc, e) => {
    return acc + rigGame(e[1]) + selection_bonus[decryptChoice(e[0], e[1])];
}, 0);

// console.log(rigged_scores); --- CORRECT ANSWER




