import React from 'react'
import styled from 'styled-components'
import { ImSpinner9 } from 'react-icons/im';

const Div = styled.div`
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;

  .spinner {
    animation: spin infinite 2s linear;
    font-size: 150px;
    color: var(--clr-primary-3);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


const Spinner = () => {
  return (
    <Div>
      <ImSpinner9 className="spinner"></ImSpinner9>
    </Div>
  )
}

export default Spinner
