import React from 'react';
import {
  RiLayoutGridFill,
  RiLayoutGridLine,
  RiFileListLine,
  RiFileListFill,
} from 'react-icons/ri';
import styled from 'styled-components';
import Breadcrumb from '../components/Breadcrumb';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import VerticalNav from '../components/VerticalNav';
import { useGlobalContext as useGlobalContextProducts } from '../context/products_context';
import { useGlobalContext as useGlobalContextFilter } from '../context/filter_context';
import ViewProducts from '../components/ViewProducts';

const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  .products-container {
    flex-basis: 80%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      /* padding-bottom: 1rem; */

      .icons {
        font-size: x-large;

        > div {
          display: none;
        }

        .active {
          display: block;
        }
      }

      p {
        margin: 0;
      }

      hr {
        width: 35vw;
      }

      .sort {
        select {
          display: inline-block;
          height: 100%;
          text-transform: capitalize;
          font-size: large;
          border: 0;
          padding-left: 0.4rem;
        }
      }
    }
  }
`;

const ProductsPage = () => {
  const { products_loading, products_error } = useGlobalContextProducts();
  const {
    filtered_products,
    options,
    selection,
    changeFilters,
    clearFilters,
    setGridview,
    setListview,
    grid_view,
  } = useGlobalContextFilter();

  const listCriteries = [
    'price (lowest)',
    'price (highest)',
    'name (a - z)',
    'name (z - a)',
  ];

  if (products_loading) return <Spinner />;

  return (
    <>
      <Breadcrumb finalPath="products" />
      <Wrapper className="section-center">
        <VerticalNav
          options={options}
          selection={selection}
          changeFilters={changeFilters}
          clearFilters={clearFilters}
        />

        <div className="products-container">
          <div className="header">
            <div className="icons">
              <div className={grid_view ? 'active' : ''}>
                <RiLayoutGridFill />
                <RiFileListLine onClick={() => setListview()} />
              </div>
              <div className={!grid_view ? 'active' : ''}>
                <RiLayoutGridLine onClick={() => setGridview()} />
                <RiFileListFill />
              </div>
            </div>
            <p>{filtered_products.length} Products Found</p>
            <hr />
            <form className="sort">
              <label htmlFor="criteries">Sort By</label>
              <select name="criteries" id="criteries">
                {listCriteries.map((critery, index) => (
                  <option value={critery} key={index}>
                    {critery}
                  </option>
                ))}
              </select>
            </form>
          </div>
          {products_error ? <Error /> : <ViewProducts />}
        </div>
      </Wrapper>
    </>
  );
};

export default ProductsPage;
