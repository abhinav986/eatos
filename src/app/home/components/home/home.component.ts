import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  datas: any = [];
  ngOnInit() {
    this.datas = [{title: 'Rolls', coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe0MBVR4lhrSJsn9J3TxzAmqarLjWXDTFB4Q&usqp=CAU', views: '1000', user: 'Ranveer Barar'},
    {title: 'Pizza', coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcY_u5v7-3EXDYeducj3Pola-dI8MHu8B6ew&usqp=CAU', views: '500', user: 'Chef Bakers'},
    {title: 'French Fries', coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuAtzKdBzFqk_KtNhq7vHPyJZPrje2PdIv9Q&usqp=CAU', views: '250', user: 'Sanjeev Kapoor'},
    {title: 'Grill Tikki', coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1dA0znBpnaThiIE-qOsFqjQckmv7l95pdYw&usqp=CAU', views: '1200', user: 'Kunal Kapoor'},
    {title: 'Samosa', coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeDKPtCBFlZyNxA07XFVguH8jzhmkSsjgqUg&usqp=CAU', views: '550', user: 'Vinnet'}]
  }

}
