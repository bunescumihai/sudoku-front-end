import { Component } from '@angular/core';
import {MapRequestService} from "../services/mapRequest.service";
import {ButtonsService} from "../services/buttons.service";

@Component({
  selector: 'app-algorithm-window',
  templateUrl: './algorithm-window.component.html',
  styleUrls: ['./algorithm-window.component.css']
})
export class AlgorithmWindowComponent {

  constructor(private mapService:MapRequestService,
              private buttonsService: ButtonsService,
              private mapRequestService: MapRequestService
  ){
  }

  ngOnInit(): void {
    this.mapRequestService.getRandomMap().subscribe(data => {
      console.log(data);
      this.buttonsService.addMap(data);
    });
  }

}
