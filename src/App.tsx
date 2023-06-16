import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css'
// import Fooldal from './Page/Fooldal';
import Hero from './Page/Hero/Hero';
import Header from './Component/Header/Header';
import { Card } from 'react-bootstrap';
import AboutCard from './Page/about/AboutCars';

class App extends Component {
  render(): React.ReactNode {
      return <div>
               <Header/> 
               <Hero />
               <AboutCard/>
               {/* <Fooldal/> */}
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

