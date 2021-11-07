import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: any[] =[
    {route: '', name:'Home'},
    {route: '/Product', name: 'Product'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
