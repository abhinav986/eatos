import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
import { Observable } from 'rxjs';
import { ResponseServer } from './user-service.model';

@Injectable({
  providedIn: 'root'
})
export class UserBlogsService {
  userId: any = '';
  userName: any = '';
  baseUrl = this.endPoint.baseUrl;
  blogsUrl = this.endPoint.blogsUrl;
  blogsUserUrl = this.endPoint.blogsByUserUrl;

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants) {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    this.userId = userData['user']['id'];
    this.userName = userData['user']['name'];
  }

  uploadFileUrl = this.endPoint.uploadFileUrl;

  // create user blog
  createUserBlog(body): Observable<ResponseServer> {
    console.log(body);
    // please add user_id
    return this.http.post<ResponseServer>(this.baseUrl + this.blogsUrl, body);
  }

  // get all blogs
  getAllBlogs() {
    return this.http.get(this.baseUrl + this.blogsUrl);
  }

  // update user blog by blogId
  updateUserBlog(blogId, body) {
    // body = {_id: '5f3f718c739e923784b2d09f', title: 'Food tour', user_id: userId};
    return this.http.put(this.baseUrl + this.blogsUrl + '/' + blogId, body);
  }

  // delete user blog by blogID
  deleteUserBlogByBlogId(blogId) {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    return this.http.delete(this.baseUrl + this.blogsUrl + '/' + blogId);
  }

  // get blog details by blogId
  getUserBlogByBlogId(blogId): Observable<ResponseServer> {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    return this.http.get<ResponseServer>(this.baseUrl + this.blogsUrl + '/' + blogId);
  }

  // get all blogs by userId
  getUserBlogsByUserId() {
    // userId = '5f3ea1b8bd61ba2320e5ab51';
    return this.http.get(this.baseUrl + this.blogsUserUrl + '/' + this.userId);
  }

  uploadImage(form): Observable<ResponseServer> {
    return this.http.post<ResponseServer>(this.baseUrl + this.uploadFileUrl, form);
  }
}
