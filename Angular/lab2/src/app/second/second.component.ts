import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  pictureNumber = 1;
  myInterval:any;

  next() {
    if(this.pictureNumber != 6) {
      this.pictureNumber++;
    }
  }

  prev() {
    if(this.pictureNumber != 1) {
      this.pictureNumber--;
    }
  }

  slide() {
    this.myInterval = setInterval(() => {
      if(this.pictureNumber != 6) {
        this.pictureNumber++;
      }else{
        this.pictureNumber = 1;
      }
    }, 500);
  }

  stop() {
    clearInterval(this.myInterval);
  }

}
