import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css'
import Hero from './Page/Hero/Hero';
import Header from './Component/Header/Header';
import { Card } from 'react-bootstrap';
import AboutCard from './Page/about/AboutCars';
import Terapia from './Page/Terapia/Terapia';
import PriceCard from './Page/Price/PriceCard';
import Footer from './Component/Footer/Footer';
import Contact from './Page/Contact/Contact';


class App extends Component {
  render(): React.ReactNode {
      return <div>
               <Header/> 
               <Hero />
               <AboutCard/>
               <Terapia />
               <PriceCard />
               <Contact />
               <Footer />
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

