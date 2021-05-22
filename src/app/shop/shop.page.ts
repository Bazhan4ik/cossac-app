import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainService } from '../main.service';
import { Goods } from "./../../models/goods";
import { types } from "./../../assets/types";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  constructor(private service: MainService) { }

  types = types;
  cargo: Goods[] = [];
  searchForm: any;
  nextButton: boolean = true;

  async search(type?) {
    this.cargo = [];
    this.nextButton = false;
    if(type) {
      this.cargo.push(...await this.service.searchCargo({ searchText: "", searchType: type }));
      return;
    }
    if(this.searchForm.value.searchText.length == 0 
      && !this.searchForm.value.searchType) return;
    try {
      this.cargo.push(...await this.service.searchCargo(this.searchForm.value));
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
    this.service.time = 0;
    this.searchForm = new FormGroup({
      searchText: new FormControl(""),
      searchType: new FormControl("none")
    });
    if(this.service.what && this.service.what.length >= 1) {
      this.search(this.service.what);
      this.service.what = "";
    } else {
      this.getCargo();
    }
  }

}
