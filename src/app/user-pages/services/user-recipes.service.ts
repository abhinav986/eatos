import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserRecipesService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) {
      let userData = localStorage.getItem('userData');
      userData = JSON.parse(userData);
      this.userId = userData['user']['id'];
      this.userName = userData['user']['name'];
    }

    userId: any = '';
    userName: any = '';
    baseUrl = this.endPoint.baseUrl;
    recipesUrl = this.endPoint.recipesUrl;
    recipesUserUrl = this.endPoint.recipeByUserUrl;
    recipesFilterUrl = this.endPoint.recipeFilterUrl;
    uploadFileUrl = this.endPoint.uploadFileUrl;


    // create user recipe
    createUserRecipe(body) {
      body['user_id'] = this.userId ;
      body['user_name'] = this.userName ;
      console.log(body);
      // please add user_id
      return this.http.post(this.baseUrl + this.recipesUrl, body);
    }

    // get all recipes
    getAllRecipes() {
      return this.http.get(this.baseUrl + this.recipesUrl);
    }

    // update user recipe by recipeId
    updateUserRecipe(recipeId, body) {
      body['user_id'] = this.userId ;
      body['user_name'] = this.userName ;
      return this.http.put(this.baseUrl + this.recipesUrl + '/' + recipeId, body);
    }

    // delete user recipe by recipeID
    deleteUserRecipeByRecipeId(recipeID) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.delete(this.baseUrl + this.recipesUrl + '/' + recipeID);
    }

    // get recipe details by recipeId
    getUserRecipeById(recipeId) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get(this.baseUrl + this.recipesUrl + '/' + recipeId);
    }

    // get all recipes by userId
    getUserRecipesByUserId() {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get(this.baseUrl + this.recipesUserUrl + '/' + this.userId);
    }

    // filter recipe data by parmeerts
    filterRecipe(body) {
      // let body = {'cusine': 'indian'} or let body = {'course': 'salad'}
      return this.http.post(this.baseUrl + this.recipesFilterUrl, body);
    }

    uploadImage(form) {
      return this.http.post(this.baseUrl + this.uploadFileUrl, form);
    }
}
