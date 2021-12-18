import '@testing-library/jest-dom/extend-expect';
import Gallery from '../Gallery';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mProductContext } from '../../utils/mock';

describe('Gallery test', () => {
  it('Changing an image selecting another', () => {
    const firstProduct = mProductContext.featured_products[0];
    render(<Gallery images={firstProduct.images} />);
    const mainImage = screen.getByAltText('main');
    expect(mainImage).toBeInTheDocument();
    userEvent.click(screen.getByAltText(firstProduct.images[3].filename));
    expect(mainImage).toHaveAttribute(
      'src',
      firstProduct.images[3].url
    );
  });

  it('Rendered without images', () => {
    render(<Gallery />);
  });
});
