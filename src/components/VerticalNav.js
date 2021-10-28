import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/products_context';
import Button from '../components/Button';
import Colors from '../components/ColorsWithParameter';

const Div = styled.div`
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
    /* letter-spacing: 0; */
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
`;

const VerticalNav = () => {
  const { products } = useGlobalContext();
  const companies = new Set();
  const categories = new Set();
  categories.add('All');
  companies.add('All');
  const colorsSet = new Set();
  products.forEach(({ company, category, colors }) => {
    categories.add(category);
    companies.add(company);
    colors.forEach((color) => {
      colorsSet.add(color);
    });
  });
  const [price, setPrice] = useState(1000);
  const [selectedOptionColor, setSelectedOptionColor] = useState(true);

  return (
    <Div>
      <form className="search">
        <input type="text" placeholder="Search" />
      </form>

      <ul className="category">
        <h5>Category</h5>
        {[...categories].map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <form className="company">
        <label htmlFor="companies">Company</label>
        <select name="companies" id="companies">
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
          style={{
            textDecoration: selectedOptionColor ? 'underline' : 'none',
          }}
          onClick={() => setSelectedOptionColor(true)}
        >
          All
        </li>
        <Colors
          className="color-icon"
          colors={[...colorsSet]}
          selectedOptionColor={selectedOptionColor}
          setSelectedOptionColor={setSelectedOptionColor}
        ></Colors>
      </div>

      <form className="price">
        <label htmlFor="price">Price</label>
        <p>${price}</p>
        <input
          type="range"
          name="price"
          id="price"
          min="0.00"
          max="3099.99"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </form>

      <form className="shipping">
        <label htmlFor="shipping">
          Free Shipping
        </label>
        <input type="checkbox" name="shipping" id="shipping" />
      </form>

      <Button>Clear Filters</Button>
    </Div>
  );
};

export default VerticalNav;
