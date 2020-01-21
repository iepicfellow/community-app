import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaiseanissuePage } from './raiseanissue.page';

const routes: Routes = [
  {
    path: '',
    component: RaiseanissuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaiseanissuePageRoutingModule {}
