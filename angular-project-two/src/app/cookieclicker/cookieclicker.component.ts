import { Component, OnInit } from '@angular/core';
import { Cookie } from '../cookie';
import { ConnectionService } from '../connection.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cookieclicker',
  templateUrl: './cookieclicker.component.html',
  styles: []
})


export class CookieclickerComponent implements OnInit {
  //Game constants
  private num: number = 3;
  public purchaseNames: string[] = ['Helping Hands', 'Overclocked Ovens', 'Potato Peelers'];
  private purchasebasecosts: number[] = [20, 100, 1000]; //Cost of items.
  private purchaseboosts: number[] = [1, 5, 50];

  public cookieInfo: Cookie;
  public clickingPower: number;
  public purchasecurrentcosts: number[];
  public purchaseInfo: number[];
  constructor(private conn: ConnectionService, private user: UserService) { }

  ngOnInit() {
    this.populateCookie();

  }

  addClick(): void {
    this.cookieInfo.cookies += this.clickingPower;
  }

  calculateClickingPower() : number {
    let power: number = 1;
    let i : number;
    for (i = 0; i < this.purchaseInfo.length; i++) {
      let j : number;
      for(j = 0; j < this.purchaseInfo[i]; j++) {
        power += this.purchaseboosts[i];
      }
    }
    return power;
  }

  async populateCookie() {
    this.cookieInfo = await this.conn.getCookie();
    console.log(this.cookieInfo);
    if (this.cookieInfo == null) {//Start up a new session if one doesn't exist.
      console.log("making new cookie");
      this.cookieInfo = {userId: this.user.loggedInUser.id, cookies: 0, state: "0,0,0"};
    } else {
      console.log(this.cookieInfo);
    }
    
    this.purchaseInfo = this.cookieInfo.state.split(',').map(Number);
    let i: number;
    this.purchasecurrentcosts = this.purchasebasecosts;
    for (i = 0; i < this.purchaseInfo.length; i++) {
      let j: number;
      for(j = 0; j < this.purchaseInfo[i]; j++) {
        this.purchasecurrentcosts[i] *= 2;
      }
    }
    this.clickingPower = this.calculateClickingPower();
    console.log(this.purchaseInfo);
    console.log(this.cookieInfo);
  }

  saveState(): void {
    this.cookieInfo.state = this.purchaseInfo.map(String).join(',');
    console.log(this.cookieInfo);
    this.conn.saveCookie(this.cookieInfo);
  }

  purchase0(): void {
    if (this.cookieInfo.cookies >= this.purchasecurrentcosts[0]) {
      this.cookieInfo.cookies -= this.purchasecurrentcosts[0];
      this.purchasecurrentcosts[0] *= 2;
      this.purchaseInfo[0]++;
      this.clickingPower += this.purchaseboosts[0];
    }
  }

  purchase1(): void {
    if (this.cookieInfo.cookies >= this.purchasecurrentcosts[1]) {
      this.cookieInfo.cookies -= this.purchasecurrentcosts[1];
      this.purchasecurrentcosts[1] *= 2;
      this.purchaseInfo[1]++;
      this.clickingPower += this.purchaseboosts[1];
    }
  }

  purchase2(): void {
    if (this.cookieInfo.cookies >= this.purchasecurrentcosts[2]) {
      this.cookieInfo.cookies -= this.purchasecurrentcosts[2];
      this.purchasecurrentcosts[2] *= 2;
      this.purchaseInfo[2]++;
      this.clickingPower += this.purchaseboosts[2];
    }
  }
}
