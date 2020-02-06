import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    'a {color:aliceblue;}',
    '#dropdown {color:aliceblue;}',
    '.nav-tabs{border-bottom:0px}',
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
