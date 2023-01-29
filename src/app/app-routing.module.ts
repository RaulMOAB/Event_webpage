import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { ModifyFormComponent } from './components/modify-form/modify-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
const routes: Routes = [
  {
    path: 'login-form',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: '**',
    redirectTo: 'login-form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
