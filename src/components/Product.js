import React from 'react';

import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

import styled from 'styled-components';

import { formatPrice } from '../utils/helpers';

const Wrapper = styled.div`
  .img-container {
    position: relative;

    .product-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    &:hover {
      .product-img {
        filter: brightness(0.55);
        transition: filter 0.6s;
      }

      svg {
        display: block;
      }
    }

    svg {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      /* top: 0; bottom: 0; left: 0; right: 0;
  margin: auto; */
      color: white;
      font-size: xx-large;
      background-color: var(--clr-primary-5);
      padding: 0.3rem;
      border-radius: 50%;
    }
  }

  .product-description {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;

    p {
      letter-spacing: var(--spacing);
    }

    .product-name {
      color: var(--clr-grey-1);
    }

    .product-price {
      color: var(--clr-primary-5);
    }
  }
`;

const Product = ({ id, image, name, price }) => {

  return (
    <Wrapper>
      <div className="img-container">
        <img
          className="product-img"
          alt="product-img"
          src={image}
        />
        <Link to={`/products/${id}`}>
          <FaSearch></FaSearch>
        </Link>
      </div>

      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
};

export default Product;
