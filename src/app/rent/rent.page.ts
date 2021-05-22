import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/models/goods';
import { MainService } from '../main.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.page.html',
  styleUrls: ['./rent.page.scss'],
})
export class RentPage implements OnInit {

  constructor(private service: MainService) { }

  cargo: Goods[] = [];

  async updateCargo(): Promise<void> {
    this.cargo = await this.service.getRent();
    console.log(this.cargo)
  }

  ngOnInit() {
    this.updateCargo();
  }

}
