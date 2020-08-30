import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { YouTubePlayer } from '@angular/youtube-player';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, CardComponent, ProfileCardComponent, RecipesComponent, RecipeDetailsComponent],
  imports: [
    CommonModule,
  //  YouTubePlayer,
    NgbModule,
    SlickCarouselModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
