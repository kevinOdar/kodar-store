import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/shared/Button';
import Colors from '../components/Colors';
import Amount from '../components/Amount';
import Gallery from '../components/Gallery';
import Stars from '../components/Stars';

import { formatPrice } from '../utils/helpers';

import styled from 'styled-components';

import { useGlobalContext as useGlobalContextProducts } from '../context/products_context';
import { useGlobalContext as useGlobalContextCart } from '../context/cart_context';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const Wrapper = styled.div`
  .product {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 4rem;

    .product-description {
      flex-basis: 50%;

      > *:not(.title) {
        margin: 1rem 0;
      }

      .title {
        text-align: start;
      }

      .price {
        color: var(--clr-primary-5);
      }

      .info {
        width: 55%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 0.5rem;

        h5 {
          letter-spacing: 0;
        }

        .value {
          font-weight: 400;
        }
      }
    }
  }

  @media screen and (min-width: 760px) {
    .product {
      display: flex;
      flex-direction: row;
    }
  }

  .page {
    min-height: calc(100vh - 10rem);
  }
`;

const SingleProduct = () => {
  const {
    fetchProduct,
    product,
    single_product_loading,
    single_product_error,
  } = useGlobalContextProducts();
  const { addToCart } = useGlobalContextCart();
  const [selectedColor, setSelectedColor] = useState('');
  const { id } = useParams();
  const history = useNavigate();
  const [productAmount, setProductAmount] = useState(1);

  useEffect(() => {
    fetchProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        history('/');
      }, 3000);
    }
  }, [single_product_error, history]);

  if (single_product_loading) {
    return <Spinner />;
  }

  if (single_product_error) {
    return <Error />;
  }

  const { name, price, description, company, stock, images, stars, reviews } =
    product;

  return (
    <>
      <Breadcrumb finalPath={name} />
      <Wrapper className="section section-center">
        <Button
          type="primary"
          size="medium"
          linkTo="/products"
          label="BACK TO PRODUCTS"
        />

        <div className="product">
          <Gallery images={images} />

          <div className="product-description">
            <h2 className="title">{name}</h2>

            <Stars stars={stars} reviews={reviews} />

            <h4 className="price">{formatPrice(price)}</h4>
            <p>{description}</p>

            <div className="info">
              <h5 className="available">Available :</h5>
              <h5 className="value">
                {stock > 0 ? 'In Stock' : 'Out of stock'}
              </h5>
              <h5 className="sku">SKU : </h5>
              <h5 className="value">{id}</h5>
              <h5 className="sku">Brand :</h5>
              <h5 className="value">{company}</h5>
            </div>
            <hr />
            <Colors setSelectedColor={setSelectedColor} />

            {stock > 0 && (
              <>
                <Amount
                  productAmount={productAmount}
                  setProductAmount={setProductAmount}
                  max={stock}
                />
                <Button
                  type="primary"
                  size="medium"
                  linkTo="/cart"
                  onClick={() =>
                    addToCart(product, selectedColor, productAmount)
                  }
                  label="ADD TO CART"
                />
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SingleProduct;
