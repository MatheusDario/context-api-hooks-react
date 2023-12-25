import P from 'prop-types';

export const Button = ({ children, onClickButton }) => {
  return <button onClick={onClickButton}>{children}</button>;
};

Button.propTypes = {
  children: P.node.isRequired,
  onClickButton: P.func.isRequired,
};
