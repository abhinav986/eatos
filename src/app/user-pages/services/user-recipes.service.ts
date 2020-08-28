import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserRecipesService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) { }

    baseUrl = this.endPoint.baseUrl;
    recipesUrl = this.endPoint.recipesUrl;
    recipesUserUrl = this.endPoint.recipeByUserUrl;
    recipesFilterUrl = this.endPoint.recipeFilterUrl;

    // create user recipe
    createUserRecipe(body) {
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
      // body = {_id: '5f3f718c739e923784b2d09f', title: 'Food tour', user_id: userId};
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
    getUserRecipesByUserId(userId) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get(this.baseUrl + this.recipesUserUrl + '/' + userId);
    }

    // filter recipe data by parmeerts
    filterRecipe(body) {
      // let body = {'cusine': 'indian'} or let body = {'course': 'salad'}
      return this.http.post(this.baseUrl + this.recipesFilterUrl, body);
    }
}
