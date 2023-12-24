import P from 'prop-types';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const Context = createContext();

const initalState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initalState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
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
