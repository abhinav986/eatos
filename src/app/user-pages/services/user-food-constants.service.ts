import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserFoodConstantsService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) { }

    baseUrl = this.endPoint.baseUrl;
    foodTypeUrl = this.endPoint.foodTypeUrl;
    foodCourseUrl = this.endPoint.foodCourseUrl;
    foodCusineUrl = this.endPoint.foodCusineUrl;
    foodResturantsUrl = this.endPoint.foodResturantUrl;

     // get all food category eg: Breakfast, Lunch, Dinner etc.
     getAllFoodCategory() {
      return this.http.get(this.baseUrl + this.foodTypeUrl);
    }

    // get all food courses eg: salad, main course, desert etc.
    getAllFoodCourses() {
      return this.http.get(this.baseUrl + this.foodCourseUrl);
    }

    // get all food cusines eg: Indain, Italian, Thai etc
    getAllFoodCusines() {
      return this.http.get(this.baseUrl + this.foodCusineUrl);
    }

    // get all food resturants types eg: Fine Dine, Cafe, Buffet etc
    getAllFoodResturantTypes() {
      return this.http.get(this.baseUrl + this.foodResturantsUrl);
    }
}
