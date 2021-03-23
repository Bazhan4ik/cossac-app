import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';
import { Goods } from "./../../models/goods";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private service: MainService) { }

  cargo: Goods[] = [];
  searchFrom: any;
  nextButton: boolean = true;

  async search() {
    this.nextButton = false;
    if(this.searchFrom.value.searchText.length == 0 
      && !this.searchFrom.value.searchType) return;
    try {
      this.cargo = await this.service.searchCargo(this.searchFrom.value);
    } catch (err) {
      console.error(err);
    }
  }
  async getCargo() {
    try {
      this.cargo.push(...await this.service.cargo);
    } catch (err) {
      console.error(err);
    }
  }

  async ngOnInit() {
    this.searchFrom = new FormGroup({
      searchText: new FormControl(""),
      searchType: new FormControl(null)
    });
    this.getCargo();
  }

}
