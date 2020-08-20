import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserPagesComponent } from './user-pages.component';
const routes: Routes = [
  { path: '', component: UserPagesComponent },
  { path: 'profile', component: UserProfileComponent }
];


@NgModule({
  declarations: [UserProfileComponent, UserPagesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPagesModule { }
