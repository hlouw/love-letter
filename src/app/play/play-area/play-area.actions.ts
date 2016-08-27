import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";

@Injectable()
export class PlayAreaActions {

  static SHUFFLE = 'SHUFFLE';
  static DRAW = 'DRAW';
  static RESET = 'RESET';
  static PLAY_CARD = 'PLAY_CARD';

  shuffle(): Action {
    return {
      type: PlayAreaActions.SHUFFLE
    };
  }

  draw(player: string): Action {
    return {
      type: PlayAreaActions.DRAW,
      payload: player
    }
  }

  playCard(player: string, cardIndex: number): Action {
    return {
      type: PlayAreaActions.PLAY_CARD,
      payload: { player: player, cardIndex: cardIndex }
    }
  }

  resetGame(): Action {
    return {
      type: PlayAreaActions.RESET
    }
  }

}
