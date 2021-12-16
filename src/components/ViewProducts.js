import { useGlobalContext } from '../context/filter_context';
import GridProducts from './GridProducts';
import ListProducts from './ListProducts';

const ViewProducts = () => {
  const { grid_view, filtered_products } = useGlobalContext();
  if (grid_view === false) {
    return <ListProducts products={filtered_products} />;
  }
  return <GridProducts products={filtered_products} />;
};

export default ViewProducts;
