import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayrentPageRoutingModule } from './payrent-routing.module';

import { PayrentPage } from './payrent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayrentPageRoutingModule
  ],
  declarations: [PayrentPage]
})
export class PayrentPageModule {}
