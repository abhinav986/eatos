import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    contactNumber: new FormControl('', Validators.required),
    website: new FormControl('', Validators.required),
    timing: new FormControl('', Validators.required),
    priceRange: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    cousin: new FormControl('', Validators.required),
    deliveryPartner: new FormControl('', Validators.required),
    otherInfo: new FormControl('', Validators.required),
    overall: new FormControl('', Validators.required),
    ambience: new FormControl('', Validators.required),
    food: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    hygine: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  saveBlog() {
    const data = {
      title: this.formGroup.controls.title.value,
      description: this.formGroup.controls.description.value,
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
      address: this.formGroup.controls.address.value,
      city: this.formGroup.controls.city.value,
      contactNumber: this.formGroup.controls.contactNumber.value,
      website: this.formGroup.controls.website.value,
      timing: this.formGroup.controls.timing.value,
      priceRange: this.formGroup.controls.priceRange.value,
      category: this.formGroup.controls.category.value,
      cousin: this.formGroup.controls.cousin.value,
      deliveryPartner: this.formGroup.controls.deliveryPartner.value,
      otherInfo: this.formGroup.controls.otherInfo.value,
      overall: this.formGroup.controls.overall.value,
      ambience: this.formGroup.controls.ambience.value,
      food: this.formGroup.controls.food.value,
      service: this.formGroup.controls.service.value,
      hygine: this.formGroup.controls.hygine.value,

    };
    console.log(data);
  }
}
