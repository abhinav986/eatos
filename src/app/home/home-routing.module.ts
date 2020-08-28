import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'top-chefs',
    component: ProfileCardComponent,
  },
  {
    path: 'recipe/:type',
    component: RecipesComponent
  },
  {
    path: 'cusines/:type',
    component: RecipesComponent
  },
  // {
  //   path: 'recipe/:filterType/:filterValue',
  //   component: RecipesComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
