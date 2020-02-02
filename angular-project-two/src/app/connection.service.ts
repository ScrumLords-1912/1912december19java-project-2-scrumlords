import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  userTryingToLogIn: User;
  userLoggedIn : User;

  constructor(private http: HttpClient) { }

  //login(user: {username: string, password: string}): Observable<boolean> {
  //  return this.
  //}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  //async loginValidate(user: User) : Promise<User>{
  //  return await this.http.post<User>(
  //    'http://localhost:8080/com', user).toPromise();
  //}

  
}
