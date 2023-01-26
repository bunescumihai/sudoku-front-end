import { Component, OnInit } from '@angular/core';
import {ButtonsService} from "../../services/buttons.service";
import {BacktrackingAlgService} from "../../services/backtrackingAlg.service";

@Component({
  selector: 'app-alg-matrix',
  templateUrl: './alg-matrix.component.html',
  styleUrls: ['./alg-matrix.component.css']
})

export class AlgMatrixComponent implements OnInit{

  buttons: any[];
  constructor(private buttonsService: ButtonsService) {
  }

  ngOnInit() {
    this.buttons = this.buttonsService.buttons;
  }

}
