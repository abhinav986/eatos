import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              // private endPointUrl: EndPointURlConstants
    ) { }

  baseUrl = 'http://localhost:3000/v1/';
  registerUrl = 'auth/register';
  loginUrl = 'auth/login';
  forgotPasswordUrl = 'auth/forgot-password';
  resetPasswordUrl = 'auth/reset-password';

  userProfileUrl = 'user-profile';
  blogsUrl = 'blog';
  recipesUrl = 'recipe';

  blogsByUserUrl = 'blog/user'; // + /:userId
  recipeByUserUrl = 'recipe/user'; // + /:userId

  registerUser(body) {
    return this.http.post(this.baseUrl + this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.baseUrl + this.loginUrl, body);
  }

  createUserProfile(body) {
    console.log(body);
    return this.http.post(this.baseUrl + this.userProfileUrl, body);
  }

  updateUserProfile(userId, body) {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    // body = {_id: '5f3f718c739e923784b2d09f', name: 'Amit More',
    //  password: '12345678', user_id: userId};
    return this.http.put(this.baseUrl + this.userProfileUrl + '/' + userId, body);
  }


  getAllUserProfiles() {
    return this.http.get(this.baseUrl + this.userProfileUrl);
  }

  getUserProfileByUserId(userId) {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    return this.http.get(this.baseUrl + this.userProfileUrl + '/' + userId);
  }

  deleteUserProfileByUserId(userId) {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    return this.http.delete(this.baseUrl + this.userProfileUrl + '/' + userId);
  }


}
