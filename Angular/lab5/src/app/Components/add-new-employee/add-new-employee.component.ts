import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
@Component({
  selector: 'app-add-new-employee',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.css']
})
export class AddNewEmployeeComponent {
  constructor(private myService:EmployeesService){}

  AddEmployee(name:any, age:any, email:any, address:any, phone:any, salary:any){
    let newStudent = {name:name, age:age, email:email, address:address, phone:phone, salary: salary};
    //Server ?? ==> inject Service ==> AddNewStudent(body)
    this.myService.AddNewEmployee(newStudent).subscribe();
  }

}

