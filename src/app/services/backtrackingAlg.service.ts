import { ButtonsService} from "./buttons.service";

export class BacktrackingAlgService{
  buttons: any[];
  emptyButtons: any[];
  solutionIsFound: boolean = false;
  speed:number = 1;

  constructor(buttons, private buttonsService: ButtonsService, speed: number) {
    this.buttons = buttons;

    if(speed !== 999)
      this.speed = 1/speed;
    else this.speed = 999;

    this.getEmptyButtons();
  }

  private getEmptyButtons(): void{
    this.emptyButtons = this.buttons.filter(button => button.number == 0);
    console.log(this.emptyButtons);
    this.alg(0);
  }

  async alg(k: number){
    if(k === this.emptyButtons.length){
      this.solutionIsFound = true;
      this.buttonsService.setSolved(true);
      return;
    }

    for(let i = 1; i <= 9; i++){
      this.emptyButtons[k].number = i;
      this.buttonsService.badVerification();

      if(this.speed !== 999)
        await new Promise(resolve => setTimeout(resolve, this.speed*2000));

      if(!this.buttonsService.isBad(this.emptyButtons[k])){
        await this.alg(k+1);

        if(this.solutionIsFound)
          return;
      }
    }
    this.emptyButtons[k].number = 0;
  }


}
