import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{

  login:string;
  password:string;
  authError:boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }
  ngOnInit() {
    this.authError = false;
  }

  onSignIn(){
    this.authService.login = this.login;
    this.authService.password = this.password;
    this.authService.signIn();
    setTimeout(()=>{
      this.authError = !this.authService.auth;
      this.login = "";
      this.password = "";
      if(!this.authError)
        this.router.navigate(["game"]);
    }, 500);

  }
}
