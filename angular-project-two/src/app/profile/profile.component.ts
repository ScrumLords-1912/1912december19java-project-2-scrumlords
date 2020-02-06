import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: '<Strong>Success!</Strong> Your update request succeeded!',
},{
  type: 'danger',
  message: '<Strong>Warning!</Strong> Your update request failed',
},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
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

export class ProfileComponent implements OnInit {

  constructor(private service: UserService) { }

  user: User = this.service.loggedInUser;
  password: string;
  pass: number = 0;
  fail: number = 0;

  ngOnInit() {
  }

  updateInfo() {
    this.pass=0;
    this.fail=0;
    console.log("Hitting update button");
    this.user.password = this.password;
    
    this.service.updateProfile(this.user);
    /*
    if(this.response.status === 200) {
      this.service.loggedInUser = this.user;
      this.pass = 1;
    }
    else {
      this.fail = 1;
    }
    */
  }

  close() {
    this.pass = 1;
    this.fail = 1;
  }

}
