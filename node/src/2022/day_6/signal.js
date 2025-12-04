const fs = require('fs');

const input = fs.readFileSync('real_input.txt', 'utf-8');

// pt. 1

const input_array = input.split("");

function findSignal(input_array) {

    let signal_start;

    for (let i = 0; i < input_array.length; i++) {
        
        const unique_signal = new Set([input_array[i], input_array[i+1], input_array[i+2], input_array[i+3]]); 
    
        if (unique_signal.size === 4) { // 4 distinct characters
            signal_start = i + 4;
            break;
        }
    }
    return signal_start;
}

// const signal_start = findSignal(input_array);
// console.log(signal_start);

// pt 2

// scaled up solution to account for 14 distinct letters, used spread operator and slice to input whole chunks of the array

function findMessage(input_array) {

    let message_start;

    for (let i = 0; i < input_array.length; i++) {
        
        const unique_signal = new Set([...input_array.slice(i,i+14)]); 
    
        if (unique_signal.size === 14) { // 4 distinct characters
            message_start = i + 14;
            break;
        }
    }

    return message_start;
}

const message_start = findMessage(input_array);
console.log(message_start);





