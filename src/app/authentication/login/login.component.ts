import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  sucsses: string;

  ngOnInit() {
    this.sucsses = '';
  }

  loginFormGroup = new FormGroup({
    userName: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  });

  login(){
    if(this.loginFormGroup.valid){
      this.sucsses = "Login successful !";
    }
  }
}
