import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginContentPage } from './login-content.page';

const routes: Routes = [
  {
    path: '',
    component: LoginContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginContentPageRoutingModule {}
