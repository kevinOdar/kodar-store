import React, { useState, useEffect } from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useGlobalContext } from '../context/products_context';

const Div = styled.div`
  /* width: 49%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .color-icon { */
    font-size: x-large;
    /* display: inline-block;
    text-align: center; */
    display: inline-flex;

    > svg {
      margin: 0 0.3rem;
      cursor: pointer;
    }
  /* } */

  
`;

const Colors = ({ colors, selectedOptionColor, setSelectedOptionColor }) => {

  const [selectedColor, setSelectedColor] = useState(null);


  useEffect(() => {
    if (selectedOptionColor) {
      setSelectedColor(null)
    }
  }, [selectedOptionColor])

  return (
    // <Div>
    //   <h5>Colors :</h5>
    <Div className="color-icon">

      {colors.map((color, index) =>
        selectedColor !== index ? (
          <FaCircle
            style={{ color, opacity: 0.5 }}
            key={index}
            onClick={() => { setSelectedColor(index); setSelectedOptionColor(false) }}
          />
        ) : (
          <FaCheckCircle key={index} style={{ color }} />
        )
      )}
    </Div>
    // </Div>
  );
};

export default Colors;
