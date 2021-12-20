import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import { CartContext } from '../../context/cart_context';
import { ProductContext } from '../../context/products_context';
import { mCartContext, mProductContext } from '../../utils/mock';
import SingleProductPage from '../SingleProductPage';
import '@testing-library/jest-dom/extend-expect';

describe('SingleProductPage test', () => {
  const renderSingleProductPage = (
    single_product_error,
    single_product_loading,
    isEmpty = false
  ) => {
    mProductContext.single_product_error = single_product_error;
    mProductContext.single_product_loading = single_product_loading;
    if (isEmpty) mProductContext.product.stock = 0;
    const history = createMemoryHistory();
    return render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <CartContext.Provider value={{ ...mCartContext }}>
          <Router location={history.location} navigator={history}>
            <SingleProductPage />
          </Router>
        </CartContext.Provider>
      </ProductContext.Provider>
    );
  };

  it('After an error occurred, the SingleProduct page will return to the home page, after 3 seconds', () => {
    const history = createMemoryHistory();
    mProductContext.single_product_error = true;

    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    history.push('/error');

    render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <CartContext.Provider value={{ ...mCartContext }}>
          <Router location={history.location} navigator={history}>
            <SingleProductPage />
          </Router>
        </CartContext.Provider>
      </ProductContext.Provider>
    );

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);

    expect(history.location.pathname).toBe('/');
  });

  it('Rendering when the product is still loading.', () => {
    renderSingleProductPage(false, true);
  });

  it('Should be able to add to the cart.', () => {
    renderSingleProductPage(false, false);
    userEvent.click(screen.getByText(/ADD TO CART/));
    expect(mCartContext.addToCart).toHaveBeenCalledTimes(1);
  });

  it("Should show the message 'out of stock' when the product stock it's 0", () => {
    renderSingleProductPage(false, false, true);
    expect(screen.getByText(/Out of stock/)).toBeInTheDocument();
  });
});
