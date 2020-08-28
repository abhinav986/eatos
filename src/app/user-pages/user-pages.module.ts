import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile-form/user-profile.component';
import { UserPagesComponent } from './user-pages.component';
import { UserProfileDetailsComponent } from './user-profile-details/user-profile-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
const routes: Routes = [
  { path: '', component: UserPagesComponent },
  { path: 'profile', component: UserProfileComponent }
];


@NgModule({
  declarations: [UserProfileComponent, UserPagesComponent, UserProfileDetailsComponent, RecipesComponent, RecipeFormComponent],
  imports: [
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class UserPagesModule { }
