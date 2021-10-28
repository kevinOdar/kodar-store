import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
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

  .cart-body {
    .cart-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;

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

      margin: 3rem 0;

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
          /* background-color: var(--clr-red-dark);  */
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
    }
  }

  .border-bottom {
    border-bottom: 1px solid var(--clr-grey-6);
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    button {
      padding: 0.4rem 0.3rem;
    }

    div {
      button:nth-child(1) {
        background-color: black;
      }
    }
  }

  .total-order-container {
    display: flex;
    width: 100%;
    justify-content: center;
    > div {
      display: flex;
      flex-direction: column;
      width: 50%;

      > button {
        margin: 1rem 0;
        padding: 0.5rem 0;
      }

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

    .cart-body {
      .cart-item {
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
    }

    .show {
      display: block;
    }

    .total-order {
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
            <div className="cart-body border-bottom">
              {products.map((product, index) => (
                <CartItem {...product} key={index} />
              ))}
            </div>
            <div className="buttons">
              <Link to="/products">
                <Button>Continue Shopping</Button>
              </Link>
              <div onClick={clearCart}>
                <Button>Clear Shopping Cart</Button>
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
                    Order Total :{' '}
                    <span>{formatPrice(subtotal + shipping)}</span>
                  </h4>
                </div>
                <Button>LOGIN</Button>
              </div>
            </div>
            )
          </Wrapper>
        </>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartPage;
