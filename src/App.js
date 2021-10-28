import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
