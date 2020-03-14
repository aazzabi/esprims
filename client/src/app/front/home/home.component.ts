import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slidesStore: [
    {
      id: 1,
      src: '../../../assets/nidhal/assets/img/bg-img/1.jpg',
      alt: 'Slider 1'
      title: 'Slider 1'
    },
    {
      id: 2,
      src: '../../../assets/nidhal/assets/img/bg-img/2.jpg',
      alt: 'Slider 2'
      title: 'Slider 2'
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
