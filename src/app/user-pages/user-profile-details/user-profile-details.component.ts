import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit {

  /**
   * Status of about form
   */
  @Output() isAboutForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  editAbout() {
    this.isAboutForm.emit(true);
  }
}
