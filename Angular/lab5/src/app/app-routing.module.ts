import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Components/employees/employees.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { AddNewEmployeeComponent } from './Components/add-new-employee/add-new-employee.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  {path:"",redirectTo:"employees", pathMatch:"full"},
  {path:"employees",component:EmployeesComponent},
  {path:"employees/:id",component:EmployeeDetailsComponent},
  {path:"add",component:AddNewEmployeeComponent},
  {path:"update/:id",component:UpdateEmployeeComponent},
  {path:"delete/:id",redirectTo:"employees", pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
