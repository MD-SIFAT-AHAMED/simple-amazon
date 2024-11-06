import React from'react';
import './App.css';
import Header from "./Components/Header/Header";
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>

          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/iventory' element={<Inventory></Inventory>}></Route>
          <Route exact path='/' element={<Shop></Shop>} />
          <Route path='product/:productKey' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
