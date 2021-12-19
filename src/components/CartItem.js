import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useGlobalContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import Amount from './Amount';
import PropTypes from 'prop-types'

const CartItem = ({
  id,
  name,
  price,
  images,
  stock,
  selectedColor,
  quantity,
}) => {
  const [productAmount, setProductAmount] = useState(quantity);
  const { removeItem, changeQuantityCartItem } = useGlobalContext();

  useEffect(() => {
    setProductAmount(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removeItem]);

  return (
    <article className="cart-item">
      <div className="item">
        <img src={images[0].thumbnails.large.url} alt="cart-thumbnail" />
        <div className="details">
          <h5 className="bold">{name}</h5>
          <h5 className="color">
            Color:
            <span style={{ backgroundColor: selectedColor }}></span>
          </h5>
          <h5 className="small-price">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price show">{formatPrice(price)}</h5>
      <div className="amount">
        <Amount
          productAmount={productAmount}
          setProductAmount={setProductAmount}
          id={id}
          max={stock}
          selectedColor={selectedColor}
          changeQuantityCartItem={changeQuantityCartItem}
        />
      </div>
      <h5 className="subtotal show">{formatPrice(price * productAmount)}</h5>
      <button onClick={() => removeItem(id, selectedColor)}>
        <AiFillDelete />
      </button>
    </article>
  );
};

Amount.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
  quantity: PropTypes.number,
  stock: PropTypes.number,
  selectedColor: PropTypes.string,
}

export default CartItem;
