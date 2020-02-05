import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  username: string;
  role: string;
  email: string;
  companyname: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.role = localStorage.getItem('role');
    this.email = localStorage.getItem('email');
    this.companyname = localStorage.getItem('companyname');
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    localStorage.clear();
    console.log('User Logged Out..!');
  }

}
