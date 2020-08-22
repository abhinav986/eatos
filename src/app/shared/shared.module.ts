
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EndPointURlConstants } from './constants/endPoint-url.constants';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  providers: [EndPointURlConstants],
  exports: [
    CommonModule
  ],
})
export class SharedModule { }
