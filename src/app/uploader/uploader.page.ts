import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Z_BLOCK } from 'zlib';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

    imageURL: string

  constructor(public http: HttpClient, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  fileChanged(event) {
    const files = event.target.files
    
    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', 'cbfd5e550d8130930a8c')
    this.http.post('https://upload.uploadcare.com/base/', data)
    .subscribe(event => {console.log(event)  
    })
  }

  async profile() {
    this.router.navigate(['/account'])

  }

  async submit() {
    const alert = await this.alertController.create({
      message: 'Your request had been submitted',
      buttons: ['OK']
    });
    await alert.present();
  }
}



