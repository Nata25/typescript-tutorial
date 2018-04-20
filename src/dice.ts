/// <reference path="DieNamespace.ts" />

import * as _ from 'lodash';
import DiceRoller from 'DiceRoller';

const dieOptions: Array<DieNamespace.DieOptionsInterface> = DieNamespace.options;

const dice: DiceRoller[] = [];

const diceFunction: Function = (): void => {
  _.each(dieOptions, die => {
      const dieInstance = new DiceRoller(die);
      dice.push(dieInstance);
  });
  
  const button: Element = document.createElement('button');
  (button as HTMLElement).innerText = 'Roll the dice';
  DiceRoller.container.appendChild(button);
  button.addEventListener('click', () => {
    for (let i = 0; i < dieOptions.length; i++) {
      dice[i].rollDice();
    }
  });
}

export default diceFunction;

