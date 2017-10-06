import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private userDataService: UserDataService) { 
    this.data = this.userDataService.getUserData();
  }

  ngOnInit() {
  }

}
