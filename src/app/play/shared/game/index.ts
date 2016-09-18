import { combineReducers } from '@ngrx/store';
import gameReducer from './game.reducer';

export { GameState, PlayerGameState, PlayerType } from './game.reducer';
export * from './game.actions';
export * from './game.effects';
export * from './game.service';

export const reducer = combineReducers({
  game: gameReducer
});
