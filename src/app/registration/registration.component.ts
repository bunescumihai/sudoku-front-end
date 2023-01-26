import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  login: string;
  password: string;
  confirmPassword: string;

  loginLengthValid = true;
  passwordLengthValid = true;
  passwordsMatch = true;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  onReg(){
    this.loginLengthValid = this.login.length >= 8;
    this.passwordLengthValid = this.password.length >= 8;
    this.passwordsMatch = this.password === this.confirmPassword;
    let user = new User();
    user.login = this.login;
    user.password = this.password;
    user.userId = 0;
    if(this.loginLengthValid && this.passwordLengthValid && this.passwordsMatch){
      this.http.post<any>("http://localhost:8080/user", user).subscribe();
      this.login = "";
      this.password = "";
      this.confirmPassword = "";
      setTimeout(r => {
        this.router.navigate(["auth"]);
      }, 500)
    }
  }
}
