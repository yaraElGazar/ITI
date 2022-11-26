var message = prompt("Enter a string");
var diff = confirm("Consider difference between letter cases?");

var revMessage = message.split('').reverse().join('');

if(diff){
if(message === revMessage) {
    document.write("Palindrome!");
}else{
    document.write("Not palindrome!");
}
}else{
    if(message.toLowerCase() == revMessage.toLowerCase()) {
        document.write("Palindrome!");
    }else{
        document.write("Not palindrome!");
    } 
}


