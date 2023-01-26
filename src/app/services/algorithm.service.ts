import {ButtonsService} from "./buttons.service";
import {resolve} from "@angular/compiler-cli";

export class AlgorithmService {
  speed: number;

  constructor(private buttonsService: ButtonsService,  speed: number) {

    if(speed !== 999)
      this.speed = 1/speed;
    else this.speed = 999;

    this.alg();
  }

  public async alg(){
    let emptyCells = this.buttonsService.buttons.filter(btn => btn.number === 0);
    let numberOfEmptyCells = emptyCells.length;

    while(numberOfEmptyCells !== 0) {
      let possibleValuesInTheCell: Array<Array<number>> = [];
      numberOfEmptyCells = emptyCells.length;

      for (let i = 0; i < numberOfEmptyCells; i++) {
        possibleValuesInTheCell.push([]);
        for (let j = 1; j <= 9; j++) {
          emptyCells[i].number = j;
          if (!this.buttonsService.isBad(emptyCells[i])) {
            possibleValuesInTheCell[i].push(j);
          }
        }
        emptyCells[i].number = 0;
        emptyCells[i].possibleValues = possibleValuesInTheCell[i];
      }

      if(this.speed !== 999)
        await new Promise(resolve=>setTimeout(resolve,this.speed * 2000));

      for (let button of emptyCells)
        if (button.possibleValues.length === 1) {
          button.number = button.possibleValues[0];
          button.active = true;
          button.possibleValues.pop();
        }

      emptyCells = this.buttonsService.buttons.filter(btn => btn.number === 0);

      for (let button of emptyCells)
        button.possibleValues = [];

      if(this.speed !== 999)
        await new Promise(resolve=>setTimeout(resolve,this.speed * 1500));

    }
    this.buttonsService.badVerification();

  }

}
