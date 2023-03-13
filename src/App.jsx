import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasketContext from './Contexts/Basket';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Products';
import Navbar from './Component/Navbar';


const App = () => {

  return (
    <>
    <BasketContext.Provider value={[]}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Router>
    </BasketContext.Provider>
    </>
  )
}

export default App;
