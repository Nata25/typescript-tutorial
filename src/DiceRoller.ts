/// <reference path="DieNamespace.ts" />

import getRandomIntInclusive from 'helpers/getRandomIntInclusive';
import Die from 'Die';

class DiceRoller extends Die {

  static container: Element = document.getElementById('dice');

  die: Element;
  button: Element;

  constructor(die: DieNamespace.DieOptionsInterface) {
    super(die);
    this.initDie();
  }

  initDie(): void {
    this.die = document.createElement('div');
    const sizeForCss = `${this.options.width}px`;
    this.die.className = 'dice';
    (this.die as HTMLElement).style.width = sizeForCss;
    (this.die as HTMLElement).style.height = sizeForCss;
    (this.die as HTMLElement).style.border = this.options.border;
    (this.die as HTMLElement).innerText = this.value;
    DiceRoller.container.appendChild(this.die);
  }

  rollDice(): boolean {
    this.value = DieNamespace.DieValues[getRandomIntInclusive(0, 3)];
    (this.die as HTMLElement).innerText = this.value;
    return true;
  }
}

export default DiceRoller;