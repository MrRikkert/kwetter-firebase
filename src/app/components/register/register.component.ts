import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(
      this.registerForm.get("username").value,
      this.registerForm.get("email").value,
      this.registerForm.get("password").value
    );
  }
}
