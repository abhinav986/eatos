import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient,
              private endPoints: EndPointURlConstants
    ) { }

  getAllRecipes() {
    return this.http.get(this.endPoints.baseUrl + this.endPoints.recipesUrl);
  }

  filterRecipe(body) {
    return this.http.post(this.endPoints.baseUrl + this.endPoints.recipeFilterUrl, body);
  }

}
