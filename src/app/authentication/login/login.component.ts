import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../models/user.model';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$: Subscription
  users: any[] = [];
  userName: string;
  password: string;
  currentUser: any;
  loginStatus: string;

  loginFormGroup = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthenticationService) { }


  ngOnInit() {
    this.loginStatus = '';
    this.authService.getAllUsers();
    this.users$ = this.authService.users$.subscribe(
      list => {
        this.users = list;
      });
  }


  login() {
    this.userName = this.loginFormGroup.get("userName").value;
    this.password = this.loginFormGroup.get("password").value;
    this.authService.loggedIn = this.authCheck(this.userName, this.password)
  }

  authCheck(userName: string, password: string): boolean {
    var isAuthUser = false
    for (const iterator of this.users) {
      if (iterator.UserName == userName && iterator.Password == password) {
        this.currentUser = iterator
        sessionStorage.setItem("storageCurrentUser", JSON.stringify(this.currentUser));
        isAuthUser = true
        this.loginStatus = "Login successful!";
        break;
      }
      else {
        isAuthUser = false
        this.loginStatus = "userName or password not valid, try again";

      }
    }
    return isAuthUser
  }
}
