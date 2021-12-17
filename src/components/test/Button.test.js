import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button test', () => {
  it('The Button exists', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('The Button has text', () => {
    const mText = 'Test text';
    render(<Button children={mText} />);
    expect(screen.getByRole('button')).toHaveTextContent(mText);
  });
});