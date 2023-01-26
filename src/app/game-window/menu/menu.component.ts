import { Component } from '@angular/core';
import {ButtonsService} from "../../services/buttons.service";
import {AuthService} from "../../services/auth.service";
import {SavesService} from "../../services/saves.service";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private buttonsService:ButtonsService,
              private authService: AuthService,
              private savesService: SavesService,
              private router: Router) {
  }

  public resetMap(){
    if(confirm("Voulez-vous vraiment réinitialiser le jeu ?"))
      this.buttonsService.resetMap();
  }

  public isAuth(){
    return this.authService.isAuth();
  }

  public async saveMapProgress(){
    let mapRow: string = "";

    for(let button of this.buttonsService.buttons)
      mapRow += button.number;

    this.savesService.saveMapProgress(this.authService.id, this.buttonsService.data.mapId, mapRow);
    alert("Le jeu a été enregistrée");
  }

  public isSolved(): boolean{
    return this.buttonsService.isSolved();
  }

}
