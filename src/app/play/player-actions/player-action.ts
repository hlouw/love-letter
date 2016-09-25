import { Card } from '../shared/card/card.enum';

export class PlayerAction {

  constructor(
    public cardIndex?: number,
    public targetPlayer?: number,
    public targetCard?: Card
  ) { }
}
