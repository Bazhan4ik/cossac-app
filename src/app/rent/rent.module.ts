import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentPageRoutingModule } from './rent-routing.module';

import { RentPage } from './rent.page';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentPageRoutingModule
  ],
  declarations: [RentPage, CardComponent]
})
export class RentPageModule {}
