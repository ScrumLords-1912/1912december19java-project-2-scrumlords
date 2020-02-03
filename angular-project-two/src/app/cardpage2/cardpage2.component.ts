import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardpage2',
  templateUrl: './cardpage2.component.html',
  styleUrls: ['./cardpage2.component.css']
})
export class Cardpage2Component implements OnInit {
  cardList:Card[] = new Array();;
  imagenames:string[]; 


  constructor() {
    this.imagenames = ["assets/ace_of_clubs.png","assets/ace_of_diamonds.png","assets/eight_of_spades.png","assets/four_of_diamonds.png"];
    
    for(var i = 1; i <= 16; i++){
      let card = new Card();
      card.id = i;
      var rnd = Math.floor(Math.random() * 3);
      //var remainder = i % 4;
      card.imageUrl = 'assets/jack_of_hearts.png';
      card.correctImageUrl = this.imagenames[rnd];
      this.cardList.push(card);
    }

   }

  ngOnInit() {
  }

  public open(event: any, cardID: number) {
    console.log("In click");
    var reverseImage = "";
    // get the card clicked
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == cardID){
        reverseImage = 'assets/jack_of_hearts.png';
        this.cardList[i].imageUrl = this.cardList[i].correctImageUrl;
        break;
      }
    }    
    var self = this;
    window.setTimeout(function () { 
      console.log("in callback");    
      self.changeImg(reverseImage, cardID);      
      }, 1100);
  }
  
  public changeImg(reverseImage: string, cardID: number){
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == cardID){        
        this.cardList[i].imageUrl = reverseImage;
        break;
      }
    }   
  }
 

}

class Card {
  id: number;
  imageUrl: string;
  correctImageUrl: string;
}
