import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EndPointURlConstants} from '../../shared/constants/endPoint-url.constants';
@Injectable({
  providedIn: 'root'
})
export class UserBlogsService {

  constructor(private http: HttpClient, private endPoint: EndPointURlConstants
    ) { }

    baseUrl = this.endPoint.baseUrl;
    blogsUrl = this.endPoint.blogsUrl;
    blogsUserUrl = this.endPoint.blogsByUserUrl;

     // create user blog
     createUserBlog(body) {
      console.log(body);
      // please add user_id
      return this.http.post(this.baseUrl + this.blogsUrl, body);
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
    getUserBlogByBlogId(blogId) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get(this.baseUrl + this.blogsUrl + '/' + blogId);
    }

    // get all blogs by userId
    getUserBlogseByUserId(userId) {
      // userId = '5f3ea1b8bd61ba2320e5ab51';
      return this.http.get(this.baseUrl + this.blogsUserUrl + '/' + userId);
    }


}
