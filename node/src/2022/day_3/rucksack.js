const fs = require('fs');
const {
    CLIENT_RENEG_LIMIT
} = require('tls');

const input = fs.readFileSync('real_input.txt', 'utf-8').split(/\r?\n/);

// console.log(input);

// pt. 1

const rucksack_compartments = input.map(e => {

    const first_half_arr = e.slice(0, e.length / 2);
    const second_half_arr = e.slice(e.length / 2);

    return [first_half_arr, second_half_arr];
})

const match_letters = rucksack_compartments.map(e => {
    return matchLetter(e[0], e[1]);
});

// console.log(match_letters);

const priority_score = match_letters.map(e => {
    const letter_value = e.charCodeAt(0);
    return e.toLowerCase() === e ? letter_value - 96 : letter_value - 38;
}).reduce((acc, e) => {
    return acc += e;
}, 0);

// console.log(priority_score);


function matchLetter(first_half_arr, second_half_arr) {
    let match_letter = ''

    for (const letter of second_half_arr) {
        if (first_half_arr.includes(letter)) {
            match_letter = letter;
            return match_letter;
        }
    }
}

// pt. 2

const all_elf_groups = groupElves();

function groupElves() {
    const groups = [];
    for (let i = 0; i < input.length; i += 3) {
        groups.push(input.slice(i, i + 3));
    }
    return groups;
}
// console.log(all_elf_groups); // array of all triple arrays of elves

const matched_letter = all_elf_groups.map(elf_group => {

    const badges = freq_updater(elf_group);

    return badges;

});

const total_scores = matched_letter.map(e => {
    const letter_value = e.charCodeAt(0);
    return e.toLowerCase() === e ? letter_value - 96 : letter_value - 38;
}).reduce((acc, e) => {
    return acc += e;
}, 0);

console.log(matched_letter);
console.log(total_scores);

function freq_updater(elf_group) {

    const [elf_set1, elf_set2, elf_set3] = [new Set(elf_group[0]), new Set(elf_group[1]), new Set(elf_group[2])];

    const elf_sets = [elf_set1, elf_set2, elf_set3];

    const letter_frequencies = new Map();

    const elf1 = new Set(elf_set1);
    for (const letter of elf1) { // create freq of first elf
        letter_frequencies.set(letter, 1);
    }

    for (let i = 1; i < 3; i++) {
        for (const letter of elf_sets[i]) {
            if (letter_frequencies.get(letter) === i) {
                letter_frequencies.set(letter, letter_frequencies.get(letter) + 1);
            }
        }
    }

    let elf_badge = '';

    for (let [key, value] of letter_frequencies.entries()) {
        if (value === 3) {
            elf_badge = key;
        }
    }

    return elf_badge;

}