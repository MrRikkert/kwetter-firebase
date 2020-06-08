import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  loading = false;

  constructor(private authService: AuthService) {}

  login(): void {
    this.loading = true;
    this.authService
      .login(
        this.loginForm.get("email").value,
        this.loginForm.get("password").value
      )
      .finally(() => (this.loading = false));
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }
}
