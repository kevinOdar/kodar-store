import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: var(--clr-primary-5);
  color: var(--clr-primary-10);


  border-radius: var(--radius);
  border: 0px;
  cursor: pointer;
  letter-spacing: var(--spacing);

  :hover {
    background-color: var(--clr-primary-7);
    transition: var(--transition);
    color: var(--clr-primary-2);
  }
`;


const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
