import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaiseanissuePageRoutingModule } from './raiseanissue-routing.module';

import { RaiseanissuePage } from './raiseanissue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaiseanissuePageRoutingModule
  ],
  declarations: [RaiseanissuePage]
})
export class RaiseanissuePageModule {}
