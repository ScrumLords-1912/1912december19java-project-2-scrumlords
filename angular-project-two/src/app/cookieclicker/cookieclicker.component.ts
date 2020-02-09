import { Component, OnInit } from '@angular/core';
import { Cookie } from '../cookie';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-cookieclicker',
  templateUrl: './cookieclicker.component.html',
  styles: []
})
export class CookieclickerComponent implements OnInit {

  public cookieInfo: Cookie;
  public clickingPower: number;
  constructor(private conn: ConnectionService) { }

  ngOnInit() {
    this.conn.getCookie().subscribe((data)=>{
      this.cookieInfo = data;
    });
    this.clickingPower = 1;//NEED LOGIC TO EXTRACT IT FROM COOKIEINFO
  }

  addClick() {
    console.log("TEST");
    console.log(this.cookieInfo);
  }

}
