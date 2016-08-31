import { combineReducers } from '@ngrx/store';
import gameReducer from './game.reducer';

export { GameState, PlayerGameState, PlayerType } from './game.reducer';
export * from './game.actions';
export * from './ai.effects';
export * from './ai.service';

export const reducer = combineReducers({
  game: gameReducer
});
