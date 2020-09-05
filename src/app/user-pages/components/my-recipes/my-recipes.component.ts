import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {UserRecipesService} from '../../services/user-recipes.service';
import {SnackbarService} from '../../../LandingPages/services/snackbar.service';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})


export class MyRecipesComponent implements OnInit {

  /**
   * recipe from event emitter
   */
  @Output() recipeFormEvent = new EventEmitter<boolean>();

  constructor(private recipeService: UserRecipesService,
              public snackBar: SnackbarService,
              private router: Router,
              private route: ActivatedRoute) { }

  recipes: any  = [];
  seacrhText: any = '';
  page = 1;
  pageSize = 10;
  ngOnInit() {
    this.getRecipeList();
  }

  getRecipeList() {
    this.recipeService.getUserRecipesByUserId().subscribe((res) => {
      console.log(res);
      const data = res['data'];
      this.recipes = data;
    });
  }

  deleteRecipe(id){
    this.recipeService.deleteUserRecipeByRecipeId(id).subscribe((res) => {
      this.snackBar.openSnackBar(res['message'], 'success', 'success-snackbar');
      this.getRecipeList();
    }, (err) => {
      console.log(err);
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }

  openRecipeAddForm() {
    this.recipeFormEvent.emit(true);
  }


}
