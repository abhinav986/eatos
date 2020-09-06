import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { UserBlogsService } from '../../services/user-blogs.service';
import { SnackbarService } from '../../../LandingPages/services/snackbar.service';
import { Router , ActivatedRoute, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.scss']
})
export class MyBlogsComponent implements OnInit {

  /**
   * blog from event emitter
   */
  @Output() blogFormEvent = new EventEmitter<boolean>();

  constructor(private blogService: UserBlogsService,
              public snackBar: SnackbarService,
              private router: Router,
              private route: ActivatedRoute) { }

  blogs: any  = [];
  seacrhText: any = '';
  page = 1;
  pageSize = 10;

  ngOnInit() {
    this.getBlogList();
  }

  getBlogList() {
    this.blogService.getUserBlogsByUserId().subscribe((res) => {
      const data = res['data'];
      this.blogs = data;
    });
  }

  deleteBlog(id){
    this.blogService.deleteUserBlogByBlogId(id).subscribe((res) => {
      this.snackBar.openSnackBar(res['message'], 'success', 'success-snackbar');
      this.getBlogList();
    }, (err) => {
      console.log(err);
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }

  openBlogAddForm() {
    this.blogFormEvent.emit(true);
  }
}
