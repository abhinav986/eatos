import {Component, OnInit} from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SnackbarService} from '../../services/snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService,
     public snackBar: SnackbarService,
     private route: ActivatedRoute,
     private router: Router) {
  }

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };


  ngOnInit() {
  }

  submit() {
    console.log(this.formGroup.value);
    const form = this.formGroup.value;
    const body = {name: form.name, email: form.email, password: form.password };
    this.auth.login(body).subscribe((data) => {
      console.log(data);
      let jsonData = JSON.stringify(data);
      localStorage.setItem('userData', jsonData);
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }

}
