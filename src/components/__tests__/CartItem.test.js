import CartItem from '../CartItem';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { CartContext } from '../../context/cart_context';
import { createMemoryHistory } from 'history';
import { mCartContext, mProductContext, mFilterContext } from "../../utils/mock";

describe('Cart item test', () => {
  it('We can remove an item from the cart', () => {
    const quantity = 4;
    const history = createMemoryHistory();
    const firstProduct = mProductContext.featured_products[0];
    render(
      <CartContext.Provider value={{ ...mCartContext }}>
        <Router location={history.location} navigator={history}>
          <CartItem
            {...firstProduct}
            selectedColor={mFilterContext.selection.selectedColor}
            quantity={quantity}
          />
        </Router>
      </CartContext.Provider>
    );
    userEvent.click(screen.getByRole('button'));
    expect(mCartContext.removeItem).toHaveBeenCalledTimes(1);
  });
});
