import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AuthentificationComponent } from './authentification/authentification.component';
import {FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from "./services/auth.service";
import { GameWindowComponent } from './game-window/game-window.component';
import { MatrixComponent } from './game-window/matrix/matrix.component';
import { MenuComponent } from './game-window/menu/menu.component';
import { MatrixButtonComponent } from './game-window/matrix/matrix-button/matrix-button.component';
import { NumbersComponent } from './game-window/numbers/numbers.component';
import {ButtonsService} from "./services/buttons.service";
import { NumberButtonComponent } from './game-window/numbers/number-button/number-button.component';
import {NumberService} from "./services/number.service";
import { StartPageComponent } from './start-page/start-page.component';
import {MapRequestService} from "./services/mapRequest.service";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationComponent } from './registration/registration.component';
import { AlgorithmWindowComponent } from './algorithm-window/algorithm-window.component';
import { AlgMenuComponent } from './algorithm-window/alg-menu/alg-menu.component';
import { AlgMatrixComponent } from './algorithm-window/alg-matrix/alg-matrix.component';
import { AlgMatrixButtonComponent} from "./algorithm-window/alg-matrix/alg-matrix-button/alg-matrix-button.component";
import { CookieService} from 'ngx-cookie-service';
import {SavesService} from "./services/saves.service";
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './profile/progress/progress.component';

const appRoutes: Routes = [
  {path: 'auth', component: AuthentificationComponent},
  {path: 'game', component: GameWindowComponent},
  {path: 'game/:id', component: GameWindowComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'alg', component: AlgorithmWindowComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', component: StartPageComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    NotFoundComponent,
    GameWindowComponent,
    MatrixComponent,
    MenuComponent,
    MatrixButtonComponent,
    NumbersComponent,
    NumberButtonComponent,
    StartPageComponent,
    RegistrationComponent,
    AlgorithmWindowComponent,
    AlgMenuComponent,
    AlgMatrixComponent,
    AlgMatrixButtonComponent,
    ProfileComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthService, ButtonsService, NumberService, MapRequestService, CookieService, SavesService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
  }
}
