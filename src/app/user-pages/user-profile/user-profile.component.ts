import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    agreeToTerms: new FormControl(false, Validators.required),
  });

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

  constructor() {
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.formGroup.value);
  }

  resetForm() {
    this.formGroup.reset();
  }
}
