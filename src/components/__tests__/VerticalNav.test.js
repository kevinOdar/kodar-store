import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VerticalNav from '../VerticalNav';
import { mFilterContext } from "../../utils/mock";

describe('VerticalNav test', () => {
  const mChangeFilters = jest.fn();
  const mClearFilters = jest.fn();

  beforeEach(() => {
    render(
      <VerticalNav
        options={mFilterContext.options}
        selection={mFilterContext.selection}
        changeFilters={mChangeFilters}
        clearFilters={mClearFilters}
      />
    );
  });

  it('Typing a new searched word', () => {
    userEvent.type(screen.getByDisplayValue(/searchedWord/), 'newSearchedWord');
    expect(mChangeFilters).toHaveBeenCalledTimes(15);
  });

  it('Clicking on clear filters', () => {
    userEvent.click(screen.getByText(/Clear Filters/));
    expect(mClearFilters).toHaveBeenCalledTimes(1);
  });

  it('Selecting a category', () => {
    userEvent.click(screen.getByText('Office'));
    expect(mChangeFilters).toHaveBeenCalledTimes(1);
  });

  it('Selecting a company', () => {
    userEvent.selectOptions(screen.getByRole('combobox'), 'marcos');
    expect(mChangeFilters).toHaveBeenCalledTimes(1);
  });

  it('Selecting a color', () => {
    userEvent.click(screen.getByText('All'));
    expect(mChangeFilters).toHaveBeenCalledTimes(1);

    const mAnotherSelection = {
      selectedColor: 'all',
    };

    render(
      <VerticalNav
        options={mFilterContext.options}
        selection={mAnotherSelection}
        changeFilters={mChangeFilters}
        clearFilters={mClearFilters}
      />
    );
  });

  it('Selecting price', () => {
    fireEvent.change(screen.getByRole(/slider/), {
      target: { value: 109199 },
    });

    expect(mChangeFilters).toHaveBeenCalledTimes(1);
  });

  it('Clicking on shipping', () => {
    userEvent.click(screen.getByRole(/checkbox/));
    expect(mChangeFilters).toHaveBeenCalledTimes(1);
  });
});
