import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { UserFoodConstantsService } from '../../services/user-food-constants.service';
import { UserProfileService } from '../../services/user-profile.service';
import {SnackbarService} from '../../../LandingPages/services/snackbar.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  cities: any = [];
  states: any = [];
  countries: any = [];
  foodInterests: any = [];

  @Input() profilePicUrl: any = null;
  @Output() profilePicEvent = new EventEmitter<string>();

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    city: new FormControl('None', Validators.required),
    state: new FormControl('None', Validators.required),
    country: new FormControl('None', Validators.required),
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

  constructor(
    private foodConstantSerivce: UserFoodConstantsService,
    private userProfileService: UserProfileService,
    public snackBar: SnackbarService,
    ) {
  }

  ngOnInit() {
    this.getCity();
    this.getState();
    this.getCountry();
    this.getFoodInterest();

    // Init user profile
    this.getUserProfile();
  }

  getCity() {
    this.foodConstantSerivce.getCity().subscribe((res) => {
      this.cities = res.data;
    });
  }

  getState() {
    this.foodConstantSerivce.getState().subscribe((res) => {
      this.states = res.data;
    });
  }

  getCountry() {
    this.foodConstantSerivce.getCountry().subscribe((res) => {
      this.countries = res.data;
    });
  }

  getFoodInterest() {
    this.foodConstantSerivce.getFoodInterest().subscribe((res) => {
      this.foodInterests = res.data;
    });
  }

  getUserProfile() {
    this.userProfileService.getUserProfileByUserId().subscribe((res) => {
      const data = res.data;
      this.formGroup = new FormGroup({
        name: new FormControl(data.name, Validators.required),
        email: new FormControl(data.email, [Validators.required, Validators.email]),
        mobile: new FormControl(data.mobile, Validators.required),
        city: new FormControl(data.city, Validators.required),
        state: new FormControl(data.state, Validators.required),
        country: new FormControl(data.country, Validators.required),
        pincode: new FormControl(data.pincode, Validators.required),
        facebook: new FormControl(data.facebook, Validators.required),
        instagram: new FormControl(data.instagram, Validators.required),
        twitter: new FormControl(data.twitter, Validators.required),
        youtube: new FormControl(data.youtube, Validators.required),
        website: new FormControl(data.website, Validators.required),
        summary: new FormControl(data.summary, Validators.required),
        hobbies: new FormControl(data.hobbies, Validators.required),
        foodInterest: new FormControl(data.foodInterest, Validators.required),
        foodChoice: new FormControl(data.foodChoice, Validators.required),
        favouriteDishes: new FormControl(data.favouriteDishes, Validators.required),
      });
      this.profilePicEvent.emit(data.profilePicUrl);
    });
  }

  resetForm() {
    this.formGroup.reset();
  }

  submit() {
    const body = this.formGroup.value;
    body.profilePicUrl = this.profilePicUrl;
    this.userProfileService.updateUserProfile(body).subscribe((res) => {
      this.snackBar.openSnackBar(res.message, 'success', 'success-snackbar');
    }, (err) => {
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }
}
