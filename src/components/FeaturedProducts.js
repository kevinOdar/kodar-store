import styled from 'styled-components';
import Button from './shared/Button';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/products_context';
import Spinner from './Spinner';
import Error from './Error';
import GridProducts from './GridProducts';

const Wrapper = styled.div`
  background-color: var(--clr-grey-10);
  text-align: center;
  padding: 3.5rem 0;

  .title {
    padding-bottom: 3.5rem;

    .underline {
      height: 4px;
    }
  }
`;

const FeaturedProducts = () => {
  const { products_loading, featured_products, products_error } =
    useGlobalContext();

  if (products_loading) {
    return <Spinner />;
  }

  if (products_error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Featured Products</h2>
          <div className="underline"></div>
        </div>
        <GridProducts products={featured_products.slice(0, 3)} />
        <Link to="/products">
          <Button type='primary' size='medium' label='All products' />
        </Link>
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
