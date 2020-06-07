import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  register(username: string, email: string, password: string) {
    this.auth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => res.user.updateProfile({ displayName: username }));
  }

  login(email: string, password: string) {
    this.auth.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => console.log(res.user.displayName));
  }
}
