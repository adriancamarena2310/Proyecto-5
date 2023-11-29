import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { NewPageComponent } from './pages/newPage/newPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { MaterialModule } from '../material/material.module';
import { HeroesService } from './services/hero.service';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
  exports: [],
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,

    HeroImagePipe

  ],
  providers: [],
})
export class HeroesModule { }
