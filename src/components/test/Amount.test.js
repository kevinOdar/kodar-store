import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Amount from '../Amount';
import '@testing-library/jest-dom/extend-expect';

//? m for mock
const mSelectedColor = jest.fn();
const mid = 'id';
const mChangeQuantityCartItem = jest.fn();
const mMaximumAmount = 5;

const createAmountComponent = (mDisplayedAmount, mSetProductAmount) => {
  return (
    <Amount
      productAmount={mDisplayedAmount}
      setProductAmount={mSetProductAmount}
      max={mMaximumAmount}
      id={mid}
      changeQuantityCartItem={mChangeQuantityCartItem}
      selectedColor={mSelectedColor}
    />
  );
};

//? I manually re-render the component because that is its father job
describe('When the user clicks the decrease icon, the amount will decrease.', () => {
  let mDecreasedAmount = 1;

  it('If the amount is different than 1, the amount will decrease.', async () => {
    let mDisplayedAmount = 3;

    const mSetProductAmount = jest.fn((decrease) => {
      mDisplayedAmount = decrease(mDisplayedAmount);
    });

    const { rerender } = render(
      createAmountComponent(mDisplayedAmount, mSetProductAmount)
    );

    const decreaseButton = screen.getAllByRole('icon')[0];

    userEvent.click(decreaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    userEvent.click(decreaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    expect(mSetProductAmount).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('heading')).toHaveTextContent(mDecreasedAmount);
  });

  it("If the amount is 1, the amount won't decrease.", async () => {
    let mDisplayedAmount = 1;
    const mSetProductAmount = jest.fn((decrease) => {
      mDisplayedAmount = decrease(mDisplayedAmount);
    });

    const { rerender } = render(
      createAmountComponent(mDisplayedAmount, mSetProductAmount)
    );

    const decreaseButton = screen.getAllByRole('icon')[0];

    userEvent.click(decreaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    userEvent.click(decreaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    expect(mSetProductAmount).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('heading')).toHaveTextContent(mDecreasedAmount);
  });
});

describe('When the user click the increase icon, the amount will increase', () => {
  let mIncreasedAmount = 5;

  it("If the displayed amount is different than the maximum, the amount won't increase.", async () => {
    let mDisplayedAmount = 3;

    const mSetProductAmount = jest.fn((increase) => {
      mDisplayedAmount = increase(mDisplayedAmount);
    });

    const { rerender } = render(
      createAmountComponent(mDisplayedAmount, mSetProductAmount)
    );

    const increaseButton = screen.getAllByRole('icon')[1];

    userEvent.click(increaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    userEvent.click(increaseButton);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    expect(mSetProductAmount).toHaveBeenCalledTimes(2);
    expect(screen.getByRole('heading')).toHaveTextContent(mIncreasedAmount);
  });

  it("If the displayed amount is the maximum, the amount won't increase.", async () => {
    let mDisplayedAmount = 5;

    const mSetProductAmount = jest.fn((increase) => {
      mDisplayedAmount = increase(mDisplayedAmount);
    });

    const { rerender } = render(
      createAmountComponent(mDisplayedAmount, mSetProductAmount)
    );

    userEvent.click(screen.getAllByRole('icon')[1]);

    rerender(createAmountComponent(mDisplayedAmount, mSetProductAmount));

    expect(mSetProductAmount).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('heading')).toHaveTextContent(mIncreasedAmount);
  });
});

describe('Changing items quantity', () => {
  let mDisplayedAmount = 3;
  const mSetProductAmount = jest.fn((increase) => {
    mDisplayedAmount = increase(mDisplayedAmount);
  });

  it('setProductAmount was called when the component was rendered with an id', () => {
    render(
      <Amount
        productAmount={mDisplayedAmount}
        max={5}
        setProductAmount={mSetProductAmount}
        id={mid}
        changeQuantityCartItem={mChangeQuantityCartItem}
        selectedColor={mSelectedColor}
      />
    );

    expect(mChangeQuantityCartItem).toHaveBeenCalledTimes(1);
  });

  it("setProductAmount wasn't called when the component was rendered without an id", () => {
    render(
      <Amount
        productAmount={mDisplayedAmount}
        max={5}
        setProductAmount={mSetProductAmount}
        changeQuantityCartItem={mChangeQuantityCartItem}
        selectedColor={mSelectedColor}
      />
    );

    expect(mChangeQuantityCartItem).toHaveBeenCalledTimes(0);
  });
});
