/// <reference path="DieNamespace.ts" />

import getRandomIntInclusive from 'helpers/getRandomIntInclusive';

const dieOptions: Array<DieNamespace.DieOptionsInterface> = DieNamespace.options;

enum DieValues {
  '*',
  '**',
  '***',
  '**\n**',
  '**\n*\**',
  '***\n***'
}

class Die {
  options: DieNamespace.DieOptionsInterface;
  value: string;

  constructor(dieOptions: DieNamespace.DieOptionsInterface) {
    this.options = dieOptions;
    this.value = DieValues[getRandomIntInclusive(0, 5)];
  }
}

class DieRoller extends Die {

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
    DieRoller.container.appendChild(this.die);
  }

  rollDice(): boolean {
    this.value = DieValues[getRandomIntInclusive(0, 3)];
    (this.die as HTMLElement).innerText = this.value;
    return true;
  }
}

const dice: DieRoller[] = [];

const diceFunction: Function = (): void => {
  dieOptions.forEach(die => {
    const dieInstance = new DieRoller(die);
    dice.push(dieInstance);
  });
  
  const button: Element = document.createElement('button');
  (button as HTMLElement).innerText = 'Roll the dice';
  DieRoller.container.appendChild(button);
  button.addEventListener('click', () => {
    for (let i = 0; i < dieOptions.length; i++) {
      dice[i].rollDice();
    }
  });
}

export default diceFunction;

