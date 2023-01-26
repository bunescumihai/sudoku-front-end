import {Component, HostListener, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sudoku-app';

  constructor(private cookieService: CookieService,
              private authService: AuthService) {

  }

  ngOnInit() {
    if(this.cookieService.get("auth")){
      this.authService.auth = true;
      this.authService.id = +this.cookieService.get("userId");
      this.authService.login = this.cookieService.get("login");
    }
  }

  public isAuth(): boolean{
    return this.authService.isAuth();
  }

  public signOut(){
    this.authService.signOut();
  }
}
