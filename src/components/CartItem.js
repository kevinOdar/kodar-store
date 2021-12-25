import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useGlobalContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import Amount from './Amount';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 3rem 0;

  > *:first-child {
    flex-basis: 35%;
    text-align: start;
  }
  > * {
    flex-basis: 40%;
    text-align: center;
  }
  > *:last-child {
    flex-basis: 35%;
  }

  //! Revisar luego de crear test
  button {
    border: 0;
    background-color: white;

    svg {
      color: var(--clr-red-dark);
      font-size: 1.5rem;
    }
  }

  .item {
    display: flex;

    img {
      width: 100px;
    }

    .details {
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h5 {
        margin: 0.1rem 0;
      }
    }
  }

  .color {
    font-size: 0.8rem;
    span {
      width: 12px;
      height: 12px;
      display: inline-block;
      border-radius: 50%;
    }
  }

  .amount {
    > * {
      justify-content: center;
      column-gap: 1rem;
      svg {
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  .price {
    color: var(--clr-primary-5);
  }

  @media screen and (min-width: 760px) {
    > *:first-child {
      flex-basis: 40%;
    }
    > * {
      flex-basis: 15%;
      text-align: center;
    }
    > *:last-child {
      flex-basis: 5%;
    }
    .color {
      span {
        border-radius: 0.2rem;
      }
    }
  }
`;

const CartItem = ({
  id,
  name,
  price,
  image,
  stock,
  selectedColor,
  quantity,
}) => {
  const [productAmount, setProductAmount] = useState(quantity);
  const { removeItem, changeQuantityCartItem } = useGlobalContext();

  useEffect(() => {
    setProductAmount(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeItem]);

  return (
    <Wrapper>
      <div className="item">
        <img src={image} alt="cart-thumbnail" />
        <div className="details">
          <h5 className="bold">{name}</h5>
          <h5 className="color">
            Color:
            <span style={{ backgroundColor: selectedColor }}></span>
          </h5>
          <h5 className="small-price">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price show">{formatPrice(price)}</h5>
      <div className="amount">
        <Amount
          productAmount={productAmount}
          setProductAmount={setProductAmount}
          id={id}
          max={stock}
          selectedColor={selectedColor}
          changeQuantityCartItem={changeQuantityCartItem}
        />
      </div>
      <h5 className="subtotal show">{formatPrice(price * productAmount)}</h5>
      <button onClick={() => removeItem(id, selectedColor)}>
        <AiFillDelete />
      </button>
    </Wrapper>
  );
};

Amount.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  quantity: PropTypes.number,
  stock: PropTypes.number,
  selectedColor: PropTypes.string,
};

export default CartItem;
