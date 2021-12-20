import Button from './shared/Button';

const EmptyCart = () => <div className="page-100  text-center">
  <h1>Your cart is empty</h1>
  <Button type='primary' size='medium' linkTo="/products" label='FILL IT' />
</div>

export default EmptyCart;
