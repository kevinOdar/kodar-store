import styled from 'styled-components';
import Product from './Product';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  padding: 2rem 0;
  .product {
    display: flex;
    flex-direction: row;
    align-items: center;

    .img-container {
      flex-basis: 33%;
    }

    .product-description {
      flex-basis: 67%;
    }
  }
  .img-container {
    /* position: relative; */

    .product-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    /* &:hover {
      .product-img {
        filter: brightness(0.55);
        transition: filter 0.6s;
      }

      svg {
        display: block;
      }
    } */

    svg {
      display: none;
      /* position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      color: white;
      font-size: xx-large;
      background-color: var(--clr-primary-5);
      padding: 0.3rem;
      border-radius: 50%; */
    }
  }

  .product-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2rem;
    > * {
      margin: 0.4rem 0;
    }

    p {
      letter-spacing: var(--spacing);
      /* margin-bottom: 0; */
    }

    .product-name {
      color: var(--clr-grey-1);
      font-weight: bolder;
      text-transform: capitalize;
      font-size: 1.5rem;
    }

    .product-price {
      color: var(--clr-primary-6);
      font-weight: bolder;
    }

    .product-descr {
      font-size: 0.8rem;
    }

    button {
      padding: 0.25rem 0.5rem;
      font-size: 0.5rem;
    }
  }
`;

const ListProducts = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </Wrapper>
  );
};

export default ListProducts;
