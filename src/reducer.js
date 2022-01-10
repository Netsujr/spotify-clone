// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
    // stay logged in for debugging
  // "BQDUfmV7QjUR0gHxEZzR_wyiixsUd6NnMtG_wEp-qG8b674fr3YyCjWR1mQcWAUTL8Mt3ERa5ieYG7-v2Tzt7hY305dHDBLAkAgxfnulTgfKswuVnsWNoGD2VhMph2WoOBGHxkxYVxu01BBR2kgUlk7kEHPoDiz3cQ",
};

const reducer = (state, action) => {
  // console.log(action);
  // action -> type, [payload]
  // dispatch the action, actiong has a type (user, playlist etc..)
  switch (action.type) {
    case "SET_USER":
      return {
        //keep what was in the current state
        ...state,
        user: action.user,
        //update case here
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    // default should return something so app doesnt break

    default:
      return state;
  }
};

export default reducer;
