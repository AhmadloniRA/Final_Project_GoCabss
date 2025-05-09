import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login-content',
  templateUrl: './login-content.page.html',
  styleUrls: ['./login-content.page.scss'],
})
export class LoginContentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToOtp() {
    this.router.navigate(['/otp-input']);
}
}
