import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private userDataService: UserDataService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form.value)
    const data = form.value;
    this.authService.signInUser(data).subscribe(
      (res) => {
        // console.log(res);
        if(res.success) {
          this.userDataService.setRegisteredToken(true);
          this.router.navigate(['otpVerification']);
        }
      }
    );
  }

}
