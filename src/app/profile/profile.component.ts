import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../userData.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:any;

  constructor(private router: Router, private authService: AuthService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.data = this.userDataService.getUserData();
    console.log(this.data);
    
  }

  onSubmit(formData: NgForm) {
    const dataObj = formData.value;
    dataObj['dob'] = this.data.dob;
    dataObj['id'] = this.data.id;
    console.log(dataObj);
    
    this.authService.completeProfile(dataObj).subscribe(
      (res) => {
        if(res.success) {
          this.userDataService.setUserData(dataObj);
          this.userDataService.setRegisteredToken(true);
          console.log(res.message);
          this.goToHome();
        }
      }
    )
  }

  goToHome(){
    this.router.navigate(['home']);
  }

}
