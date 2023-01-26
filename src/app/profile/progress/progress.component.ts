import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent {
  @Input() index;
  @Input() clr;

  constructor(private router: Router) {
  }
  goToGame(){
    this.router.navigate(['../game/'+this.index]);
    console.log("Hello");
  }
}
