import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name:string = '';
  age: any;
  newStudent:any = {};

  addData() {
    if (this.name.length >= 3 && this.age >=20 && this.age <=40) {
      this.newStudent = {name: this.name, age: this.age};
      this.myEvent.emit(this.newStudent);
    }
    
  }

  @Output() myEvent = new EventEmitter();


}
