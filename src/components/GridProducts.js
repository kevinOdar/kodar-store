import styled from 'styled-components';
import Product from './Product';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

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

    .product-descr {
      display: none;
    }

    a {
      display: none;
    }
  }

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

const GridProducts = ({ products }) => <Wrapper>
  {products.map((product) => (
    <Product {...product} key={product.id} />
  ))}
</Wrapper>

export default GridProducts;
