import { Link } from 'react-router-dom';
import Button from './shared/Button';

const EmptyCart = () => <div className="page-100  text-center">
  <h1>Your cart is empty</h1>
  <Link to="/products">
    <Button type='primary' size='medium' label='FILL IT' />
  </Link>
</div>

export default EmptyCart;
