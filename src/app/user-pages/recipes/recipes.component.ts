import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  /**
   * recipe from event emitter
   */
  @Output() recipeFormEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openRecipeAddForm() {
    this.recipeFormEvent.emit(true);
  }
}
