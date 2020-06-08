import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  canActivate,
} from "@angular/fire/auth-guard";
import { ProfileComponent } from "./components/profile/profile.component";
import { HomeComponent } from "./components/home/home.component";

const redirectToLogin = redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "me",
    component: ProfileComponent,
    ...canActivate(redirectToLogin),
  },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
