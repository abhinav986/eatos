import { Component, OnInit } from '@angular/core';
import { homeItems } from '../../home.config';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }
  chef: any = [];
  ngOnInit() {
    this.chef = homeItems.chef;
  }

}
