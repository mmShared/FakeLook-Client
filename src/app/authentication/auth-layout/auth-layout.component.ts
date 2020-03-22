import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  isLogin: boolean;

  ngOnInit() {
    this.isLogin = false;
  }

  navLinks = [
    {
      path: 'register',
      label: 'register view'
    },
    {
      path: 'login',
      label:'login view'
    }
  ];
  changeLinkRegister(){
    this.isLogin = false;
  }
  changeLinkLogin(){
    this.isLogin= true;
  }
}
