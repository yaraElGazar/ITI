// 2.1.1. Create a parent window that opens a flying child window. Hint: 
// Start by creating a parent window that opens a child window. 
// Child window should always be on top view and moves up and down 
// within boundaries of user screen.
// Parent window should contain a button that stops child window 
// movement.

        var win;
        let myInterval;
        let xx = -50;
        let yy = -50;

        function openChildWin() {
            win = open("child.html", "", "width=200,height=200")
        }

        function move() {
            let x = win.screenX;
            let y = win.screenY;

            console.log(x);
            console.log(y);


            if((x===0 && y===0) || (x===496 && y===496) || (x===448 && y===448)) {
                xx = -(xx);
                yy = -(yy);
            }

            win.moveBy(xx, yy);
            xx += 50;
            yy += 50;
            win.focus();

        }

        function moveWindow() {
            myInterval = setInterval(move, 600);
        }

        function stopWindow() {
            clearInterval( myInterval );

        }

