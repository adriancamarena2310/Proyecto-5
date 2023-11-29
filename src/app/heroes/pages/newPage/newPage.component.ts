import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newPage',
  templateUrl: './newPage.component.html'
})
export class NewPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

}
