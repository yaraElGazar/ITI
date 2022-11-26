// Write a script that ask the user to

// • Enter the value of a circle’s radius in order to calculate its area as 
// shown in fig.
let rad = parseInt(prompt("Please enter the circle radius"));
let circleArea = Math.PI*rad*rad;
alert("Total area of the circle is: "+circleArea);

// • Enter another value to calculate its square root and alert the result 
// as shown in fig.
let value = parseInt(prompt("Please enter a value"));
let squareRoot = Math.sqrt(value);
alert("The square root of " + value + " is " + squareRoot);

// • Enter an angle to calculate its cos value then display the output as 
// shown in Fig.
let angle = parseInt(prompt("Please enter an angle"));
let cosAngle = (Math.cos(angle * Math.PI / 180)).toFixed(4);
alert("The cos of " + angle + " is " + cosAngle);




