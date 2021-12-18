import { render } from '@testing-library/react';
import Stars from '../Stars';

describe('Stars test', () => {
  it('Rendering with empty stars', () => {
    const mStars = 3.3;
    const mReviews = 33;
    render(<Stars stars={mStars} reviews={mReviews} />);
  });

  it('Rendering with a half star', () => {
    const mStars = 3.7;
    const mReviews = 33;
    render(<Stars stars={mStars} reviews={mReviews} />);
  });
});