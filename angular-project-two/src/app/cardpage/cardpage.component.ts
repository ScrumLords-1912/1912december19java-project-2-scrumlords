import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {

  source='assets/two_of_clubs.png';
  

  constructor() { 
    
  }

  ngOnInit() {
  }

  public open(event: any) {
    console.log("In click");
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(target);
    var idAttr = target.id;
    this.source = 'assets/jack_of_hearts.png';
    var self = this;
    window.setTimeout(function () { 
      console.log("in callback");    
      self.changeImg();      
      }, 1000);
  }
  
  public changeImg(){
    this.source='assets/two_of_clubs.png';
  }
 
}
