import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile-form/user-profile.component';
import { UserPagesComponent } from './components/user-pages/user-pages.component';
import { UserProfileDetailsComponent } from './components/user-profile-details/user-profile-details.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { MyBlogsComponent } from './components/my-blogs/my-blogs.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
const routes: Routes = [
  {
    path: 'my-profile',
    component: UserPagesComponent
  },

  {
    path: 'my-recipes',
    component: MyRecipesComponent
  },
  {
    path: 'create-recipe',
    component: RecipeFormComponent
  },
  {
    path: 'update-recipe/:id',
    component: RecipeFormComponent
  },
  {
    path: 'my-blogs',
    component: MyBlogsComponent
  },
  {
    path: 'create-blog',
    component: BlogFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
