import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private userDataService: UserDataService) { }

  ngOnInit() {
  }

  verifyOTP(form: NgForm) {
    const data = {
      otp: +form.value.otp
    };
    // console.log(+form.value.otp);
    
    this.authService.validateOtp(data).subscribe(
      (res) => {
        if(res.success) {
          console.log(res.success.data.data);        
          this.userDataService.setUserData(res.success.data.data);
          this.router.navigate(['profileCompletion']);
        }
      }
    )
  }

}
