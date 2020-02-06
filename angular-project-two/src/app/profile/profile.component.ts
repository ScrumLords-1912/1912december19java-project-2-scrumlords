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

  alerts: Alert[];
  private user: User;
  private username: string;
  private password: string;
  private pass: number = 0;
  private fail: number = 0;
  //this.service.loggedInUser.id;

  ngOnInit() {
  }

  updateInfo() {
    console.log("Hitting update button");
    /* 
    this.service.updateProfile(user);
    if(response.status < 300) {
      JS alert to indicate success
      this.service.loggedInUser = user;
    }
    else {

    }
    */
  }

  close() {
    this.pass = 1;
    this.fail = 1;
  }

}
