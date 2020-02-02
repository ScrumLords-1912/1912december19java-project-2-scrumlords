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

  constructor(public userService : UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.attemptLogIn(this.user.id, this.user.username, this.user.password);
    this.user = new User(0, '', '');
    
  }

}
