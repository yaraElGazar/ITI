// 2.1.2. Write a script that shows a “typing message” appearing in a 
// new child window. The new window should close after few seconds of 
// displaying your message

let win;
let message = prompt("Enter a message");
let i = 0;

function openChildWin() {
    win = open("child.html", "", "width=400,height=600")
}
openChildWin();
let splittedMessage = message.split("");

setInterval(function() {
    if( i < splittedMessage.length){
    win.document.write(splittedMessage[i]);
    i++;
    if(i===splittedMessage.length){
      setTimeout (function closeTab(){
    win.close();
    },1000);  
    }
    }
}, 200)


    

