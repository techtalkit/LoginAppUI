import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedin=false;
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  this.loggedin=this.loginservice.isLoggedIn();
  }
  logoutUser(){
    this.loginservice.logout();
    window.location.reload();
  }

}
