import Colors from '../ColorsWithParameter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mFilterContext } from "./mock";

describe('Colors with parameters test', () => {
  it('Selecting another color', () => {
    const changeFilters = jest.fn();
    render(
      <Colors
        changeFilters={changeFilters}
        colors={mFilterContext.options.colors}
        selection={mFilterContext.selection}
      />
    );

    userEvent.click(screen.getAllByRole('icon')[1]);
    expect(changeFilters).toHaveBeenCalledTimes(1);
  });
});
