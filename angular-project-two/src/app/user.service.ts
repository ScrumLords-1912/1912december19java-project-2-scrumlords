import { Injectable, RootRenderer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  public isLoggedIn: boolean = false;
  public loggedInUser: User = new User(0, '', '');

  register(id:number, username: string, password: string){
    this.http.post('http://localhost:8080/project-2/login/create-account', new User(id, username, password))
    .subscribe((response)=>{
      console.log(`registerd as user ${response}`);
    });
  }

  attemptLogIn(id:number, username: string, password: string) {
    const loggingInAsUser = new User(id ,username, password)
    this.http.post('http://localhost:8080/project-2/login', loggingInAsUser /**new User(username, password)**/)
      .subscribe((response: boolean) => {
        if (response) {
          this.isLoggedIn = true;
          this.loggedInUser = loggingInAsUser;
        } else {
          this.isLoggedIn = false;
          this.loggedInUser = new User(0, "", "");
        }
      });
  }

  updateProfile(user: User) {
    this.http.post('http://localhost:8080/profile', user)
      .subscribe((response) => {
        console.log(`this is the response = ${response}`);
      });

  }

  logOUt(){
    this.isLoggedIn = false;
    this.loggedInUser = new User(0, '','');
  }

}