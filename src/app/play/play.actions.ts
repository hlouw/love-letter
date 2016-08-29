import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class PlayActions {

  static SHUFFLE = '[Play] Shuffle';
  static DRAW = '[Play] Draw';
  static RESET = '[Play] Reset';
  static PLAY_CARD = '[Play] Play card';
  static NEXT_PLAYER = '[Play] Next player';

  shuffle(): Action {
    return {
      type: PlayActions.SHUFFLE
    };
  }

  draw(player: string): Action {
    return {
      type: PlayActions.DRAW,
      payload: player
    };
  }

  playCard(player: string, cardIndex: number): Action {
    return {
      type: PlayActions.PLAY_CARD,
      payload: { player: player, cardIndex: cardIndex }
    };
  }

  resetGame(): Action {
    return {
      type: PlayActions.RESET
    };
  }

  nextPlayer(): Action {
    return {
      type: PlayActions.NEXT_PLAYER
    };
  }
}
