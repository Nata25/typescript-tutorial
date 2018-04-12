import getRandomIntInclusive from './helpers/getRandomIntInclusive';

const container: Element = document.getElementById('colors');

let color: string = 'green';
let squareSizeNum: number = 100;
let squareSize = `${squareSizeNum}px`;
let div: Element = document.createElement('div');
let button: Element = document.createElement('button');
button.innerHTML = 'Change it!';

let Elements = {
  'div': document.createElement('div'),
  'button': document.createElement('button')
}

interface ElementSet {
  'div': Element;
  'button': Element;
}

let elementSets: Array<ElementSet> = [];

for (let index: number = 0; index < 5; index++) {
  elementSets.push({
      'div': document.createElement('div'),
      'button': document.createElement('button')
  })
}

enum Colors {
  Red,
  Blue,
  Green,
  Yellow,
  Orange
}

class ColorChange {
  div: Element;
  constructor(div: Element) {
    this.div = div;
  }
  
  changeColor(color: number | string): boolean {
    if (typeof color === 'number') {
      return true;
    } else if (typeof color === 'string') {
      (this.div as HTMLElement).style.backgroundColor = Colors[color];
      return true;
    }   
  }
}

class numericColor extends ColorChange {
  static Colors = Colors;
  constructor(div: Element) {
    super(div);
    (this.div as HTMLElement).style.width = squareSize;
    (this.div as HTMLElement).style.height = squareSize;
    (this.div as HTMLElement).className = 'colorized';

  }

  changeColor(color: number): boolean {
    (this.div as HTMLElement).style.backgroundColor = Colors[color];
    return true;
  }
}

const colors: Function = (): void => {
  elementSets.map((elem, index) => {
    const div = new numericColor(elem.div);
    (elem.button as HTMLElement).innerText = 'Click to colorize';
    container.appendChild(elem.div);
    container.appendChild(elem.button);
    elem.button.addEventListener('click', event => {
      // div.changeColor(Colors[index]);
      div.changeColor(getRandomIntInclusive(0, 4));
    });
  });
}

export default colors;