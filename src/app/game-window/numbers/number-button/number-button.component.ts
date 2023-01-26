import {Component, HostListener, Input} from '@angular/core';
import {ButtonsService} from "../../../services/buttons.service";

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css']
})
export class NumberButtonComponent {
  @Input() nr:number;

  constructor(private buttonsService: ButtonsService) {

  }

  changeNumber(){
    if(!this.buttonsService.selectedButton.active){
      this.buttonsService.selectedButton.number = this.nr;
      this.buttonsService.badVerification();
    }
  }

  onKeyDown(event){
    if(event.key === this.nr){
      this.changeNumber();
    }
  }

  cons(){
    console.log(9);
  }
}
