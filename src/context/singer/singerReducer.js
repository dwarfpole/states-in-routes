import { GET_SINGER, SET_LOADING } from "../types";

const reducer = (state, action) => {
  switch (action.types) {
    case GET_SINGER:
      return {
        ...state,
        name: action.payload.name,
        song: action.payload.song,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default reducer;
