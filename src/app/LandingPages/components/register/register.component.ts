import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService} from '../../services/authentication.service';
import {SnackbarService} from '../../services/snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              public snackBar: SnackbarService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    agreeToTerms: new FormControl(false, Validators.required),
  });

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };


  ngOnInit() {
  }

  submit() {
    console.log(this.formGroup.value);
    const form = this.formGroup.value;
    if (form.password !== form.confirmPassword){
      this.snackBar.openSnackBar('Password & Confirm Password should be same!', 'error', 'warning-snackbar');
    } else {
    const body = {name: form.name, email: form.email, password: form.password };
    this.auth.registerUser(body).subscribe((data) => {
      console.log(data);
      const jsonData = JSON.stringify(data);
      localStorage.setItem('userData', jsonData);
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
      this.snackBar.openSnackBar(err.error.message, 'error', 'warning-snackbar');
    });
  }
  }

  resetForm() {
    this.formGroup.reset();
  }

}
