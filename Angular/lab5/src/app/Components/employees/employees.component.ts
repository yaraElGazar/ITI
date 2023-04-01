import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  constructor(private myService:EmployeesService){}
  Employees:any;
  ngOnInit(): void {
    this.myService.GetAllEmployees().subscribe({
      next:(data)=>{
        this.Employees = data;
      },
      error:(err)=>{console.log(err)}
    })
  }
  delete(id: any) {
    this.myService.DeleteEmployeeByID(id).
    subscribe({
      next:(data)=>{
      },
      error:(err)=>{console.log(err)}
    }
      
    );
    this.Employees = this.Employees.filter(e => e.id != id);
        console.log(this.Employees);
  }
}
