import { Action } from '@ngrx/store';
import { GameActions } from './game.actions';
import { Card } from '../card';

export interface GameState {
  playerQueue: number[];
  deck: Card[];
  burn: Card[];
  inProgress: boolean;
  players: PlayerGameState[];
}

export enum PlayerType {
  Human, AI
}

export interface PlayerGameState {
  name: string;
  type: PlayerType;
  hand: Card[];
  discardPile: Card[];
}

const initialDeck: Card[] = [
  ... new Array(5).fill(Card.Guard),
  ... new Array(2).fill(Card.Priest),
  ... new Array(2).fill(Card.Baron),
  ... new Array(2).fill(Card.Handmaid),
  ... new Array(2).fill(Card.Prince),
  ... new Array(1).fill(Card.King),
  ... new Array(1).fill(Card.Countess),
  ... new Array(1).fill(Card.Princess),
];

const initialState: GameState = {
  playerQueue: [0, 1, 2],
  deck: initialDeck,
  burn: [],
  inProgress: false,
  players: [
    { name: 'Player1', type: PlayerType.Human, hand: [], discardPile: [] },
    { name: 'Player2', type: PlayerType.Human, hand: [], discardPile: [] },
    { name: 'Player3', type: PlayerType.Human, hand: [], discardPile: [] }
  ]
};

export default function (state: GameState = initialState, action: Action): GameState {
  switch (action.type) {
    case GameActions.NEW_GAME:
      return Object.assign({}, initialState, {
        inProgress: true
      });

    case GameActions.SHUFFLE_DECK:
      return Object.assign({}, state, {
        deck: shuffleDeck(state.deck)
      });

    case GameActions.BURN_CARD:
      return Object.assign({}, state, {
        deck: state.deck.slice(1),
        burn: [...state.burn, state.deck[0]]
      });

    case GameActions.DRAW_CARD:
      return drawCard(state, action.payload.player);

    case GameActions.TURN_COMPLETE:
      return handleTurnComplete(state);

    case GameActions.NEXT_TURN:
      return handleNextTurn(state);

    case GameActions.PLAY_CARD:
      return handlePlayCard(state, action.payload.cardIndex);

    case GameActions.ELIMINATE_PLAYER:
      return handleEliminatePlayer(state, action.payload.player);

    case GameActions.SWAP_CARD:
      return handleSwapCard(state, action.payload.player);

    case GameActions.DISCARD_CARD:
      return handleDiscardCard(state, action.payload.player);

    default:
      return state;
  }
}

function shuffleDeck(deck: Card[]): Card[] {
  if (deck.length <= 1) {
    return [...deck];
  }

  const shuffled = [...deck];

  for (let i = 0; i < shuffled.length; i++) {
    const randomChoiceIndex = getRandom(i, shuffled.length - 1);
    [shuffled[i], shuffled[randomChoiceIndex]] = [shuffled[randomChoiceIndex], shuffled[i]];
  }

  return shuffled;
}

function drawCard(state: GameState, playerIndex: number): GameState {
  const updatedPlayer = Object.assign({}, state.players[playerIndex], {
    hand: [
      ...state.players[playerIndex].hand, state.deck[0]
    ]
  });

  return Object.assign({}, state, {
    deck: state.deck.slice(1),
    players: [
      ...state.players.slice(0, playerIndex),
      updatedPlayer,
      ...state.players.slice(playerIndex + 1)
    ]
  });
}

function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function handleTurnComplete(state: GameState): GameState {
  if (state.players.filter(p => p.hand.length > 0).length === 1) {
    const winner = state.players.findIndex(p => p.hand.length > 0);
    return Object.assign({}, state, {
      playerQueue: [winner],
      inProgress: false
    });
  } else if (state.deck.length === 0) {
    const hands: number[] = state.players.map(p => p.hand[0]);
    const highest: number = Math.max(...hands);
    const winner = hands.indexOf(highest);

    return Object.assign({}, state, {
      playerQueue: [winner],
      inProgress: false
    });
  } else {
    return state;
  }
}

function handleNextTurn(state: GameState): GameState {
  let rotatedQueue = [...state.playerQueue.slice(1), state.playerQueue[0]];

  // Remove eliminated players from queue
  rotatedQueue = rotatedQueue.filter(i => state.players[i].hand.length > 0);
  const nextPlayer = rotatedQueue[0];
  const cardDrawnState = drawCard(state, nextPlayer);

  return Object.assign({}, cardDrawnState, {
    playerQueue: rotatedQueue
  });
}

function handlePlayCard(state: GameState, cardIndex: number): GameState {
  const playerIndex = state.playerQueue[0];
  const currentPlayer = state.players[playerIndex];
  const updatedPlayer = Object.assign({}, currentPlayer, {
    hand: [
      ...currentPlayer.hand.slice(0, cardIndex),
      ...currentPlayer.hand.slice(cardIndex + 1)
    ],
    discardPile: [currentPlayer.hand[cardIndex], ...currentPlayer.discardPile]
  });

  return Object.assign({}, state, {
    players: [
      ...state.players.slice(0, playerIndex),
      updatedPlayer,
      ...state.players.slice(playerIndex + 1)
    ]
  });
}

function handleEliminatePlayer(state: GameState, playerIndex: number): GameState {
  const player = state.players[playerIndex];
  const updatedPlayer = Object.assign({}, player, {
    hand: [],
    discardPile: [player.hand[0], ...player.discardPile]
  });

  return Object.assign({}, state, {
    players: [
      ...state.players.slice(0, playerIndex),
      updatedPlayer,
      ...state.players.slice(playerIndex + 1)
    ]
  });
}

function handleSwapCard(state: GameState, player: number): GameState {
  return state;
}

function handleDiscardCard(state: GameState, player: number): GameState {
  return state;
}
