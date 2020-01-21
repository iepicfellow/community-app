import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  async profile() {
    this.router.navigate(['/account'])

  }

}
