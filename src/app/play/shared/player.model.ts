import { Card } from "./card.enum";

export interface Player {
  name: string;
  hand: Card[];
  discardPile: Card[];
}

