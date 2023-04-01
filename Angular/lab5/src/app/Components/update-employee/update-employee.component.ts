import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private myService:EmployeesService, private route: ActivatedRoute){}
  ID:number;
  Employee: any;

  ngOnInit () {
    this.route.paramMap
    .subscribe(params => {
      this.ID = +params.get('id');
    })

    this.myService.GetEmployeeByID(this.ID).subscribe({
      next:(data)=>{
        this.Employee = data;
      },
      error:(err)=>{console.log(err)}
    })
  }

  UpdateEmployee(name:any, age:any, email:any, address:any, phone:any, salary:any){
    let newStudent = {name:name, age:age, email:email, address:address, phone:phone, salary: salary};
    this.myService.UpdateEmployeeByID(this.ID, newStudent).subscribe();
  }
}





