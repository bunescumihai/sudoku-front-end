import {Component, Input, OnInit} from '@angular/core';
import {ButtonsService} from "../../../services/buttons.service";

@Component({
  selector: 'app-alg-matrix-button',
  templateUrl: './alg-matrix-button.component.html',
  styleUrls: ['./alg-matrix-button.component.css']
})
export class AlgMatrixButtonComponent implements OnInit{
  // @ts-ignore
  @Input() button: ButtonsService.Button;
  buttons: any[];

  @Input() possibleValuesInEmptyCell: any[];

  constructor(private buttonsService: ButtonsService) {}

  ngOnInit() {
    this.buttons = this.buttonsService.buttons;
  }

  select(){
    this.buttonsService.deselect(this.button);
  }

  isSelected(){
    return this.button.selected;
  }

  isBad(){
    return this.button.bad;
  }

  isActive(){
    return this.button.active;
  }

  isSolved(){
    return this.buttonsService.isSolved();
  }

  isEmpty(){
    return !this.button.number;
  }

  oneValue(): boolean{
    return this.possibleValuesInEmptyCell.length === 1;
  }
}
