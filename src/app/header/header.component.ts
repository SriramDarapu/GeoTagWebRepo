import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private userDataService: UserDataService) { 
    this.isLoggedIn = this.userDataService.getRegisteredToken();
  }

  ngOnInit() {
  }

}
