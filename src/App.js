import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import VendingMachine from './VendingMachine'
import Chocolate from './Chocolate'
import Soda from './Soda'
import Chips from './Chips'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <VendingMachine /> */}
      <Routes>
        <Route exact path='/' element={<VendingMachine />}/>
        <Route exact path='/chips' element={<Chips />}/>
        <Route exact path='/soda' element={<Soda />}/>
        <Route exact path='/chocolate' element={<Chocolate />}/>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
