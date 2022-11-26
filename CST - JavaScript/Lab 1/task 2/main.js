var sum=0;

do {
var number = parseInt(prompt("Please enter a number:"));
if(!isFinite(number)) {
    number = 0;
    document.write("Please enter a valid number")
}else{
    sum+=number;
}

}while((number !== 0) && sum<100);
if(isFinite(sum)) {
    document.write("The sum is: "+sum);;
}else{
    document.write("Please enter a valid number <br>")
}