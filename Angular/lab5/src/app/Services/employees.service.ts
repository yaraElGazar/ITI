import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private readonly myClient:HttpClient) { }
  //DB_URL
  private readonly DB_URL = "http://localhost:3000/Employees";
  //METHODS
  GetAllEmployees(){
    return this.myClient.get(this.DB_URL);
  }
  GetEmployeeByID(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }
  AddNewEmployee(newEmployee:any){
    return this.myClient.post(this.DB_URL,newEmployee);
  }
  UpdateEmployeeByID(id:any, updatedEmployee:any){
    return this.myClient.put(this.DB_URL+"/"+id, updatedEmployee);
  }
  DeleteEmployeeByID(id:any){
    return this.myClient.delete(this.DB_URL+"/"+id);
  }
}
