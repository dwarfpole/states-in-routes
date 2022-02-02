import React, { useReducer } from "react";

import SingerContext from "./singerContext";
import SingerReducer from "./singerReducer";

import { GET_SINGER, SET_LOADING } from "../types";

const SingerState = (props) => {
  const initialState = {
    name: null,
    songs: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(SingerReducer, initialState);

  const getSinger = () => {
    dispatch({
      type: GET_SINGER,
      payload: {
        name: "jb",
        songs: ["song1", "song2"],
      },
    });
  };
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  return (
    <SingerContext.Provider
      value={{
        name: state.name,
        songs: state.songs,
        loading: state.loading,
        getSinger,
        setLoading,
      }}
    >
      {props.childer}
    </SingerContext.Provider>
  );
};

export default SingerState;
