import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.css']
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
    this.user.password = this.password;
    
    this.service.updateProfile(this.user)
        .subscribe((response)=>{
          console.log(`This is the response: ${response}`);
          //anything in here only happens on success
          this.service.loggedInUser = this.user;
          this.pass = 1;
        }, (error)=>{
          console.log(`Error response: ${error}`);
          //anything in here only happens on failure
          this.fail = 1;
        });
  }

}
