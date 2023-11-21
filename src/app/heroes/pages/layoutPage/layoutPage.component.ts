import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layoutPage',
  templateUrl: './layoutPage.component.html'
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    }, {
      label: 'añadir',
      icon: 'add',
      url: './new-hero'
    }, {
      label: 'buscar',
      icon: 'search',
      url: './search'
    }
  ]

}
