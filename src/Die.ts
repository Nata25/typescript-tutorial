/// <reference path="DieNamespace.ts" />

import getRandomIntInclusive from 'helpers/getRandomIntInclusive';

class Die {
  options: DieNamespace.DieOptionsInterface;
  value: string;

  constructor(dieOptions: DieNamespace.DieOptionsInterface) {
    this.options = dieOptions;
    this.value = DieNamespace.DieValues[getRandomIntInclusive(0, 5)];
  }
}

export default Die;