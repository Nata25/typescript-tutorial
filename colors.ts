const getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let color: string = 'green';
let squareSizeNum: number = 100;
let squareSize = `${squareSizeNum}px`;
let div: Element = document.createElement('div');
let button: Element = document.createElement('button');
button.innerHTML = 'Change it!';

// let changeColor: Function = (elem: Element, color: string) => {

// }

// document.body.appendChild(div);
// (<HTMLElement>div).style.backgroundColor = color;
// (<HTMLElement>div).style.width = `${squareSizeNum}px`;
// (<HTMLElement>div).style.height = `${squareSizeNum}px`;
// document.body.appendChild(button);

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
    }
    (this.div as HTMLElement).style.backgroundColor = Colors[color];
    return true;
  }
}

class numericColor extends ColorChange {
  static Colors = Colors;
  constructor(div: Element) {
    super(div);
    (this.div as HTMLElement).style.width = squareSize;
    (this.div as HTMLElement).style.height = squareSize;
  }

  changeColor(color: number): boolean {
    (this.div as HTMLElement).style.backgroundColor = Colors[color];
    return true;
  }
}

elementSets.map((elem, index) => {
  const div = new numericColor(elem.div);
  (elem.button as HTMLElement).innerText = 'Click to colorize';
  document.body.appendChild(elem.div);
  document.body.appendChild(elem.button);
  elem.button.addEventListener('click', event => {
    // div.changeColor(Colors[index]);
    div.changeColor(getRandomIntInclusive(0, 4));
  });
  
});