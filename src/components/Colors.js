import { useEffect, useState } from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import { useGlobalContext } from '../context/products_context';

const Wrapper = styled.div`
  width: 49%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .color-icon {
    font-size: x-large;

    > svg {
      margin: 0 0.3rem;
    }
  }
`;

const Colors = ({ setSelectedColor }) => {
  const {
    product: { colors },
  } = useGlobalContext();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  useEffect(() => {
    setSelectedColor(colors[selectedColorIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, selectedColorIndex]);

  return (
    <Wrapper>
      <h5>Colors :</h5>
      <div className="color-icon">
        {colors.map((color, index) =>
          selectedColorIndex !== index ? (
            <FaCircle
              style={{ color, opacity: 0.5 }}
              key={index}
              onClick={() => setSelectedColorIndex(index)}
              role='icon'
            />
          ) : (
            <FaCheckCircle key={index} style={{ color }} />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Colors;
