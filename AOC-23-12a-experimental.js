//help from chatGPT
//function takes in two numbers, the number of digits for a binary number "n",  and the number of 1's in the number "k"
//it returns a list of all possible binary numbers with those conditions.
function generateBinaryNumbers(n, k) {
    let result = [];
    
    for (let i = 0; i < Math.pow(2, n); i++) {
        let binary = i.toString(2).padStart(n, '0');
        let onesCount = binary.split('').filter(bit => bit === '1').length;
        if (onesCount === k) {
            result.push(binary);
        }
    }

    return result;
}

const n = 15; // Length of the binary number
const k = 7; // Number of '1's
const binaryNumbers = generateBinaryNumbers(n, k);
console.log(binaryNumbers);
console.log(binaryNumbers.length)

