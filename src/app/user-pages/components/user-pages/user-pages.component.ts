import { Component, OnInit } from '@angular/core';

import {UserRecipesService} from '../../services/user-recipes.service';
import {SnackbarService} from '../../../LandingPages/services/snackbar.service';
import {EndPointURlConstants} from '../../../shared/constants/endPoint-url.constants';

@Component({
  selector: 'app-user-pages',
  templateUrl: './user-pages.component.html',
  styleUrls: ['./user-pages.component.scss']
})
export class UserPagesComponent implements OnInit {

  /**
   * Check recipe edit state
   */
  isRecipeForm = false;

  /**
   * Check blog edit state
   */
  isBlogForm = false;

  /**
   * Profile picture url
   */
  url: any = '../../../assets/images/avatars/1.jpg';

  constructor(private recipeService: UserRecipesService,
              public snackBar: SnackbarService) { }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
    const formData = new FormData();
    formData.append('file', event.target.files[0] as File);
    this.recipeService.uploadImage(formData).subscribe(res => {
      this.url = res.path;
      this.snackBar.openSnackBar(res.message, 'success', 'success-snackbar');
    });

    // save image to user profile data
  }

  recipeFormEvent(event) {
    this.isRecipeForm = event;
  }

  blogFormEvent(event) {
    this.isBlogForm = event;
  }

  profilePicEvent(event) {
    if (event) {
      this.url = event;
    }
  }
}
