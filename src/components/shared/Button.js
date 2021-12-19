import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
  border-radius: var(--radius);
  border: 0;
  cursor: pointer;
  letter-spacing: var(--spacing);
  margin: 1.5rem 0;
  color: var(--clr-primary-10);

  &.button-- {
    &primary {
      background-color: var(--clr-primary-5);
    }
    &secondary {
      background-color: black;
    }
    &large {
      padding: 1rem 2rem;
    }
    &medium {
      padding: 0.5rem 0.9rem;
    }
    &small {
      padding: 0.2rem 0.3rem;
    }
  }

  :hover {
    background-color: var(--clr-primary-7);
    transition: var(--transition);
    color: var(--clr-primary-2);
  }
`;

const Button = ({ type, size, onClick, label }) => {
  return (
    <Wrapper className={`button--${type} button--${size}`}>{label}</Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // children: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  onClick: undefined,
  label: '',
};

export default Button;
