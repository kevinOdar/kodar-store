import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/products_context';
import Spinner from './Spinner';
import Error from './Error';
import Products from './Products';

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  text-align: center;
  padding: 2rem 0;

  .title {
    padding: 4rem 0;

    .underline {
      height: 4px;
    }
  }

  button {
    margin: 2.5rem 0;
    padding: 0.5rem 0.9rem;
  }
`;

const FeaturedProducts = () => {
  const { products_loading, featured_products, products_error } =
    useGlobalContext();

  if (products_loading) {
    return <Spinner />;
  }

  if (products_error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>
        <Products products={featured_products.slice(0, 3)} />
        <Link to="/products">
          <Button>All products</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
