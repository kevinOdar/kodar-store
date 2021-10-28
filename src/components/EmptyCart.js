import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
const Wrapper = styled.div`
  button {
    padding: 0.5rem 0.7rem;
  }
`;

const EmptyCart = () => {
  return (
    <Wrapper className="page-100  text-center">
      <h1>Your cart is empty</h1>
      <Link to="/products">
        <Button>FILL IT</Button>
      </Link>
    </Wrapper>
  );
};

export default EmptyCart;
