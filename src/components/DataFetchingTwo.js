import React, { useReducer, useEffect } from "react";
import axios, { Axios } from "axios";
const intialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: "Nami swaaaan Robin chaaaaaan!",
        post: {},
      };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, intialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESSS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "LOADING DING DING..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}
export default DataFetchingTwo;
