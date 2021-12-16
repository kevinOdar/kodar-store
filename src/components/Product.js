import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import Button from './Button';

const Wrapper = styled.div``;

const Product = ({ id, image, name, price, description }) => {
  return (
    <Wrapper className="product">
      <div className="img-container">
        <img className="product-img" alt="product-img" src={image} />
        <Link to={`/products/${id}`}>
          <FaSearch />
        </Link>
      </div>

      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
        <p className="product-descr">{description.slice(0, 150) + '...'}</p>
        <Link to={`/products/${id}`}>
          <Button>DETAILS</Button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Product;
