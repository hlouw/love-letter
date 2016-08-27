import { ActionReducer, Action } from '@ngrx/store';
import { Card, PlayState } from '../shared';
import { PlayAreaActions } from "./play-area.actions";

export class PlayAreaReducer {

  private static initialCardSet: Card[] = [
    Card.Guard, Card.Guard, Card.Guard, Card.Guard, Card.Guard,
    Card.Priest, Card.Priest,
    Card.Baron, Card.Baron,
    Card.Handmaid, Card.Handmaid,
    Card.Prince, Card.Prince,
    Card.King,
    Card.Countess,
    Card.Princess
  ];

  private static initialState: PlayState = {
    deck: PlayAreaReducer.initialCardSet,
    players: [
      {name: 'Player1', hand: [], discardPile: []},
      {name: 'Player2', hand: [], discardPile: []},
      {name: 'Player3', hand: [], discardPile: []}
    ]
  };

  static playReducer: ActionReducer<PlayState> = (state: PlayState = PlayAreaReducer.initialState, action: Action) => {
    switch (action.type) {
      case PlayAreaActions.SHUFFLE:
        return PlayAreaReducer.actionShuffleDeck(state);

      case PlayAreaActions.DRAW:
        return PlayAreaReducer.actionDrawCard(state, action.payload);

      case PlayAreaActions.PLAY_CARD:
        return PlayAreaReducer.actionPlayCard(state, action.payload.player, action.payload.cardIndex);

      case PlayAreaActions.RESET:
        return PlayAreaReducer.initialState;

      default:
        return state;
    }
  };

  private static actionDrawCard(state: PlayState, drawingPlayer: string): PlayState {
    const topCard = state.deck[0];
    const remainingCards = state.deck.slice(1);
    const newPlayers = state.players.map(p => {
      return (p.name === drawingPlayer) ?
      {
        name: p.name,
        hand: [...p.hand, topCard],
        discardPile: p.discardPile
      } : p;
    });

    return {
      deck: remainingCards,
      players: newPlayers
    };
  }

  private static actionPlayCard(state: PlayState, player: string, cardIndex: number) {
    let newPlayers = state.players.map(p => {
      return (p.name === player) ?
      {
        name: p.name,
        hand: [
          ... p.hand.slice(0, cardIndex),
          ... p.hand.slice(cardIndex + 1)
        ],
        discardPile: [...p.discardPile, p.hand[cardIndex]]
      } : p;
    });

    return {
      deck: state.deck,
      players: newPlayers
    }
  }

  private static actionShuffleDeck(state: PlayState): PlayState {
    if (state.deck.length <= 1) return state;

    let shuffled = [...state.deck];

    for (let i = 0; i < shuffled.length; i++) {
      const randomChoiceIndex = PlayAreaReducer.getRandom(i, shuffled.length - 1);
      [shuffled[i], shuffled[randomChoiceIndex]] = [shuffled[randomChoiceIndex], shuffled[i]];
    }

    return {
      deck: shuffled,
      players: state.players
    };
  }

  private static getRandom(floor: number, ceiling: number) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

}
