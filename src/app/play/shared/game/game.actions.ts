import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Card } from '../card';

@Injectable()
export class GameActions {

  static NEW_GAME = '[Game] New game';
  static SHUFFLE_DECK = '[Game] Shuffle deck';
  static DRAW_CARD = '[Game] Draw a card';
  static BURN_CARD = '[Game] Discard a card from deck';
  static PLAY_CARD = '[Game] Play a card';
  static TURN_COMPLETE = '[Game] Finish current turn';
  static NEXT_TURN = '[Game] Start next turn';
  static ELIMINATE_PLAYER = '[Game] Eliminate player';
  static DISCARD_CARD = '[Game] Eliminate player';
  static SWAP_CARD = '[Game] Eliminate player';

  newGame(numPlayers: number): Action {
    return {
      type: GameActions.NEW_GAME,
      payload: { numPlayers }
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
      payload: { player }
    };
  }

  burnCard(): Action {
    return {
      type: GameActions.BURN_CARD
    };
  }

  playCard(cardIndex: number, targetPlayer?: number, targetCard?: Card): Action {
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

  nextTurn(): Action {
    return {
      type: GameActions.NEXT_TURN
    };
  }

  eliminatePlayer(player: number): Action {
    return {
      type: GameActions.ELIMINATE_PLAYER,
      payload: { player }
    };
  }

  discardCard(player: number): Action {
    return {
      type: GameActions.DISCARD_CARD,
      payload: { player }
    };
  }

  swapCard(player: number): Action {
    return {
      type: GameActions.SWAP_CARD,
      payload: { player }
    };
  }
}
