export enum Color {
  red,
  black,
  blue,
  green,
  orange,
}

export interface Hero {
  name: string;
  flies: boolean;
  color: Color;
}
