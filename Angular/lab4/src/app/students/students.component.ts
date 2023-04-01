import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
students = [{name: 'Yara', age: 23}, {name: 'Hamada', age: 25}]
}
