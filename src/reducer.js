// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER DEVELOPMENT
  // REMOVE AFTER DEVELOPMENT >>>>> CHange back to null
  token: null,
  // "BQDUfmV7QjUR0gHxEZzR_wyiixsUd6NnMtG_wEp-qG8b674fr3YyCjWR1mQcWAUTL8Mt3ERa5ieYG7-v2Tzt7hY305dHDBLAkAgxfnulTgfKswuVnsWNoGD2VhMph2WoOBGHxkxYVxu01BBR2kgUlk7kEHPoDiz3cQ",
};

const reducer = (state, action) => {
  console.log(action);
  // action -> type, [payload]
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

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
    // default should return something so app doesnt break
  }
}

export default reducer;
