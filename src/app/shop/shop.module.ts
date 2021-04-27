import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { GoodsComponent } from './goods/goods.component';
import { GoodsInfoComponent } from './goods-info/goods-info.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ReactiveFormsModule,
    ShopPageRoutingModule
  ],
  declarations: [
    MenuComponent,
    ShopPage,
    GoodsComponent,
    GoodsInfoComponent
  ]
})
export class ShopPageModule {}
