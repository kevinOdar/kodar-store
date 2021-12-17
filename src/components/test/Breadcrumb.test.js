import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Breadcrumb from '../Breadcrumb';
import { Router } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

//? m for mock
describe('Breadcrumb test', () => {
  const renderRouter = (mPath) => {
    const history = createMemoryHistory();
    //! Used for this ==> "Error: Uncaught [Error: useHref() may be used only in the context of a <Router> component.]"
    render(
      <Router location={history.location} navigator={history}>
        <Breadcrumb finalPath={mPath} />
      </Router>
    );
  };

  it('Rendering the Breadcrumb for a specific product', () => {
    const mPath = 'Modern Poster';
    renderRouter(mPath);

    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('home');
    expect(screen.getAllByRole('link')[1]).toHaveTextContent('/ products');
    expect(screen.getAllByRole('heading')[2]).toHaveTextContent(
      '/ Modern Poster'
    );
  });

  it('Rendering the Breadcrumb for the About page', () => {
    const mPath = 'about';
    renderRouter(mPath);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('home');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('/ about');
  });

  it('Rendering the Breadcrumb for the products page', () => {
    const mPath = 'products';
    renderRouter(mPath);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('home');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('/ products');
  });

  it('Rendering the Breadcrumb for the cart page', () => {
    const mPath = 'cart';
    renderRouter(mPath);

    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getAllByRole('link')[0]).toHaveTextContent('home');
    expect(screen.getAllByRole('heading')[1]).toHaveTextContent('/ cart');
  });
});
