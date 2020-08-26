import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  datas: any = [];
  recipes: any = [];
  blogs: any = [];
  ngOnInit() {
    this.blogs = [{title: 'Rolls', coverImage: '../../../../assets/images/food/food1.jpg', views: '1000', user: 'Ranveer Barar'},
    {title: 'Pizza', coverImage: '../../../../assets/images/food/food2.jpg', views: '500', user: 'Chef Bakers'},
    {title: 'French Fries', coverImage: '../../../../assets/images/food/food3.jpg', views: '250', user: 'Sanjeev Kapoor'},
    {title: 'Grill Tikki', coverImage: '../../../../assets/images/food/food4.jpg', views: '1200', user: 'Kunal Kapoor'},
    {title: 'Samosa', coverImage: '../../../../assets/images/food/food5.jpg', views: '550', user: 'Vinnet'},
    {title: 'Cake', coverImage: '../../../../assets/images/food/food6.jpg', views: '550', user: 'Vinnet'}];

    this.recipes = [{title: 'Rolls', coverImage: '../../../../assets/images/food/food6.jpg', views: '1000', user: 'Ranveer Barar'},
    {title: 'Pizza', coverImage: '../../../../assets/images/food/food7.jpg', views: '500', user: 'Chef Bakers'},
    {title: 'French Fries', coverImage: '../../../../assets/images/food/food8.jpg', views: '250', user: 'Sanjeev Kapoor'},
    {title: 'Grill Tikki', coverImage: '../../../../assets/images/food/food9.jpg', views: '1200', user: 'Kunal Kapoor'},
    {title: 'Samosa', coverImage: '../../../../assets/images/food/food10.jpg', views: '550', user: 'Vinnet'},
    {title: 'Biryani', coverImage: '../../../../assets/images/food/food2.jpg', views: '550', user: 'Vinnet'}];
  }

}
