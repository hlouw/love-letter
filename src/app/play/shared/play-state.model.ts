import { Player } from './player.model';
import { Card } from './card.enum';

export interface PlayState {
  activePlayer: number;
  deck: Card[];
  players: Player[];
}

