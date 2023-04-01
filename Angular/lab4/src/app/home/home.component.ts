import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  reactiveForm = new FormGroup ({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    age: new FormControl(null, [Validators.min(20), Validators.max(40)]),
    email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

  })

  get NameValid(){
    return this.reactiveForm.controls["name"].value && this.reactiveForm.controls["name"].valid;
  }

  get AgeValid(){
    return this.reactiveForm.controls["age"].value && this.reactiveForm.controls["age"].valid;
  }

  get EmailValid(){
    return this.reactiveForm.controls["email"].value && this.reactiveForm.controls["email"].valid;
  }

  getData(){
    if(this.NameValid && this.AgeValid && this.EmailValid){
      console.log(this.reactiveForm.value);
    } else {
      throw new Error ('Inputs not valid')
    }
    
  }
}
