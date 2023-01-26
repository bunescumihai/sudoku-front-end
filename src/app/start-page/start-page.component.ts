import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent {
  constructor(private router: Router,
              private authService: AuthService) {
  }

  goToAuth(){
    this.router.navigate(['auth']);
  }

  goToReg(){
    this.router.navigate(['reg']);
  }

  goToGame(){
    this.router.navigate(['game'])
  }

  signOut(){
    this.authService.signOut();
  }

  isAuthetificated(){
    return this.authService.isAuth();
  }
}
