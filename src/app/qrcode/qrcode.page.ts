import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage{

  qrdata : any;
  createCode : any;

  constructor(public navCtrl: NavController) {

   }

  public create(){
    this.createCode = this.qrdata;

  }

  public clear(){
    this.createCode = '';
    
  }

}
