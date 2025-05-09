import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpInputPage } from './otp-input.page';

describe('OtpInputPage', () => {
  let component: OtpInputPage;
  let fixture: ComponentFixture<OtpInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
