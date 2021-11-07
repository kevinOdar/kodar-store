import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SingleProduct, About, Home, Error } from './pages';
import { Footer, Header } from './components';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/products" element={<ProductsPage />} />

        <Route exact path="/cart" element={<CartPage />} />

        <Route exact path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
