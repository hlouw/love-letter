import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Card } from '../shared/card.enum';

@Injectable()
export class GameActions {

  static NEW_GAME = '[Game] New game';
  static SHUFFLE_DECK = '[Game] Shuffle deck';
  static DRAW_CARD = '[Game] Draw a card';
  static BURN_CARD = '[Game] Discard a card from deck';
  static PLAY_CARD = '[Game] Play a card';
  static TURN_COMPLETE = '[Game] Finish current turn';

  newGame(players: number): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: {
        players
      }
    };
  }

  shuffleDeck(): Action {
    return {
      type: GameActions.SHUFFLE_DECK
    };
  }

  drawCard(player: number): Action {
    return {
      type: GameActions.DRAW_CARD,
      payload: {
        player
      }
    };
  }

  burnCard(): Action {
    return {
      type: GameActions.BURN_CARD
    };
  }

  playCard(cardIndex: number, targetPlayer?: string, targetCard?: Card): Action {
    return {
      type: GameActions.PLAY_CARD,
      payload: {
        cardIndex,
        targetPlayer,
        targetCard
      }
    };
  }

  turnComplete(): Action {
    return {
      type: GameActions.TURN_COMPLETE
    };
  }
}
