import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {path: 'feed', loadChildren:'../feed/feed.module#FeedPageModule'},
      {path: 'uploader', loadChildren:'../uploader/uploader.module#UploaderPageModule'},
      {path: 'payrent', loadChildren: '../payrent/payrent.module#PayrentPageModule'},
      {path: 'marketplace', loadChildren: '../marketplace/marketplace.module#MarketplacePageModule'},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
