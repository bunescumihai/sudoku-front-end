import {Map} from "../entity/map";
import {MapRequestService} from "./mapRequest.service";
import {Injectable, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";

interface Button{
  number: number;
  x: number;
  y: number;
  selected: boolean;
  active: boolean;
  bad: boolean;
  possibleValues: number[]
}

@Injectable()
export class ButtonsService{
  selectedButton:Button;
  buttons: Button[] = [];
  data:Map;
  solved: boolean = false;

  constructor(private mapRequest:MapRequestService,
              private authService: AuthService) {

  }

  public resetMap(){
    this.buttons.splice(0);
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++)
        this.buttons.push(
          {
            number: +this.data.mapRow[i*9+j],
            x:i,
            y:j,
            selected:false,
            active: !(this.data.mapRow[i*9+j] == '0'),
            bad: false,
            possibleValues: []
          }
        );
    }
  }

  public addMap(data : Map): void{
    this.data = data;
    this.buttons.splice(0);
    console.log(data)
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++)
        this.buttons.push(
          {
            number: +data.mapRow[i*9+j],
            x:i,
            y:j,
            selected:false,
            active: !(data.mapRow[i*9+j] == '0'),
            bad: false,
            possibleValues: []
          }
        );
    }
    this.selectedButton = this.buttons[0];
    if(this.authService.isAuth())
      this.addProgressMap(this.authService.id, data.mapId)
  }

  public async addProgressMap(userId: number, mapId: number){

    this.mapRequest.getProgressedMap(userId, mapId).subscribe(data=>{
      let mapRow = data['mapRow'];
      console.log(data['mapRow']);
      if (mapRow){
        for(let i = 0; i < mapRow.length; i++)
          this.buttons[i].number = +mapRow[i];
      }
      this.badVerification();
    });
  }

  public badVerification(): void{
    for(let btn of this.buttons){
      btn.bad = this.isBad(btn);
    }
  }

  public isBad(btn:Button):boolean{
    if(btn.number === 0)
      return false;

    //linie
    let limInfX = btn.x*9;
    let limSupX = (btn.x+1)*9;
    for(let i = limInfX; i < limSupX; i++){
      if(btn.x===this.buttons[i].x && btn.y===this.buttons[i].y)
        continue;
      else if(btn.number === this.buttons[i].number)
        return true;
    }

    //coloana

    let limInfY = btn.y;
    let limSupY = 80;
    for(let i = limInfY; i <=limSupY; i+=9){
      if(btn.x===this.buttons[i].x && btn.y===this.buttons[i].y)
        continue;
      else if(btn.number === this.buttons[i].number)
        return true;
    }

    //celula 3x3
    for(let i = Math.floor(btn.x/3)*27+Math.floor(btn.y/3)*3, k = 0; k <3; i+=9, k++){
      for(let j = 0; j<3; j++){
        if(btn.x===this.buttons[i+j].x && btn.y===this.buttons[i+j].y)
          continue;
        else if(btn.number === this.buttons[i+j].number)
          return true;
      }
    }

    return false;
  }

  public deselect(button:Button){
    this.selectedButton.selected = false;
    button.selected = true;
    this.selectedButton = button;
  }

  public changeSelectionToTop(){
    let x = this.selectedButton.x;
    let y = this.selectedButton.y;
    if(x === 0)
      x = 8;
    else x--;
    let btn = this.buttons.find(element=>element.y === y && element.x === x)
    this.deselect(btn);
  }

  public changeSelectionToRight(){
    let x = this.selectedButton.x;
    let y = this.selectedButton.y;
    if(y === 8)
      y = 0;
    else y++;
    let btn = this.buttons.find(element=>element.y === y && element.x === x)
    this.deselect(btn);
  }

  public changeSelectionToLeft(){
    let x = this.selectedButton.x;
    let y = this.selectedButton.y;
    if(y === 0)
      y = 8;
    else y--;
    let btn = this.buttons.find(element=>element.y === y && element.x === x)
    this.deselect(btn);
  }

  public changeSelectionToDown(){
    let x = this.selectedButton.x;
    let y = this.selectedButton.y;
    if(x === 8)
      x = 0;
    else x++;
    let btn = this.buttons.find(element=>element.y === y && element.x === x)
    this.deselect(btn);
  }

  public isSolved(){
    return this.solved;
  }

  public setSolved(solved: boolean){
    this.solved = solved;
  }

  public checkSolution(){
    this.setSolved(true);

    for(let button of this.buttons){
      if(button.number === 0){
        this.setSolved(false);
        break;
      }
      if(button.bad === true){
        this.setSolved(false);
        break;
      }
    }

    if(this.solved){
      for(let btn of this.buttons){
        btn.active = true;
      }
      this.mapRequest.saveResolvedMap(this.authService.id, this.data.mapId);

    }

  }

}
