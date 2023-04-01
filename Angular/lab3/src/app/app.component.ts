import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students:{}[] = [];

  getData(data:any) {
    this.students.push(data);
  }
}


