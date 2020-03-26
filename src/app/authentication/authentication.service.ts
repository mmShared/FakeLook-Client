import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../feed/Models/users.model';
import { user } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(user: user){
    this.http.post('http://localhost:3000/usersRoutes/user/',user).subscribe();
  }

  getAllUsers(): Observable<user[]>{
    return this.http.get<user[]>('http://localhost:3000/usersRoutes/users/');
  }
}
