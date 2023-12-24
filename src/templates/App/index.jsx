import { useCounterContext } from '../../context/CounterContext';
import * as Styled from './styles';
import P from 'prop-types';

export const App = ({ children }) => {
  const [state, dispatch] = useCounterContext();

  return <Styled.Container>{children}</Styled.Container>;
};

App.propTypes = {
  children: P.node.isRequired,
};
