import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userFormGroup : FormGroup;
  constructor(private formBuilder: FormBuilder, private router : Router) {  }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      emailId : ["",Validators.required],
      password : ["",Validators.required]
    })
  }

  onLoginClick(){
      console.log(this.userFormGroup.value);
    //  this.router.navigateByUrl("/register");
  }

}
