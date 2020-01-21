import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayrentPage } from './payrent.page';

const routes: Routes = [
  {
    path: '',
    component: PayrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayrentPageRoutingModule {}
