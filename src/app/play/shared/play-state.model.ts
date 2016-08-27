import { Player } from "./player.model";
import { Card } from "./card.enum";

export interface PlayState {
  deck: Card[];
  players: Player[];
}

