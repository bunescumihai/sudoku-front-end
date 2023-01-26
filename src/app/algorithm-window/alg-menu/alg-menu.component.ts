import { Component } from '@angular/core';
import {BacktrackingAlgService} from "../../services/backtrackingAlg.service";
import {ButtonsService} from "../../services/buttons.service";
import {AlgorithmService} from "../../services/algorithm.service";
import { NgForm} from "@angular/forms";

@Component({
  selector: 'app-alg-menu',
  templateUrl: './alg-menu.component.html',
  styleUrls: ['./alg-menu.component.css']
})
export class AlgMenuComponent {
  isStarted: boolean = false;
  constructor(private buttonsService: ButtonsService) {
  }

  public submitForm(form : NgForm){

    let info = JSON.parse(JSON.stringify(form.value));
    console.log(info);
    let speed = 1;

    if(info['alg-type'] != '')
      this.isStarted = true;

    if(info['alg-speed']!= '')
      speed = +info['alg-speed'];

    if(info["alg-type"] === "backTracking"){
      new BacktrackingAlgService(this.buttonsService.buttons, this.buttonsService, speed);
    }else  if(info['alg-type'] === 'alt-algorithm')
      new AlgorithmService(this.buttonsService, speed);

  }
}
