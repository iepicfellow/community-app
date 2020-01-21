import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-raiseanissue',
  templateUrl: './raiseanissue.page.html',
  styleUrls: ['./raiseanissue.page.scss'],
})
export class RaiseanissuePage implements OnInit {

  constructor( public alertController: AlertController ) { }

  ngOnInit() {
  }

  async submit() {
    const alert = await this.alertController.create({
      message: 'Your request had been submitted',
      buttons: ['OK']
    });
    await alert.present();
  }

}
