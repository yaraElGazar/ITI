var message = prompt("Enter a string");
var char = prompt("Enter character");
var diff = confirm("Consider difference between letter cases?");
let regex;

if(diff){
    regex =  new RegExp(char,'gi');
}else{
    regex = new RegExp(char, 'g');
}

var count = (message.match(regex)).length;
document.write("The count is: "+count);