import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { auth } from "firebase/app";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  register(username: string, email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => res.user.updateProfile({ displayName: username }));
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(["/me"]));
  }

  loginWithGoogle() {
    return this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this.router.navigate(["/me"]));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
