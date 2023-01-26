export class NumberService{
  numbers : number[] = [];

  constructor() {
    for(let i = 0; i < 10; i++){
      this.numbers.push(i);
    }
  }
}
