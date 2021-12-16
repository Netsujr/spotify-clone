export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null
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
        user: action.user
        //update case here
      }
      default:
        // default should return something so app doesnt break
      return state;
  }
}

export default reducer;
