import React from 'react';
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import {createStore} from "redux";
function App() {

  const initialState = {
    count: 0
  }

  function reducer(state = initialState,action){
    switch (action.type) {
      case "increment":
        return {
          count:state.count + 1
        }
      case "decrement":
        return {
          count:state.count - 1
        }
      default:
        return state;
    }
  }
  const store = createStore(reducer);
  return (
    <Provider store = {store}>
     <Counter />
    </Provider>
  );
}

export default App;
