import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseServer } from './user-service.model';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

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
    userProfileUrl = this.endPoint.userProfileUrl;

    // create user profile
    createUserProfile(body) {
      console.log(body);
      // please add user_id
      return this.http.post(this.baseUrl + this.userProfileUrl, body);
    }

    updateUserProfile(body): Observable<ResponseServer> {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      // body = {_id: '5f3f718c739e923784b2d09f', name: 'Amit More',
      //  password: '12345678', user_id: userId};
      return this.http.put<ResponseServer>(this.baseUrl + this.userProfileUrl + '/' + this.userId, body);
    }


    getAllUserProfiles() {
      return this.http.get(this.baseUrl + this.userProfileUrl);
    }

    getUserProfileByUserId(): Observable<ResponseServer> {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get<ResponseServer>(this.baseUrl + this.userProfileUrl + '/' + this.userId);
    }

    deleteUserProfileByUserId(userId) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.delete(this.baseUrl + this.userProfileUrl + '/' + userId);
    }
}
