
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

=======
import { EndPointURlConstants } from './constants/endPoint-url.constants';
>>>>>>> 27e460190686408eb34fc35cb429893901e77770
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
<<<<<<< HEAD
  RecipeCardComponent],
=======
  ],
  providers: [EndPointURlConstants],
>>>>>>> 27e460190686408eb34fc35cb429893901e77770
  exports: [
    CommonModule
  ],
})
export class SharedModule { }
