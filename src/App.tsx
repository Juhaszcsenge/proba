import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.css'
import Fooldal from './Page/Fooldal';

class App extends Component {
  render(): React.ReactNode {
      return <div>
               <Header/> 
               <Fooldal/>
              {/* <Routes>
        <Route path='/'  element={<Fooldal></Fooldal>} />
        <Route path='Hibajelentes' element={<Hibajelentes></Hibajelentes>}  />
        <Route path='Karakterek' element={<Karakterek></Karakterek>}  />
      </Routes> */}
      {/* <Footer/> */}
      </div>
  }
}

export default App;

