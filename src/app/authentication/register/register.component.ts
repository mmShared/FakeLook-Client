import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  sucsses: string;
  userTemp: User;

  registerFormGroup = new FormGroup({
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    age: new FormControl(""),
    address: new FormControl(""),
    workPlace: new FormControl(""),
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  });

  ngOnInit() {
    this.createNewUser();
    this.sucsses = '';
  }

  save(){
    if(this.registerFormGroup.valid){
      this.userTemp.FirstName = this.registerFormGroup.get('firstName').value;
      this.userTemp.LastName = this.registerFormGroup.get('lastName').value;
      this.userTemp.Age = this.registerFormGroup.get('age').value;
      this.userTemp.Address = this.registerFormGroup.get('address').value;
      this.userTemp.WorkPlace = this.registerFormGroup.get('workPlace').value;
      this.userTemp.UserName = this.registerFormGroup.get('userName').value;
      this.userTemp.Password = this.registerFormGroup.get('password').value;
      this.authService.register(this.userTemp);
      this.sucsses = 'Successfully registered !';
      this.registerFormGroup.reset();
      setTimeout(() => {
        this.router.navigate(['/auth']);
      },500);
    }
    else{
      this.sucsses = 'One Of The Fields Is Empty!';
    }
  }

  createNewUser(){
    this.userTemp = {
      FirstName:'',
      LastName:'',
      UserName:'',
      Password:'',
      Address:'',
      Age:null,
      WorkPlace:''
    }
  }
}
