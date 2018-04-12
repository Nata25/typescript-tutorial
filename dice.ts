const getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

enum DieValues {
  One,
  Two,
  Three,
  Four,
  Five,
  Six
}

interface DieOptions {
  width: number;
  border?: string;
  color?: string;
}

class Die {
  options: DieOptions;
  value: string;

  constructor(dieOptions: DieOptions) {
    this.options = dieOptions;
    this.value = DieValues[getRandomIntInclusive(0, 5)];
  }
}

const dieOptions: DieOptions[] = [
  {
    width: 100,
    border: '1px solid'
  },
  {
    width: 100,
    border: '1px solid'
  }
]

class DieRoller extends Die {
  die: Element;
  button: Element;

  constructor(die: DieOptions) {
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
    document.body.appendChild(this.die);
  }

  rollDice(): boolean {
    this.value = DieValues[getRandomIntInclusive(0, 3)];
    (this.die as HTMLElement).innerText = this.value;
    return true;
  }
}

const dice: DieRoller[] = [];

dieOptions.forEach(die => {
  const dieInstance = new DieRoller(die);
  dice.push(dieInstance);
});

const button: Element = document.createElement('button');
(button as HTMLElement).innerText = 'Roll the dice';
document.body.appendChild(button);
button.addEventListener('click', () => {
  for (let i = 0; i < dieOptions.length; i++) {
    dice[i].rollDice();
  }
});

