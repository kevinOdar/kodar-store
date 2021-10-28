import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  padding: 3.5rem 0;

  .text-container {
    /* display: flex; */
    max-width: 75%;

    p {
      flex-basis: 57%;
      line-height: 2;
      max-width: 45em;
      color: var(--clr-grey-5);
    }

    form {
      flex-basis: 43%;
      align-self: center;

      > input {
        padding: 0.5rem 1rem;
        border: 2px solid var(--clr-black);
        border-right: 0;
        border-radius: 0.2rem 0 0.2rem 0.2rem;
        width: 75%;
        font-size: 1rem;
      }

      > button {
        width: 25%;
        padding: 0.6rem 0;
        border: 2px solid var(--clr-black);
        border-radius: 0.2rem 0.2rem 0.2rem 0;
        color: var(--clr-black);

        &:hover {
          color: var(--clr-white);
        }
      }
    }
  }

  @media screen and (min-width: 760px) {
    .text-container {
      display: flex;
      max-width: 100%;
      padding: 1rem 0;

      p {
        padding-right: 10rem;
      }
    }
  }
`;

const Newsletter = () => {
  return (
    <Wrapper className="section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form action="">
          <input type="text" placeholder="Enter Email" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Newsletter;
