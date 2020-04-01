import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { users } from '../feed/Models/users.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn: boolean;
  users$ = new Subject<User[]>();
  loggedUser : {} = {};

  constructor(private http: HttpClient) { }

  isAuth(): boolean {
    var stringUserStorage = sessionStorage.getItem("storageCurrentUser");
    this.loggedUser = JSON.parse(stringUserStorage);
    if (this.loggedUser) {
      console.log(Object.keys(this.loggedUser).length)
      this.loggedIn = true
    } 
    return this.loggedIn
  }

  register(user: User){
    this.http.post('http://localhost:3000/usersRoutes/user/',user).subscribe();
  }

  getAllUsers(){
    return this.http.get<User[]>('http://localhost:3000/usersRoutes/users/').subscribe(res =>{
      this.users$.next(res);
    })
  }
}
