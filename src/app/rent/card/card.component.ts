import { Component, Input, OnInit } from '@angular/core';
import { Goods } from 'src/models/goods';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() data: Goods;

  ngOnInit() {}

}
