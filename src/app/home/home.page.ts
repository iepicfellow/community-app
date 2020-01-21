import {Component, OnInit} from '@angular/core'
import { LoadingController, AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Observable} from 'rxjs';
import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { logging } from 'protractor';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})

export class HomePage implements OnInit {

  username: string=""
  password: string=""

  usernamer: string=""
  passwordr: string=""
  cpassword: string=""
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router 
    ) { }

  ngOnInit()  {

  }

  async login() {
    const { username, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
      this.showAlert("Logged In!", "")
      this.router.navigate(['/tabs'])
     } catch(err) {
      console.dir(err)
      if(err.code === "auth/wrong-password") {
        console.log("wrong password")
        this.showAlert("Incorrect Password", err.message)
      }
      if(err.code === "auth/user-not-found") {
        console.log("user not found")
        this.showAlert("Error user not found", err.message)
      }
    }
  }




  async register() {
    const { usernamer, passwordr, cpassword } = this
    if(passwordr !== cpassword) {
      this.showAlert("Error!", "Password don't match")
      return console.error("Password don't match")
    } 

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(usernamer + '@gmail.com', passwordr)
      console.log(res)
      this.showAlert("Success!", "welcome aboard!")
      this.router.navigate(['/tabs'])
     } catch(error) {
      console.dir(error)
      this.showAlert("Error", error.message)
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present()
  }
}