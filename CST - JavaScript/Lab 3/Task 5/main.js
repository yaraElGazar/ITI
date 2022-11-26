// 2.1.3. Create a parent a window that opens a scrollable advertising 
// child window

let win;

function openChildWin() {
    win = open("child.html", "", "width=300,height=200")
}
openChildWin();
win.document.write("Ullamco Lorem enim mollit minim. Incididunt officia qui minim ullamco aute et id aute dolor. Dolor sint ad deserunt ullamco laborum veniam deserunt ea officia consequat excepteur reprehenderit cupidatat Lorem.Duis esse est sit pariatur officia anim elit irure aliqua ad labore. Enim incididunt qui esse deserunt non ut officia sunt laboris in sint in esse. Sint do proident elit ut fugiat eiusmod Lorem.Consequat laborum nostrud dolor ullamco eiusmod proident duis aute consequat. Elit enim dolore do aliquip incididunt aliqua incididunt elit. Fugiat commodo duis pariatur deserunt aliqua. Consectetur ut laborum est fugiat ipsum eiusmod labore. Magna commodo commodo aliquip non deserunt laborum consectetur minim duis officia aliquip eu non. Enim eu ex quis veniam irure consectetur voluptate id qui ipsum nisi eiusmod. Culpa eu excepteur occaecat Lorem occaecat aute ullamco qui.Elit officia anim laboris velit ullamco ipsum ex deserunt laborum. Excepteur enim eu cillum cillum aliqua esse reprehenderit laborum. Consequat mollit nostrud est eu laborum officia fugiat velit exercitation aliquip.");

setInterval(function() {
    win.scrollBy(0, 100);
    },500);  