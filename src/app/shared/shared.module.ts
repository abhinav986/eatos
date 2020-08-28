
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  RecipeCardComponent],
  exports: [
    CommonModule
  ],
})
export class SharedModule { }
