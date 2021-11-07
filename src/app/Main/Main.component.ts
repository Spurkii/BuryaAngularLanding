import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Data: any = [
    {
      imagesrc: '/assets/Images/Sprite.png', name: 'Sprite can',
      textinfo: 'A picture of a Sprite can'
    },
    {
      imagesrc: '/assets/Images/Sprite-Cranberry.jpg', name: 'Sprite cranberry can',
      textinfo: 'A picture of a inflated Sprite cranberry can'
    },
    {
      imagesrc: '/assets/Images/Sprite-Logo-2018.jpg', name: 'Sprite logo',
      textinfo: 'The Sprite logo in 2018'
    }
  ];
}
