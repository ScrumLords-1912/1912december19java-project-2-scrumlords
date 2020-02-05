import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
      .login-row {
      margin-top: 120px;
      margin-left: 21%;
      margin-right: 21%;
      background-color: #3b3733;
  }
  
  .bottom {
      height: 120px;
      border-top: 10px solid #3b3733;
  }
  `]
})
export class LoginComponent implements OnInit {

  user: User = new User(0, '', '');
  registering: boolean;

  info = INFO[0];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.registering = false;
  }

  onSubmit() {
    if (this.registering === true) {
      this.userService.register(this.user.id, this.user.username, this.user.password);
    } else {
      this.userService.attemptLogIn(this.user.id, this.user.username, this.user.password);
    }
    this.user = new User(0, '', '');
  }

  onRegister() {
    if (this.registering === false) {
      this.info = INFO[1];
      this.registering = true;
    }
    else {
      this.info = INFO[0];
      this.registering = false;
    }

  }

}

class newCredentials {
  username: string;
  password: string;
  heading: string;
  submit: string;
  switch: string;
}

const INFO: newCredentials[] = [
  { username: "Username", password: "Password", heading: "Log in", submit: "Log in", switch: "Create a new account"},
  { username: "New username", password: "New Password", heading: "Create new Account", submit: "Create Account", switch: "Log in"}
];
