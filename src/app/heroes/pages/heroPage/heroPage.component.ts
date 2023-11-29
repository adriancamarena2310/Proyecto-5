
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-heroPage',
  templateUrl: './heroPage.component.html'
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
 ) {}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroesService.getHeroById( id )),
    )
    .subscribe( hero => {

      if ( !hero ) return this.router.navigate([ '/heroes/list' ]);
console.log(hero)
      this.hero = hero;
      return;
    })
}
}
