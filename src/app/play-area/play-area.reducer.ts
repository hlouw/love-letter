import { ActionReducer, Action } from '@ngrx/store';
import { Card } from './card.enum';

export const SHUFFLE = 'SHUFFLE';
export const DRAW = 'DRAW';
export const RESET = 'RESET';

export interface PlayState {
  deck: Card[];
  players: Player[];
}

export interface Player {
  name: string;
  hand: Card[];
  discardPile: Card[];
}

const CARD_SET: Card[] = [
  Card.Guard, Card.Guard, Card.Guard, Card.Guard, Card.Guard,
  Card.Priest, Card.Priest,
  Card.Baron, Card.Baron,
  Card.Handmaid, Card.Handmaid,
  Card.Prince, Card.Prince,
  Card.King,
  Card.Countess,
  Card.Princess
];

const INITIAL_STATE: PlayState = {
  deck: CARD_SET,
  players: [
    { name: 'Player1', hand: [], discardPile: [] },
    { name: 'Player2', hand: [], discardPile: [] },
    { name: 'Player3', hand: [], discardPile: [] }
  ]
};

function actionDrawCard(state: PlayState, drawingPlayer: string): PlayState {
  let topCard = state.deck[0];
  let remainingCards = state.deck.slice(1);
  let newPlayers = state.players.map(p => {
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

function actionShuffleDeck(state: PlayState): PlayState {
  return state;
}

export const playReducer: ActionReducer<PlayState> = (state: PlayState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SHUFFLE:
      return actionShuffleDeck(state);

    case DRAW:
      return actionDrawCard(state, action.payload);

    case RESET:
      return INITIAL_STATE;

    default:
      return state;
  }
};
