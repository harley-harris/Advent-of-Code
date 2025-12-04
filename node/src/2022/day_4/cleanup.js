const fs = require('fs');
const { pathToFileURL } = require('url');

const input = fs.readFileSync('real_input.txt', 'utf-8').split(/\r?\n/).map(e => {
    
    const [pair1, pair2] = e.split(",");
    const [r11, r12] = pair1.split("-").map(Number);
    const [r21, r22] = pair2.split("-").map(Number);
    return [r11, r12, r21, r22];
    
    
})

// pt. 1

console.log(input);

const fully_contains = input.reduce((acc, subarray) => {
    return acc + fullyContainsCheck(subarray);
}, 0);

// console.log(fully_contains);


function fullyContainsCheck(subarray) {

    const first_pair_first_num = subarray[0];
    const first_pair_second_num = subarray[1];
    const second_pair_first_num = subarray[2];
    const second_pair_second_num = subarray[3];

    if (first_pair_first_num >= second_pair_first_num && first_pair_second_num <= second_pair_second_num) {
        return 1;
    } else if (second_pair_first_num >= first_pair_first_num && second_pair_second_num <= first_pair_second_num) {
        return 1;
    } else {
        return 0;
    }

}

// pt. 2

const overlapping = input.reduce((acc, subarray) => {
    return acc + overlapCheck(subarray);
}, 0);

console.log(overlapping);


function overlapCheck(subarray) {

    const first_pair_first_num = subarray[0];
    const first_pair_second_num = subarray[1];
    const second_pair_first_num = subarray[2];
    const second_pair_second_num = subarray[3];

    if (first_pair_first_num >= second_pair_first_num && first_pair_first_num <= second_pair_second_num) {
        return 1;
    } else if (second_pair_first_num >= first_pair_first_num && second_pair_first_num <= first_pair_second_num) {
        return 1;
    } else {
        return 0;
    }

}
