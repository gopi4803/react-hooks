import "./App.css";
import IntervalHookCounter from "./components/IntervalHookCounter";
import Buttons from "./components/Buttons";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import Counter from "./components/Counter";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import MouseContainer from "./components/MouseContainer";
import DataFetching from "./components/DataFetching";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import React,{ useReducer } from "react";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
export const CountContext = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <ClassCounter />
      <HookCounter /> */}
        {/* <HookCounterTwo />
      <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <Buttons /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <Counter /> */}
        {/* <HookMouse /> */}
        {/* <ClassMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
        {/* <DataFetchingOne /> */}
        <DataFetchingTwo />
      </div>
    </CountContext.Provider>
  );
}

export default App;
