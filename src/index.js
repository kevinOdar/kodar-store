import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { SidebarProvider } from './context/sidebar_context';
import { CartProvider } from './context/cart_context';
import { FilterProvider } from './context/filter_context';

ReactDOM.render(
  <SidebarProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </SidebarProvider>,

  document.getElementById('root')
);
