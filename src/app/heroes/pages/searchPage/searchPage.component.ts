import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchPage',
  templateUrl: './searchPage.component.html'
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public searchInput = new FormControl('');

}
