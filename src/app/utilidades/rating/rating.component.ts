import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating=5;
  @Input()
  ratingSelecionado=0;
  maximoRatingArr=[];

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr= Array(this.maximoRating).fill(0);
  }

}
