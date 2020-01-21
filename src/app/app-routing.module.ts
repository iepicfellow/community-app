import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './intro/intro.module#IntroPageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'intro',loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)},
  {path: 'login', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  {path: 'hire',loadChildren: () => import('./hire/hire.module').then( m => m.HirePageModule)},
  {path: 'account', loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)},
  {path: 'raiseanissue',loadChildren: () => import('./raiseanissue/raiseanissue.module').then( m => m.RaiseanissuePageModule)},
  {path: 'ordergroceries',loadChildren: () => import('./ordergroceries/ordergroceries.module').then( m => m.OrdergroceriesPageModule)},
  {path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
