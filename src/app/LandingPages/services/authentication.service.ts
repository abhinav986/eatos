import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) { }

  baseUrl = this.endPoint.baseUrl; // 'http://localhost:3000/v1/';
  registerUrl = this.endPoint.registerUrl;  // 'auth/register';
  loginUrl = this.endPoint.loginUrl;  // 'auth/login';
  forgotPasswordUrl = this.endPoint.forgotPasswordUrl; // 'auth/forgot-password';
  resetPasswordUrl = this.endPoint.resetPasswordUrl; // 'auth/reset-password';

  userProfileUrl = this.endPoint.userProfileUrl;
  blogsUrl = this.endPoint.blogsUrl;
  recipesUrl = this.endPoint.recipesUrl;

  blogsByUserUrl = this.endPoint.blogsByUserUrl; // + /:userId
  recipeByUserUrl = this.endPoint.recipeByUserUrl; // + /:userId

  registerUser(body) {
    return this.http.post(this.baseUrl + this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.baseUrl + this.loginUrl, body);
  }



}
