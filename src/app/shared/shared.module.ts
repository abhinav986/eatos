
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

import { EndPointURlConstants } from './constants/endPoint-url.constants';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [RecipeCardComponent],
  providers: [EndPointURlConstants],
  exports: [
    CommonModule
  ],
})
export class SharedModule { }
