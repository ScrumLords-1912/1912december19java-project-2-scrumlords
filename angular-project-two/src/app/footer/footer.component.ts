import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    'footer {color:aliceblue;position:fixed;bottom:0px;margin:0px;line-height:30px;}',
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
