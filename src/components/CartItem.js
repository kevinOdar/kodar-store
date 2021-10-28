import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useGlobalContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import Amount from './Amount';

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
          // productAmount={quantity}
          productAmount={productAmount}
          setProductAmount={setProductAmount}
          id={id}
          max={stock}
          selectedColor={selectedColor}
          changeQuantityCartItem={changeQuantityCartItem}
        />
      </div>
      {/* <h5 className="subtotal show">{formatPrice(price * quantity)}</h5> */}
      <h5 className="subtotal show">{formatPrice(price * productAmount)}</h5>
      <button onClick={() => removeItem(id, selectedColor)}>
        <AiFillDelete />
      </button>
    </article>
  );
};

export default CartItem;
