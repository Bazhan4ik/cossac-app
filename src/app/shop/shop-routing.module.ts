import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsInfoComponent } from './goods-info/goods-info.component';

import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage
  },
  {
    path: ":id",
    component: GoodsInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
