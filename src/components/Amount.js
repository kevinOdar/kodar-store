import React, { useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 0.3rem;

  > svg {
    cursor: pointer;
  }
  h2 {
    margin-bottom: 0;
  }
`;

const Amount = ({
  productAmount,
  setProductAmount,
  id,
  changeQuantityCartItem,
  max,
  selectedColor,
}) => {
  const decrease = (number) => {
    if (number === 1) return 1;
    else return productAmount - 1;
    // number === 1 ? 1 : productAmount - 1;
  };

  useEffect(() => {
    if (id) changeQuantityCartItem(id, selectedColor, productAmount);
  }, [productAmount]);

  return (
    <Wrapper>
      <FaMinus
        onClick={() =>
          setProductAmount(
            (prevValue) => (prevValue === 1 ? 1 : productAmount - 1)
            // decrease(prevValue)
          )
        }
        disabled={false}
      />
      <h2 className="number">{productAmount}</h2>
      <FaPlus
        onClick={() =>
          setProductAmount((prevValue) =>
            prevValue === max ? max : productAmount + 1
          )
        }
      />
    </Wrapper>
  );
};

export default Amount;
