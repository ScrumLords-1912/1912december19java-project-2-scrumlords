import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    'header {font-family : "Trubuchet MS Bold Italic", Times, serif; color : aliceblue; padding:10px;}',
    'img {height : auto; width : 10%;}',
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.service.isLoggedIn = false;
    this.service.loggedInUser = new User(0,'','');
    this.router.navigateByUrl('/login');
  }

}
