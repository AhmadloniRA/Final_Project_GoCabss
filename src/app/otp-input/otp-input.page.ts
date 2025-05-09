import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-otp-input',
  templateUrl: './otp-input.page.html',
  styleUrls: ['./otp-input.page.scss'],
})
export class OtpInputPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
}
