import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import {UserPagesRoutingModule} from './user-pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile-form/user-profile.component';
import { UserPagesComponent } from './components/user-pages/user-pages.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { SearchFilterPipe} from './pipes/search-filter.pipe';
// const routes: Routes = [
//   { path: '', component: UserPagesComponent },
//   { path: 'profile', component: UserProfileComponent }
// ];


@NgModule({
  declarations: [UserProfileComponent, UserPagesComponent,
    MyRecipesComponent, RecipeFormComponent, MyBlogsComponent, BlogFormComponent, SearchFilterPipe],
  imports: [
    UserPagesRoutingModule,
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
    // RouterModule.forChild(routes),
    CommonModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgbModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class UserPagesModule { }
