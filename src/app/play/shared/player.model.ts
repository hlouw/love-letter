import { Card } from './card.enum';
import { Fact } from './fact.model';

export interface Player {
  name: string;
  hand: Card[];
  discardPile: Card[];
  knows: Fact[];
}

