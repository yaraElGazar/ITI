import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { AddNewEmployeeComponent } from './Components/add-new-employee/add-new-employee.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeItemComponent } from './Components/employee-item/employee-item.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddNewEmployeeComponent,
    ErrorComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    EmployeeItemComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
