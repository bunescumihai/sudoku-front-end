import { Component, OnInit } from '@angular/core';
import {ButtonsService} from "../../services/buttons.service";

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})

export class MatrixComponent implements OnInit{

  buttons: any[];
  constructor(private buttonsService: ButtonsService) {
  }

  ngOnInit() {
    this.buttons = this.buttonsService.buttons;
  }

}
