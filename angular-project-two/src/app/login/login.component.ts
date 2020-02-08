import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  user: User = new User(0, '', '');
  registering: boolean;

  display = DISPLAY_INFO[0];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.registering = false;
  }

  onSubmit() {
    if (this.registering === true && (this.user.username !== '' && this.user.password !== '')) {
      this.userService.register(this.user.id, this.user.username, this.user.password);
    } else {
      this.userService.attemptLogIn(this.user.id, this.user.username, this.user.password);
    }
    this.user = new User(0, '', '');
  }

  switchView() {
    if (this.registering === false) {
      this.display = DISPLAY_INFO[1];
      this.registering = true;
    }
    else {
      this.display = DISPLAY_INFO[0];
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

const DISPLAY_INFO: newCredentials[] = [
  { username: "Username", password: "Password", heading: "Log in", submit: "Log in", switch: "Create a new account"},
  { username: "New username", password: "New Password", heading: "Create new Account", submit: "Create Account", switch: "Log in"}
];
