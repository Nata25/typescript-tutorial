namespace DieNamespace {

  export enum DieValues {
    '*',
    '**',
    '***',
    '**\n**',
    '**\n*\**',
    '***\n***'
  }

  export interface DieOptionsInterface {
    width: number;
    border?: string;
    color?: string;
  }

  export const options = [
    {
      width: 100,
      border: '1px solid #999',
    },
    {
      width: 100,
      border: '1px solid #999',
    }
  ]
}