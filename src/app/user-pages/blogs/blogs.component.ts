import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

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
