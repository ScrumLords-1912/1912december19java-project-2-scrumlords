import { Component, OnInit } from '@angular/core';
import {Tarot, DECK} from '../tarot'; 

@Component({
  selector: 'app-cardpage3',
  templateUrl: './cardpage3.component.html',
  styleUrls: ['./cardpage3.component.css']
})
export class Cardpage3Component implements OnInit {
  cardList:Card[] = new Array();
  allCards:Tarot[] = new Array();
  cols: number;
  backimage: string;


  constructor() {
    //initialze allCards from DECK
    for(var i = 0; i < DECK.length - 1; i++){
      let deckItem = DECK[i];
      let tarot = new Tarot();
      tarot.id = deckItem.id;
      tarot.description = deckItem.description;
      tarot.name = deckItem.name;
      tarot.image = deckItem.image;
      this.allCards.push(tarot);
    }
    this.cols=0;
    this.backimage = DECK[DECK.length - 1].image;

   }

  ngOnInit() {
  }

  public open(event: any, cardID: number) {
    console.log("In click");
    console.log("ID clicked is " + cardID);
    var reverseImage = "";
    // get the card clicked
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == cardID){
        reverseImage = this.backimage;
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
    console.log("ID of reverse is " + cardID);
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == cardID){        
        this.cardList[i].imageUrl = reverseImage;
        break;
      }
    }   
  }

  public fourbyfour(){
      this.cardList = [];    //empty  
      this.cols = 4;
      
    for(var i = 1; i <= 16; i++){
      let card = new Card();
      var rnd = Math.floor(Math.random() * 19);// random num betw 1 and 19
      let tarot = this.allCards[rnd];
      card.id = i;
      card.imageUrl = this.backimage;
      card.correctImageUrl = tarot.image;
      card.name = tarot.name;
      card.description = tarot.description;
      
      this.cardList.push(card);
    }
  }
 
  public fivebyfive(){
    this.cardList = [];    
    this.cols = 5;
  
  for(var i = 1; i <= 25; i++){
    let card = new Card();
      var rnd = Math.floor(Math.random() * 19);
      let tarot = this.allCards[rnd];
      card.id = i;
      card.imageUrl = this.backimage;
      card.correctImageUrl = tarot.image;
      card.name = tarot.name;
      card.description = tarot.description;
      
      this.cardList.push(card);
  }
  }

  public sixbyseven(){
    this.cardList = [];    
    this.cols = 7;
  
  for(var i = 1; i <= 42; i++){
    let card = new Card();
      var rnd = Math.floor(Math.random() * 19);
      let tarot = this.allCards[rnd];
      card.id = i;
      card.imageUrl = this.backimage;
      card.correctImageUrl = tarot.image;
      card.name = tarot.name;
      card.description = tarot.description;
      
      this.cardList.push(card);
  }
  }
}

class Card {
  id: number;
  imageUrl: string;
  correctImageUrl: string;
  name : string;
  description : string;
}
