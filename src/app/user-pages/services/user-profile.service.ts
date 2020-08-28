import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) { }

    baseUrl = this.endPoint.baseUrl;
    userProfileUrl = this.endPoint.userProfileUrl;

    // create user profile
    createUserProfile(body) {
      console.log(body);
      // please add user_id
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
