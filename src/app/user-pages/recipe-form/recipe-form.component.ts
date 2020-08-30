import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    serveFor: new FormControl('', Validators.required),
    preparationTime: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit() {
  }

  saveRecipe() {
    const data = {
      title: this.formGroup.controls.title.value,
      description: this.formGroup.controls.description.value,
      serveFor: this.formGroup.controls.serveFor.value,
      preparationTime: this.formGroup.controls.preparationTime.value,
    };
    console.log(data);
  }
}
