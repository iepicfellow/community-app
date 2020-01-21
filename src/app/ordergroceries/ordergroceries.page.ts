import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ordergroceries',
  templateUrl: './ordergroceries.page.html',
  styleUrls: ['./ordergroceries.page.scss'],
})
export class OrdergroceriesPage implements OnInit {

  public currentNumber = 0;
  public currentNumber2 = 0;
  public currentNumber3= 0;
  public currentNumber4 = 0;

  constructor(  public alertController: AlertController ) { }

  public increment() {
    this.currentNumber++;
  }

  public decrement() {
    this.currentNumber--;
  }

  public increment2() {
    this.currentNumber2++;
  }

  public decrement2() {
    this.currentNumber2--;
  }

  public increment3() {
    this.currentNumber3++;
  }

  public decrement3() {
    this.currentNumber3--;
  }

  public increment4() {
    this.currentNumber4++;
  }

  public decrement4() {
    this.currentNumber4--;
  }

  ngOnInit() {
  }

  async submit() {
    const alert = await this.alertController.create({
      message: 'Groceries Ordered',
      buttons: ['OK']
    });
    await alert.present();
  }
}
