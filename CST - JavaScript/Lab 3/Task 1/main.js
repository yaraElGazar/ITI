/*1.1. Fill an array (5 numerical values) from the user, Sort it in descending
and ascending orders then display the output*/

let i;
let numbers = [];
// Recieving Numbers
for (i = 0; i < 5; i++) {
    numbers[i] = parseInt(prompt("Enter number "+(i+1)+": "));
}

// Printing Numbers
console.log("%cThe entered values are: ","color: red; font-size: 10pt;");
console.log("%c"+numbers.join(' ')+" ", "font-size: 10pt;");

// Sorting numbers Descending
console.log("%cValues after being sorted descending: ","color: red; font-size: 10pt;");
console.log("%c"+numbers.sort((a,b) => b-a).join(' ')+" ", "font-size: 10pt;");

// Sorting numbers Ascending
console.log("%cValues after being sorted ascending: ","color: red; font-size: 10pt;");
console.log("%c"+numbers.sort((a,b) => a-b).join(' ')+" ", "font-size: 10pt;");



