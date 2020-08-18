import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {AppsLayoutComponent} from './Layout/apps-layout/apps-layout.component';

// User Pages

import {LoginComponent} from './UserPages/login/login.component';
import {RegisterComponent} from './UserPages/register/register.component';
import {ForgotPasswordComponent} from './UserPages/forgot-password/forgot-password.component';

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
    ]
  },
  {
    path: '',
    component: AppsLayoutComponent,
    children: [

      // Applications

     // {path: 'apps/chat', component: ChatComponent, data: {extraParameter: 'applicationsMenu'}},
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
