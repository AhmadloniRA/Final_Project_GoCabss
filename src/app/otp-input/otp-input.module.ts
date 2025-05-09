import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpInputPageRoutingModule } from './otp-input-routing.module';

import { OtpInputPage } from './otp-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpInputPageRoutingModule
  ],
  declarations: [OtpInputPage]
})
export class OtpInputPageModule {}
