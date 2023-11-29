import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroesService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-searchPage',
  templateUrl: './searchPage.component.html'
})
export class SearchPageComponent implements OnInit {

  constructor( private heroesService: HeroesService ){}

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
public selectedHero? : Hero;

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions( value )
    .subscribe( heroes => this.heroes = heroes );

  }


  onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
    if ( !event.option.value ) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;


  }

  ngOnInit() {
  }


}
