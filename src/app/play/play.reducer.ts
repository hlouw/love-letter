import { ActionReducer, Action } from '@ngrx/store';
import { Card, PlayState } from './shared';
import { PlayActions } from './play.actions';

export class PlayReducer {

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
    activePlayer: 0,
    deck: PlayReducer.initialCardSet,
    players: [
      {name: 'Player1', hand: [], discardPile: [], knows: []},
      {name: 'Player2', hand: [], discardPile: [], knows: []},
      {name: 'Player3', hand: [], discardPile: [], knows: []}
    ]
  };

  static reducer: ActionReducer<PlayState> = (state: PlayState = PlayReducer.initialState, action: Action) => {
    switch (action.type) {
      case PlayActions.SHUFFLE:
        return PlayReducer.actionShuffleDeck(state);

      case PlayActions.DRAW:
        return PlayReducer.actionDrawCard(state, action.payload);

      case PlayActions.PLAY_CARD:
        return PlayReducer.actionPlayCard(state, action.payload.player, action.payload.cardIndex);

      case PlayActions.RESET:
        return PlayReducer.initialState;

      case PlayActions.NEXT_PLAYER:
        const nextPlayer = PlayReducer.setNextPlayer(state);
        return PlayReducer.activePlayerDrawCard(nextPlayer);

      default:
        return state;
    }
  };

  private static actionDrawCard(state: PlayState, drawingPlayer: string): PlayState {
    const topCard = state.deck[0];
    const remainingCards = state.deck.slice(1);
    const newPlayers = state.players.map(p => (p.name === drawingPlayer)
      ? Object.assign({}, p, { hand: [...p.hand, topCard]})
      : p
    );

    return Object.assign({}, state, {
      deck: remainingCards,
      players: newPlayers
    });
  }

  private static actionPlayCard(state: PlayState, player: string, cardIndex: number): PlayState {
    let newPlayers = state.players.map(p => (p.name === player) ? Object.assign({}, p, {
      hand: [
        ... p.hand.slice(0, cardIndex),
        ... p.hand.slice(cardIndex + 1)
      ],
      discardPile: [...p.discardPile, p.hand[cardIndex]]
    }) : p);

    return Object.assign({}, state, {
      players: newPlayers
    });
  }

  private static actionShuffleDeck(state: PlayState): PlayState {
    if (state.deck.length <= 1) {
      return state;
    }

    let shuffled = [...state.deck];

    for (let i = 0; i < shuffled.length; i++) {
      const randomChoiceIndex = PlayReducer.getRandom(i, shuffled.length - 1);
      [shuffled[i], shuffled[randomChoiceIndex]] = [shuffled[randomChoiceIndex], shuffled[i]];
    }

    return Object.assign({}, state, {
      deck: shuffled,
    });
  }

  private static getRandom(floor: number, ceiling: number) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
  }

  private static setNextPlayer(state: PlayState): PlayState {
    return Object.assign({}, state, {
      activePlayer: (state.activePlayer + 1) % state.players.length
    });
  }

  private static activePlayerDrawCard(state: PlayState): PlayState {
    return PlayReducer.actionDrawCard(state, state.players[state.activePlayer].name);
  }

}
