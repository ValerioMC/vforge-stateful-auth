import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';

export const coreRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  }, {
    path: 'success', component: SuccessComponent

  }, {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];