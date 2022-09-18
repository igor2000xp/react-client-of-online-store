import React, { Component } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import PdpCard from './UI/pages/product-cards/pdp-card/pdp-card';
import PlpCard from './UI/pages/product-cards/plp-card/plp-card';
import MiniCart from './UI/pages/product-cards/minicart-pages/mini-cart';
import NoMatch from './UI/pages/no-match/no-match';
import MainPage from './UI/pages/main-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="category/:categoryId" element={<MainPage />} />
          <Route path="/" element={<Navigate replace to="category/:all" />} />
          <Route
            path="junior-react-client"
            element={<Navigate replace to="/category/:all" />}
          />
          <Route path="pdp/:productId" element={<PdpCard />} />
          <Route path="cart" element={<PlpCard />} />
          <Route path="mini-cart" element={<MiniCart />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}

export default App;
