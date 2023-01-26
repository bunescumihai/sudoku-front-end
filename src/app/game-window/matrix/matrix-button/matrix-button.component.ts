import {Component, Input, OnInit} from '@angular/core';
import {ButtonsService} from "../../../services/buttons.service";

@Component({
  selector: 'app-matrix-button',
  templateUrl: './matrix-button.component.html',
  styleUrls: ['./matrix-button.component.css']
})
export class MatrixButtonComponent implements OnInit{
  // @ts-ignore
  @Input() button: ButtonsService.Button;
  buttons: any[];
  constructor(private buttonsService: ButtonsService) {
  }

  ngOnInit() {
    this.buttons = this.buttonsService.buttons;
  }

  select(){
    this.buttonsService.deselect(this.button);
  }

  isSelected(){
    return this.button.selected;
  }

  isActive(){
    return this.button.active;
  }

  isBad(){
    return this.button.bad;
  }

  isSolved(){
    return this.buttonsService.isSolved();
  }
}
