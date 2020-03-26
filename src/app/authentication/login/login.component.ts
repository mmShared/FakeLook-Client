import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { observable, Observable, Subscription } from 'rxjs';
import { user } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  sucsses: string;
  users$ : Subscription;
  users: user[] = [];
  userTemp: user;

  ngOnInit() {
    if(!this.userTemp){
      this.createNewUser();
    }
    this.sucsses = '';
    this.users$ = this.authService.getAllUsers().subscribe(list => {
      this.users = list;
      console.log(this.users);
    });
  }

  loginFormGroup = new FormGroup({
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  });

  login(){
    debugger
    this.userTemp.UserName = this.loginFormGroup.get('userName').value;
    this.userTemp.Password = this.loginFormGroup.get('password').value; 
    if(this.loginFormGroup.valid){
      this.users.forEach(element => {
        if(this.userTemp.UserName == element.UserName && this.userTemp.Password == element.Password){
          this.sucsses = "Login successful !";
          return;
        }
        else{
          this.sucsses = 'Wrong User Name Or Password!';
        }
      }
    )}
    else{
      this.sucsses = 'Please Write User Name And Password..';
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
