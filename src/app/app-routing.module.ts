import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {AppsLayoutComponent} from './Layout/apps-layout/apps-layout.component';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';
// User Pages

import {LoginComponent} from './LandingPages/login/login.component';
import {RegisterComponent} from './LandingPages/register/register.component';
import {ForgotPasswordComponent} from './LandingPages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

   //   {path: 'material/tooltip', component: TooltipComponent, data: {extraParameter: 'materialButtonsIndicators'}},
        {path: '', component: LoginComponent, data: {extraParameter: ''}}
  ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages
      {path: 'login', component: LoginComponent, data: {extraParameter: ''}},
      {path: 'register', component: RegisterComponent, data: {extraParameter: ''}},
      {path: 'forgot-password', component: ForgotPasswordComponent, data: {extraParameter: ''}},
      {path: 'eatos', loadChildren: './user-pages/user-pages.module#UserPagesModule'},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
