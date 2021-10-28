import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.5rem;
  }

  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`;

const Products = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </Wrapper>
  );
};

export default Products;
