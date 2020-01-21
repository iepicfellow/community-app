import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdergroceriesPage } from './ordergroceries.page';

const routes: Routes = [
  {
    path: '',
    component: OrdergroceriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdergroceriesPageRoutingModule {}
