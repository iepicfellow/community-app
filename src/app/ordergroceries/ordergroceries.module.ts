import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdergroceriesPageRoutingModule } from './ordergroceries-routing.module';

import { OrdergroceriesPage } from './ordergroceries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdergroceriesPageRoutingModule
  ],
  declarations: [OrdergroceriesPage]
})
export class OrdergroceriesPageModule {}
