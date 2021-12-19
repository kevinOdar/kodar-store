import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/cart_context';
import CartItem from '../components/CartItem';
import { formatPrice } from '../utils/helpers';
import EmptyCart from '../components/EmptyCart';

const Wrapper = styled.div`
  h5 {
    margin-bottom: 0;
    color: var(--clr-grey-6);
    font-weight: 400;
  }

  .small-price {
    display: block;
    color: var(--clr-primary-5);
    font-weight: 700;
  }

  .cart-header {
    display: none;
    h5 {
      padding: 1.5rem 0;
    }
  }

  .border-bottom {
    border-bottom: 1px solid var(--clr-grey-6);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
  }

  .total-order-container {
    display: flex;
    width: 100%;
    justify-content: center;
    > div {
      display: flex;
      flex-direction: column;
      width: 50%;

      .total-order {
        border: 1px solid var(--clr-grey-6);
        display: inline-block;
        padding: 1rem 2rem;
        width: 100%;

        > * {
          width: 100%;
          margin: 0.8rem 0;
          display: flex;
          justify-content: space-between;

          > span {
            flex-basis: 40%;
          }
        }

        hr {
          margin: 1.5rem 0;
        }
      }
    }
  }

  .bold {
    font-size: 0.9rem;
    color: var(--clr-black);
    font-weight: 600;
  }

  .show {
    display: none;
  }

  @media screen and (min-width: 760px) {
    .small-price {
      display: none;
    }

    .cart-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;

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
    }

    .show {
      display: block;
    }

    .total-order-container {
      justify-content: end;
    }
  }
`;

const CartPage = () => {
  const listItem = ['Item', 'Price', 'Quantity', 'Subtotal', '    '];
  const { products, clearCart, subtotal, shipping } = useGlobalContext();
  return (
    <>
      {products.length !== 0 ? (
        <>
          <Breadcrumb finalPath={'cart'} />
          <Wrapper className="page-100 section-center">
            <div className="cart-header border-bottom">
              {listItem.map((item, index) => (
                <h5 key={index}>{item}</h5>
              ))}
            </div>
            <div className="border-bottom">
              {products.map((product, index) => (
                <CartItem {...product} key={index} />
              ))}
            </div>
            <div className="buttons">
              <Link to="/products">
                <Button
                  type="primary"
                  size="medium"
                  label="Continue Shopping"
                />
              </Link>
              <div onClick={clearCart}>
                <Button
                  type="secondary"
                  size="medium"
                  label="Clear Shopping Cart"
                />
              </div>
            </div>
            <div className="total-order-container">
              <div>
                <div className="total-order">
                  <p className="bold">
                    Subtotal : <span>{formatPrice(subtotal)}</span>
                  </p>
                  <h5>
                    Shipping Fee : <span>{formatPrice(shipping)}</span>
                  </h5>
                  <hr />
                  <h4>
                    Order Total :<span>{formatPrice(subtotal + shipping)}</span>
                  </h4>
                </div>
                <Button type="primary" size="medium" label="LOGIN" />
              </div>
            </div>
          </Wrapper>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartPage;
