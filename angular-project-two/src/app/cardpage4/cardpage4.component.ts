import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {DECK,Tarot, backImage} from '../tarot'; 
import {ConnectionService} from '../connection.service';

@Component({
  selector: 'app-cardpage4',
  templateUrl: './cardpage4.component.html',
  styles: []
})
export class Cardpage4Component implements OnInit {

allCards:Tarot[] = new Array();//21 Tarots
cardList:Card[] = new Array();
cols: number;
backimg: string;
previousCard: Card;

  constructor(private connection: ConnectionService) {
    //initialze allCards from DECK
    for(var i = 0; i < DECK.length; i++){
      let deckItem = DECK[i]; //curent Tarot in DECK
      let tarot = new Tarot(); //create new tarot object 
      tarot.id = deckItem.id;
      tarot.description = deckItem.description;
      tarot.name = deckItem.name;
      tarot.image = deckItem.image;
      this.allCards.push(tarot);
    }
     //initialze col and backimage
     this.cols=0;
     //this is the cover of the card.
     this.backimg =backImage.image;  
   }

  ngOnInit() {
  }

  timerFlipDown(card1: Card, card2: Card){    
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == card1.id){        
        this.cardList[i].imageUrl = this.backimg;
        break;
      }
    } 

    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == card2.id){        
        this.cardList[i].imageUrl = this.backimg;
        break;
      }
    } 
  }

  timerRemove(card: Card){
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == card.id){        
        this.cardList[i].imageUrl = "";
        break;
      }
    } 
  }

  timerRemoveBoth(card1: Card, card2: Card){
    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == card1.id){        
        this.cardList[i].imageUrl = "";
        break;
      }
    } 

    for(var i = 0; i <= this.cardList.length; i++){
      if(this.cardList[i].id  == card2.id){        
        this.cardList[i].imageUrl = "";
        break;
      }
    } 
  }

  public open(event: any, cardID: number) {
    
    var self = this;
    // get the card clicked
    for(var i = 0; i < this.cardList.length; i++){
      if(this.cardList[i].id  == cardID){

        this.connection.getOutcomeForCardClicked(cardID).then((outcome)=>{
          console.log("Received an " + outcome);
          // implication of this is when the response comes in, we divide the number brought in by 10, for example either 2.0 or 2.1
          let result: number = 0;
          let idofcard: number = 0;
          console.log("About to start flipping stuff");
          result = outcome;
          idofcard = Math.floor(result / 10); //  21/10
          var matchresult = result % 10; //20 % 10 = 0
          console.log("The ID of the card clicked is " + idofcard + ". position of card chosen is " + i);
          self.performOutcome(idofcard, matchresult, i);                 
        });
        //this.cardList[i].imageUrl = this.cardList[i].correctImageUrl;
        break;
      }
    }      
  }

  public performOutcome(idofcard: number, matchresult: number, cardposition: number){
    //DETERMINE THE CARD TO SHOW
    for(var j = 0; j < this.allCards.length; j++){
      if(this.allCards[j].id  == idofcard){
        //show the image
        this.cardList[cardposition].imageUrl = this.allCards[j].image;               
        // determine if a match occured
        if(matchresult == 0 && this.previousCard == undefined) {
          this.previousCard = this.cardList[cardposition];
        }
        else if(matchresult == 0 && this.previousCard != undefined) {
          this.timerFlipDown(this.cardList[cardposition], this.previousCard);
          this.previousCard = undefined;
        }
        else if(matchresult == 1 && this.previousCard == undefined) {
          //this should not happen
          this.timerRemove(this.cardList[cardposition]);
        }
        else if(matchresult == 1 && this.previousCard != undefined) {
          this.timerRemoveBoth(this.cardList[cardposition], this.previousCard);
          this.previousCard = undefined;
        }
        else if(matchresult == 2){
          // make the board disappear
          this.cols = 0;
          //pop up an alert saying game over
          alert("Game over");

        }
      }
    }
  }

  public fourbyfour(){
    this.cardList = [];    //empty  
    this.cols = 4;
    this.connection.sendUserPreferredBoardSize2(4);
    /*
    this.connection.sendUserPreferredBoardSize2(4).then((confirm)=>{
      console.log("Received " + confirm);
      for(var i = 1; i <= 16; i++){
        let card = new Card();
        card.id =i;
        card.imageUrl = this.backimg;
        //card.correctImageUrl =  tarots[i].image;
        //card.name = tarots[i].name;
        //card.description = tarots[i].description;
        
        this.cardList.push(card);
      }
        
    });
    */
}

public sixbysix(){
  
  var self = this;
  //this.connection.sendUserPreferredBoardSize(6);  
  
  this.connection.sendUserPreferredBoardSize(6).subscribe((response: any)=>{
    console.log("Received " + response);
    self.draw6by6grid();        
  });
  
}

public draw6by6grid(){
  console.log("In 6 by 6 grid method");
  this.cardList = [];    //empty  
  this.cols = 6;

  for(var i = 1; i <= 36; i++){
    let card = new Card();
    card.id = i;
    card.imageUrl = this.backimg;
    //card.correctImageUrl =  tarots[i].image;
    //card.name = tarots[i].name;
    //card.description = tarots[i].description;
    
    this.cardList.push(card);
  }
  console.log("Card list size is " + this.cardList.length);
}

}
