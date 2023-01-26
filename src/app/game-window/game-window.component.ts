import {Component, HostListener, OnInit} from '@angular/core';
import {MapRequestService} from "../services/mapRequest.service";
import {ButtonsService} from "../services/buttons.service";
import {Map} from "../entity/map"
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit{

  constructor(private mapService:MapRequestService,
              private buttonsService: ButtonsService,
              private mapRequestService: MapRequestService,
              private activatedRoute: ActivatedRoute
              ){}

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.params['id'])
      this.mapRequestService.getMapById(+this.activatedRoute.snapshot.params['id']).subscribe(data =>{
        console.log(data);
        this.buttonsService.addMap(data);
      });
    else
      this.mapRequestService.getRandomMap().subscribe(data => {
        console.log(data);
        this.buttonsService.addMap(data);
      });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (+event.key >= 0 && +event.key < 10 && !this.buttonsService.selectedButton.active){
      this.buttonsService.selectedButton.number = +event.key;
      this.buttonsService.badVerification();
      this.buttonsService.checkSolution();
    }
    else if (event.key === 'ArrowUp') {
      this.buttonsService.changeSelectionToTop();
    } else if (event.key === 'ArrowDown') {
      this.buttonsService.changeSelectionToDown();
    } else if (event.key === 'ArrowRight') {
      this.buttonsService.changeSelectionToRight();
    } else if (event.key === 'ArrowLeft') {
      this.buttonsService.changeSelectionToLeft();
    }
  }
}
