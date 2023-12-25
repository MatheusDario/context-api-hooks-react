/* eslint-disable no-unused-vars */
import { useCounterContext } from '../../context/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();
  return <h1>Counter: {state.counter}</h1>;
};
