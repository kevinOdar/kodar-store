import Colors from '../Colors';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductContext } from '../../context/products_context';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mProductContext } from "./mock";

describe('Colors test', () => {
  it('Selecting another color', () => {
    const setSelectedColor = jest.fn();
    const history = createMemoryHistory();
    render(
      <ProductContext.Provider value={{ ...mProductContext }}>
        <Router location={history.location} navigator={history}>
          <Colors setSelectedColor={setSelectedColor} />
        </Router>
      </ProductContext.Provider>
    );
    userEvent.click(screen.getAllByRole('icon')[0]);
    expect(setSelectedColor).toHaveBeenCalledTimes(2);
  });
});
