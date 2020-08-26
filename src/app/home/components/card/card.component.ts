import { Component, OnInit } from '@angular/core';
import { homeItems } from '../../home.config';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  datas: any = [];
  recipes: any = [];
  blogs: any = [];
  ngOnInit() {
    this.datas = homeItems.data;
    this.blogs = homeItems.blogs;
    this.recipes = homeItems.recipes;
  }

}
