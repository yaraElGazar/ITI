var i;
for(i=1; i<7; i++) {
    var message = prompt("Enter a message");
    document.write("<h" + i + ">" + message + "<h" + i + "/>");
}