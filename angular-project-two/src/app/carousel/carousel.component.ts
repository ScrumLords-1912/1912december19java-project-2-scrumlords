import { Component, OnInit } from '@angular/core';
import { Tarot, DECK} from '../tarot';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  deck : Tarot[] = DECK;

  ngOnInit() {
  }

}
