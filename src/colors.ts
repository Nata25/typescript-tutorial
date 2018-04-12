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
  
  // changeColor(colorIndex: number): boolean;
  // changeColor(colorName: string): boolean;
  changeColor(color: number | string): boolean {
    if (typeof color === 'number') {
      return true;
    }
    (this.div as HTMLElement).style.backgroundColor = color;
    return true;   
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

  changeColor(color: number | string): boolean {
    super.changeColor(color);
    (this.div as HTMLElement).style.backgroundColor = Colors[(color as number)];
    return true;
  }
}

const colors: Function = (): void => {
  elementSets.map((elem, index) => {
    const div = new numericColor(elem.div);
    (elem.button as HTMLElement).innerText = 'Change color';
    container.appendChild(elem.div);
    // set default color by either taking from Colors or by passing a string
    div.changeColor(index);
    // div.changeColor('violet');
    container.appendChild(elem.button);
    elem.button.addEventListener('click', event => {
      div.changeColor(getRandomIntInclusive(0, 4));
    });
  });
}

export default colors;