import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      };
    }
  }

  recipeFormEvent(event) {
    this.isRecipeForm = event;
  }

  blogFormEvent(event) {
    this.isBlogForm = event;
  }
}
