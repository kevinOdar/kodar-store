import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  border-radius: var(--radius);
  border: 0px;
  cursor: pointer;
  letter-spacing: var(--spacing);

  &.button-- {
    &primary {
      color: var(--clr-primary-10);
      background-color: var(--clr-primary-5);
    }
    &secondary {
      color: red;
      background-color: black;
    }
    &large {
      padding: 0.5rem 0.7rem;
    }
    &medium {
      padding: 0.2rem 0.3rem;
    }
  }

  :hover {
    background-color: var(--clr-primary-7);
    transition: var(--transition);
    color: var(--clr-primary-2);
  }
`;

const Button = ({ type, size, onClick, children }) => {
  return (
    <Wrapper className={`button--${type} button--${size}`}>{children}</Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string,
  // label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  onClick: undefined,
  children: '',
};

export default Button;
