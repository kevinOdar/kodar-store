import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  background-color: var(--clr-primary-10);
  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10rem;
  }

  button {
    padding: 0.6rem;
    margin: 1rem;
  }
`;

const Error = () => {
  return (
    <Wrapper className="page-100">
      <section className="title">
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Button>BACK HOME</Button>
      </section>
    </Wrapper>
  );
};

export default Error;
