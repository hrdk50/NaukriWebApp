import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  professionalPersonalFormGroup: FormGroup;
  professionalEmploymentFormGroup: FormGroup;
  professipnalEducationFormGroup: FormGroup;
  displaypersonaldata = {
    'display':''
  }
  displayempoymentdata={
    'display':'none'
  }
  displayeducationdata = {
    'display' : 'none'
  }

  constructor(private formBuilder: FormBuilder, private router : Router) {  }

  ngOnInit(): void {
    this.professionalPersonalFormGroup = this.formBuilder.group({
      name : ["",Validators.required],
      emailId : ["",Validators.required],
      password : ["",Validators.required],
      mobileNumber : ["",Validators.required],
      yearExperience : ["",Validators.required],
      monthExperience : ["",Validators.required]
    });

    this.professionalEmploymentFormGroup=this.formBuilder.group({
      jobTitle:["",Validators.required],
      currentCompany:["",Validators.required],
      lakh:["",Validators.required],
      thousand:["",Validators.required],
      year:["",Validators.required],
      month:["",Validators.required],
      presentYear:["",Validators.required],
      presentMonth:["",Validators.required],
      currentLocation:["",Validators.required],
      noticePeriod:["",Validators.required],
      skill:["",Validators.required],
      industry:["",],
      functionalArea:["",],
      role:["",]
    });

    this.professipnalEducationFormGroup = this.formBuilder.group({
      qualification : ["",Validators.required],
      course : ["",Validators.required],
      specialization : ["",Validators.required],
      college : ["",Validators.required],
      courseType : ["",Validators.required],
      passingYear : ["",Validators.required],
    })

  }

  onRegisterClick(){
    console.log(this.professionalPersonalFormGroup.value);
    alert("You enter personal data successfully");
    this.displaypersonaldata={
      'display':'none'
    }

    this.displayempoymentdata={
      'display':''
    }

    this.displayeducationdata = {
      'display' : 'none'
    }
  }

  onContinue(){
    console.log(this.professionalEmploymentFormGroup.value);
    alert("You enter Employment data successfully");
    this.displaypersonaldata={
      'display':'none'
    }

    this.displayempoymentdata={
      'display':'none'
    }

    this.displayeducationdata = {
      'display' : ''
    }
  }

  onEducation(){
    console.log(this.professipnalEducationFormGroup.value);
  }

}
