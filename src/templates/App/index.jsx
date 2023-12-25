/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useCounterContext } from '../../context/CounterContext';
import P from 'prop-types';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export const App = () => {
  const [state, actions] = useCounterContext();

  return (
    <div>
      <Heading />
      <div>
        <Button onClickButton={actions.increase}>Increase</Button>
        <Button onClickButton={actions.decrease}>Decrease</Button>
        <Button onClickButton={actions.reset}>Re-set</Button>
        <Button onClickButton={() => actions.setCounter({ counter: 10 })}>
          set 10
        </Button>
        <Button onClickButton={() => actions.setCounter({ counter: 100 })}>
          set 100
        </Button>
        <Button onClickButton={actions.asyncIncrease}>Async Increase</Button>
        <Button onClickButton={actions.asyncError}>Async Error</Button>
      </div>
    </div>
  );
};
