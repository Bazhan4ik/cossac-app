import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-goods-info',
  templateUrl: './goods-info.component.html',
  styleUrls: ['./goods-info.component.scss'],
})
export class GoodsInfoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MainService
  ) { }

  item: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.item = await this.service.getId(params["id"]);
      console.log(this.item);
    });
  }

}
