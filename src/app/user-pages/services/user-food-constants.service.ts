import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
import { ResponseServer } from './user-service.model';
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
     getAllFoodCategory(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>(this.baseUrl + this.foodTypeUrl);
    }

    // get all food courses eg: salad, main course, desert etc.
    getAllFoodCourses(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>(this.baseUrl + this.foodCourseUrl);
    }

    // get all food cusines eg: Indain, Italian, Thai etc
    getAllFoodCusines(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>(this.baseUrl + this.foodCusineUrl);
    }

    // get all food resturants types eg: Fine Dine, Cafe, Buffet etc
    getAllFoodResturantTypes(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>(this.baseUrl + this.foodResturantsUrl);
    }

    // todo
    getAllDeliveryPartners(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>('todo');
    }

    // todo
    getCity(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>('todo');
    }

    // todo
    getState(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>('todo');
    }

    // todo
    getCountry(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>('todo');
    }

    // todo
    getFoodInterest(): Observable<ResponseServer> {
      return this.http.get<ResponseServer>('todo');
    }
}
