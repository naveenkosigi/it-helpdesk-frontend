import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers:[NgbCarouselConfig]
})
export class ProductPageComponent implements OnInit {

  constructor(private NgbCarouselConfig:NgbCarouselConfig) {
    NgbCarouselConfig.showNavigationArrows=false;
    NgbCarouselConfig.showNavigationIndicators=false;
  }

  ngOnInit(): void {
  }

}
