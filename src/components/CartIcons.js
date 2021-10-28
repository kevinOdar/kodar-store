import React from 'react';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/sidebar_context';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  h4 {
    display: flex;
    padding: 0.5rem 1.3rem;
    margin: 0;
    font-weight: 400;
  }

  svg {
    font-size: 1.5rem;
  }

  .cart {
    .cart-amount {
      position: relative;

      ::after {
        position: absolute;
        background-color: var(--clr-primary-5);
        color: var(--clr-grey-10);
        display: block;
        border-radius: 100%;
        content: '0';
        padding: 0.4rem;
        font-size: small;
        top: -50%;
        right: -55%;
      }
    }
  }

  .login {
    > * {
      margin: 0 0.5rem;
    }
  }
`;

const CartIcons = () => {
  const { closeSidebar } = useGlobalContext();
  return (
    <Wrapper className="active">
      <Link to="/cart" onClick={closeSidebar}>
        <h4 className="cart">
          Cart
          <div className="cart-amount">
            <FaShoppingCart></FaShoppingCart>
          </div>
        </h4>
      </Link>
      <Link to="/cart" onClick={closeSidebar}>
        <h4 className="login">
          Login <FaUserPlus></FaUserPlus>
        </h4>
      </Link>
    </Wrapper>
  );
};

export default CartIcons;
