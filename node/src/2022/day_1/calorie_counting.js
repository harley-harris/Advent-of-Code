const fs = require('fs');

const text_input = fs.readFileSync('real_input.txt', 'utf-8');
const contents_array = text_input.split(/\r?\n/); // split strings by newline RegEx
const int_array = contents_array.map((element) => { // convert numerical strings to ints
    return element.length != 0 ? parseInt(element) : element;
})

let elf_calories_totals = [];
let elf_calories_temp = 0;

int_array.forEach((element) => {
    if (element) { 
        elf_calories_temp += element;
    } else {
        elf_calories_totals.push(elf_calories_temp);
        elf_calories_temp = 0; 
    }
});

const most_calories_elf = Math.max(...elf_calories_totals);
console.log(most_calories_elf);


// pt. 2 

elf_calories_totals.sort((a,b) => b - a);
const sum_top_three_elves = elf_calories_totals[0] + elf_calories_totals[1] + elf_calories_totals[2];
console.log(sum_top_three_elves);

