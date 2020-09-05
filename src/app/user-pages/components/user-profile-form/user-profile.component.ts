import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pincode: new FormControl('', Validators.required),
    facebook: new FormControl('', Validators.required),
    instagram: new FormControl('', Validators.required),
    twitter: new FormControl('', Validators.required),
    youtube: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    summary: new FormControl('', Validators.required),
    hobbies: new FormControl('', Validators.required),
    foodInterest: new FormControl('', Validators.required),
    foodChoice: new FormControl('', Validators.required),
    favouriteDishes: new FormControl('', Validators.required),
  });

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

  saveProfile() {
    const data = {
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
      mobile: this.formGroup.controls.mobile.value,
      city: this.formGroup.controls.city.value,
      state: this.formGroup.controls.state.value,
      country: this.formGroup.controls.country.value,
      pincode: this.formGroup.controls.pincode.value,
      facebook: this.formGroup.controls.facebook.value,
      instagram: this.formGroup.controls.instagram.value,
      youtube: this.formGroup.controls.youtube.value,
      twitter: this.formGroup.controls.twitter.value,
      website: this.formGroup.controls.website.value,
      summary: this.formGroup.controls.summary.value,
      hobbies: this.formGroup.controls.hobbies.value,
      foodInterest: this.formGroup.controls.foodInterest.value,
      foodChoice: this.formGroup.controls.foodChoice.value,
      favouriteDishes: this.formGroup.controls.favouriteDishes.value
    };
    console.log(data);
  }
}
