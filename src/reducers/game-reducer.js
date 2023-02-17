import {
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  ROTATE,
  RESTART,
  RESUME,
  GAME_OVER,
  PAUSE,
} from '../actions';

const gameReducer = ({ state = {}, action }) => {
  switch (action.type) {
    case ROTATE:
      return state;

    case MOVE_RIGHT:
      return state;

    case MOVE_LEFT:
      return state;

    case MOVE_DOWN:
      return state;

    case RESUME:
      return state;

    case PAUSE:
      return state;

    case GAME_OVER:
      return state;

    case RESTART:
      return state;

    default:
      return state;
  }
};

export default gameReducer;
