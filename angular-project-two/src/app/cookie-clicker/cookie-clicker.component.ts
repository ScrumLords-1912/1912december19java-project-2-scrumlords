import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cookie-clicker',
  templateUrl: './cookie-clicker.component.html',
  styles: []
})
export class CookieClickerComponent implements OnInit {

  constructor() {}

  score: number;

  ngOnInit() {
  }

  clicked() {
    this.score +=1;
  }

}


// var totalRowCount = $("#tblCustomers tr").length;


//Cookies appear in random locations (1-5)
//Click and get points

//TODO: Get time between clicks, adjust score based on elapsed time