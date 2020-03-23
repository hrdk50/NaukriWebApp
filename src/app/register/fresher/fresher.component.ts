import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent implements OnInit {
  fresherPersonalFormGroup: FormGroup;
  fresherEducationFormGroup : FormGroup;
  constructor(private formBuilder: FormBuilder, private router : Router) {  }

  displaypersonaldata = {
    'display' : ''
  }

  displayeducationdata = {
    'display' : 'none'
  }

  ngOnInit(): void {
    this.fresherPersonalFormGroup = this.formBuilder.group({
      name : ["",Validators.required],
      emailId : ["",Validators.required],
      password : ["",Validators.required],
      mobileNumber : ["",Validators.required],
      currentLocation : ["",Validators.required],
      resume : ["",]
    });
    
    this.fresherEducationFormGroup = this.formBuilder.group({
      qualification : ["",Validators.required],
      course : ["",Validators.required],
      specialization : ["",Validators.required],
      college : ["",Validators.required],
      courseType : ["",Validators.required],
      passingYear : ["",Validators.required],
      skill : ["",Validators.required]
    })
  }

  onRegisterClick(){
    console.log(this.fresherPersonalFormGroup.value);
    alert("You enter Personal data successfully");
    this.displaypersonaldata = {
      display : 'none'
    }
  
    this.displayeducationdata = {
      display : ''
    }
  }

  onContinue(){
    console.log(this.fresherEducationFormGroup.value);
    alert("You enter Education data successfully");
  }

}
