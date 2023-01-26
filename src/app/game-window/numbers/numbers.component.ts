import {Component, OnInit} from '@angular/core';
import {ButtonsService} from "../../services/buttons.service";
import {NumberService} from "../../services/number.service";

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit{

  numbers: any[];
  constructor(private buttonsService:ButtonsService, private numberService: NumberService) {

  }

  ngOnInit() {
    this.numbers = this.numberService.numbers;
  }

}
