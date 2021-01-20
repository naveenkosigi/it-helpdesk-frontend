import { loginService } from './../services/loginService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {

  constructor(private test:loginService) {
  }

  ngOnInit(): void {
  }

}
