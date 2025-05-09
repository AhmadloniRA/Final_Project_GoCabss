import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginContentPageRoutingModule } from './login-content-routing.module';

import { LoginContentPage } from './login-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginContentPageRoutingModule
  ],
  declarations: [LoginContentPage]
})
export class LoginContentPageModule {}
