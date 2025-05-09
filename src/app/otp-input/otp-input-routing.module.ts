import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpInputPage } from './otp-input.page';

const routes: Routes = [
  {
    path: '',
    component: OtpInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpInputPageRoutingModule {}
