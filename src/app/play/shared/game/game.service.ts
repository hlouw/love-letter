import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { GameActions } from './game.actions';
import { GameState } from './game.reducer';
import { Card } from '../card';
import { PlayerAction } from '../../player-actions/player-action';

@Injectable()
export class GameService {

  constructor(
    private gameActions: GameActions
  ) { }

  playAITurn(state: GameState): Action {
    const actions = this.legalActions(state);
    const whichAction = Math.round(Math.random() * (actions.length - 1));
    return actions[whichAction];
  }

  legalActions(state: GameState): Action[] {
    let actions: Action[] = [];

    // const currentPlayer = state.players[state.playerQueue[0]];
    actions.push(this.gameActions.playCard(0, state.playerQueue[1], Card.Priest));
    actions.push(this.gameActions.playCard(1, state.playerQueue[1], Card.Priest));

    return actions;
  }

  cardEffects(action: Action, state: GameState): Action[] {
    const player = state.players[state.playerQueue[0]];
    const cardPlayed: Card = player.discardPile[0];
    const payload: PlayerAction = action.payload;
    console.log('Card played: ' + cardPlayed);

    switch (cardPlayed) {
      case Card.Guard:
        {
          let targetPlayer: number = Number(payload.targetPlayer);
          if (!state.playerQueue.includes(targetPlayer)) {
            return [];
          }

          let targetHand = state.players[targetPlayer].hand;
          if (targetHand[0] === Number(payload.targetCard)) {
            return [ this.gameActions.eliminatePlayer(targetPlayer) ];
          } else {
            return [];
          }
        }

      case Card.Baron:
        {
          let targetPlayer: number = payload.targetPlayer;
          let playerCard = player.hand[0];
          let targetCard = state.players[targetPlayer].hand[0];
          if (targetCard > playerCard) {
            return [ this.gameActions.eliminatePlayer(state.playerQueue[0]) ];
          } else if (targetCard < playerCard) {
            return [ this.gameActions.eliminatePlayer(targetPlayer) ];
          } else {
            return [];
          }
        }

      case Card.Prince:
        {
          let targetPlayer: number = payload.targetPlayer;
          let discardedCard = state.players[targetPlayer].hand[0];
          if (discardedCard === Card.Princess) {
            return [ this.gameActions.eliminatePlayer(targetPlayer) ];
          } else {
            return [
              this.gameActions.discardCard(targetPlayer),
              this.gameActions.drawCard(targetPlayer)
            ];
          }
        }

      case Card.King:
        {
          return [ this.gameActions.swapCard(payload.targetPlayer) ];
        }

      default:
        return [];
    }
  }
}
