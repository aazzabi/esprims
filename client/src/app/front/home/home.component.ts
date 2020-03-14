import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
