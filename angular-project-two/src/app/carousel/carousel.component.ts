import { Component, OnInit } from '@angular/core';
import { Tarot, DECK} from '../tarot';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: ['::ng-deep .carousel-control-next-icon {transform: translate(-8em)}',
  '::ng-deep .carousel-control-prev-icon {transform: translate(8em);}'
]
})
export class CarouselComponent implements OnInit {

  constructor() { }

  deck : Tarot[] = DECK;

  ngOnInit() {
  }

}
