// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

const reducer = (state, action) => {
  console.log(action);
  //action -> type, [payload]
  // dispatch the action, actiong has a type (user, playlist etc..)
  switch (action.type) {
    case 'SET_USER':
      return {
        //keep what was in the current state
        ...state,
        user: action.user,
        //update case here
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };


    default:
      return state;
    // default should return something so app doesnt break
  }
}

export default reducer;
