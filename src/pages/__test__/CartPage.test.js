import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { CartContext } from '../../context/cart_context';
import { mCartContext } from '../../utils/mock';
import CartPage from '../CartPage';

describe('CartPage test', () => {
  const renderCartPage = (isEmpty = false) => {
    const history = createMemoryHistory();
    if (isEmpty) mCartContext.products = [];
    return render(
      <CartContext.Provider value={{ ...mCartContext }}>
        <Router location={history.location} navigator={history}>
          <CartPage />
        </Router>
      </CartContext.Provider>
    );
  };
  it('Should execute the function clear the cart when we click on the button', () => {
    renderCartPage();
    userEvent.click(screen.getByText(/Clear shopping cart/));
    expect(mCartContext.clearCart).toHaveBeenCalledTimes(1);
  });

  it("Should render when in the cart aren't any products", () => {
    renderCartPage(true);
  });
});
