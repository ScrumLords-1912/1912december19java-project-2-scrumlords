import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    'header {font-family : "Trubuchet MS Bold Italic", Times, serif; color : aliceblue; padding:10px;}',
    'img {height : auto; width : 10%;}',
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
