import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AppUser } from './../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  CanActivate(): Observable<boolean> {
    return this.auth.user$.pipe(switchMap((_user) => this.userService.get(_user.uid))
      .map(AppUser => AppUser.isAdmin)
    );

  }
}
