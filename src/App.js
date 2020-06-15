import React from 'react';
import './App.css';
import {Link} from "react-router-dom";
import Header from './header.js';
import Footer from './footer.js';
import Prvi from './components/prvi.js';
import Drugi from './components/drugi.js';
import Treci from './components/treci.js';
import Cetvrti from './components/cetvrti.js';
import Peti from './components/peti.js';
import {
Route,
BrowserRouter as Router


}from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header></Header>
    <Router>
    <Route exact path="/" component={Prvi}></Route>
    <Route path="/drugi" component={Drugi}></Route>
    <Route path="/treci" component={Treci}></Route>
    <Route path="/cetvrti" component={Cetvrti}></Route>
    <Route path="/peti" component={Peti}></Route>
  </Router>
  <Footer></Footer>
 
    </div>
  );
}

export default App;
