import { render } from '@testing-library/react';
import Newsletter from "../Newsletter";

describe('Newsletter test', () => {
  it('Rendering the Newsletter component', () => {
    render(<Newsletter />)
  })
})