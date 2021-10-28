import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 5rem;
  background-color: var(--clr-black);
  text-align: center;
  padding: 1rem 0;

  p {
    margin: 0 0.1rem;
    color: var(--clr-white);
    letter-spacing: var(--spacing);

    span {
      color: var(--clr-primary-5);
    }
  }

  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    p {
      display: inline-block;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; 2021 <span>ComfySloth</span>
      </p>
      <p>All rights reserved</p>
    </Wrapper>
  );
};

export default Footer;
