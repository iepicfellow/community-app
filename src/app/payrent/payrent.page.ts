import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-payrent',
  templateUrl: './payrent.page.html',
  styleUrls: ['./payrent.page.scss'],
})
export class PayrentPage implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  async profile() {
    this.router.navigate(['/account'])

  }

}
