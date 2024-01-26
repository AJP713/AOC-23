


// Example usage:
const str = "This is a test string { with some content";

let result =  str.match(/^[^{]*/)[0];
console.log(result); // Output: "This is a test string "