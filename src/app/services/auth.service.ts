import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { appUser } from '../Models/app-user';
import { UserService } from './user.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;

  }

  login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }

  get appUser$(): Observable<appUser> {
    return this.user$
      .pipe(
        switchMap(user => {
          if (user) {
            return this.userService.get(user.uid);
          } else {
            return of(null)
          }
        }))
  }
}
