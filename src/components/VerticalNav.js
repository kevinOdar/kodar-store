import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Colors from '../components/ColorsWithParameter';
import { formatPrice } from '../utils/helpers';

const Wrapper = styled.div`
  height: 100vh;
  /* width: 20vw; */
  flex-basis: 20%;

  label {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }

  select {
    display: block;
  }

  p {
    margin-bottom: 0;
  }

  form {
    margin: 1rem 0;
  }

  h5 {
    margin-bottom: 0.4rem;
  }

  .search {
    margin-top: 0;

    input {
      background-color: var(--clr-grey-10);
      padding: 0.6rem;
      border: 0;
      letter-spacing: var(--spacing);
    }
  }

  .company {
    select {
      border: 0;
      letter-spacing: var(--spacing);
      background-color: var(--clr-grey-10);
      text-transform: capitalize;
    }
  }

  [type='checkbox'] {
    margin: 0 0.5rem;
  }

  button {
    padding: 0.2rem 0.5rem;
    text-transform: lowercase;
    display: block;
  }

  .color-icon {
    font-size: medium;

    > svg {
      margin: 0 0.2rem;
    }
  }

  li {
    margin: 0.3rem 0;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
    color: var(--clr-grey-5);
    text-underline-offset: 6px;
    letter-spacing: 0.1rem;
    font-size: small;
  }

  .colors {
    li {
      display: inline-block;
      margin-bottom: 0.3rem;
      margin-top: 0;
    }
  }

  .selected {
    text-decoration: underline;
    opacity: 1;
  }

  .not-selected {
    opacity: 0.6;
  }
`;

const VerticalNav = ({
  options: { categories, companies, colors, highestPrice },
  selection,
  changeFilters,
  clearFilters,
}) => {
  const refCheckbox = useRef(null);

  useEffect(() => {
    refCheckbox.current.checked = selection.shipping;
  });

  return (
    <Wrapper>
      <form className="search">
        <input
          type="text"
          placeholder="Search"
          value={selection.searchedName}
          onChange={(e) =>
            changeFilters({
              ...selection,
              searchedName: e.target.value,
            })
          }
        />
      </form>

      <ul className="category">
        <h5>Category</h5>
        {[...categories].map((category, index) => (
          <li
            className={
              selection.selectedCategory === category
                ? 'selected'
                : 'not-selected'
            }
            key={index}
            onClick={(e) =>
              changeFilters({ ...selection, selectedCategory: category })
            }
          >
            {category}
          </li>
        ))}
      </ul>

      <form className="company">
        <label htmlFor="companies">Company</label>
        <select
          name="companies"
          id="companies"
          onChange={(e) =>
            changeFilters({
              ...selection,
              selectedCompany: e.target.value,
            })
          }
          value={selection.selectedCompany}
        >
          {[...companies].map((company, index) => (
            <option value={company} key={index}>
              {company}
            </option>
          ))}
        </select>
      </form>

      <div className="colors">
        <h5>Colors</h5>
        <li
          className={
            selection.selectedColor === 'all' ? 'selected' : 'not-selected'
          }
          onClick={() => changeFilters({ ...selection, selectedColor: 'all' })}
        >
          All
        </li>
        <Colors
          className="color-icon"
          colors={[...colors]}
          changeFilters={changeFilters}
          selection={selection}
        />
      </div>

      <form className="price">
        <label htmlFor="price">Price</label>
        <p>{formatPrice(selection.selectedPrice)}</p>
        <input
          type="range"
          name="price"
          id="price"
          min="0.00"
          max={highestPrice}
          step="1.00"
          value={selection.selectedPrice}
          onChange={(e) =>
            changeFilters({
              ...selection,
              selectedPrice: parseInt(e.target.value),
            })
          }
        />
      </form>

      <form className="shipping">
        <label htmlFor="shipping">Free Shipping</label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          ref={refCheckbox}
          onClick={(e) =>
            changeFilters({ ...selection, shipping: e.target.checked })
          }
        />
      </form>
      {/*  */}
      <div onClick={() => clearFilters()}>
        <Button>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};

export default VerticalNav;
