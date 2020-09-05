import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  openBlogAddForm() {
    this.blogFormEvent.emit(true);
  }

}
