import { Component, OnInit } from '@angular/core';
import { appUser } from 'src/app/Models/app-user';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
appUser:appUser

  constructor(private auth: AuthService) {
  auth.appUser$.subscribe(appUser =>{ this.appUser = appUser})
  }


  ngOnInit(): void {

  }

  logout() {
    this.auth.logout();
  }
}
