import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  sucsses: string;

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
    this.sucsses = '';
  }

  save(){
    if(this.registerFormGroup.valid){
      this.authService.register();
      this.sucsses = 'Successfully registered !';
    }
  }
}
