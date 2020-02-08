import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  id: number = this.service.loggedInUser.id;

  ngOnInit() {
  }

  logout() {
    this.service.isLoggedIn = false;
    this.service.logFail = false;
    this.service.loggedInUser = new User(0,'','');
    this.router.navigateByUrl('/login');
  }

}
