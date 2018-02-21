import {EXAMPLE_ACTION} from '../constants/ActionTypes';

const initialState = {
  exampleBool: true
}

export default function exampleReducer(state=initialState, action) {

  switch(action.type) {
    
    case EXAMPLE_ACTION:
      return Object.assign({}, state, {
        exampleBool: !state.exampleBool
      });

    default:
      return state
  }
}
