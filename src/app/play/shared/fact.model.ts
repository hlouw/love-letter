import { Card } from './card.enum';

export interface Fact {
  player: string;
  hasExact?: Card;
}
