/* eslint-disable no-unused-vars */
import P from 'prop-types';
import { useReducer, useRef, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

const Context = createContext();

export const initalState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[state, actions.current]}>
      {children}
    </Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useCounterContext inside <CounterContextProvider/>',
    );
  }

  return [...context];
};
