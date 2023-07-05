import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Badge, Button } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';

// import { MDBNavbarLink, MDBIcon } from 'mdb-react-ui-kit';
// import {BsCart2} from 'react-icons/bs'

/**Kijelentkezés ami a bejelentkezésnél a felhasználóhoz generált tokennel azonosítja, majd törli a tokent. Az adatbázisban megmarad, így könnyen betud majd jelentkezni legközelebb.  */
export default class  Header extends Component {
 
             
/**Bootsrapes Header */
    render(){

            return(
              <Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect style={{backgroundColor: '#07372A', justifyContent: "center", alignItems: "center"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: '#07372A', justifyContent: "center", alignItems: "center"}}>
                  <Nav className="ml-auto">
                    {/* <Nav.Link href="/" style={{color:"white"}}>Főoldal</Nav.Link> */}
                    <Nav.Link href="/About" style={{color:"white"}} >Rólam</Nav.Link>
                    <Nav.Link href="/Terapia" style={{color:"white"}} >Terápák</Nav.Link>
                    <Nav.Link href="/Price" style={{color:"white"}} >Árak</Nav.Link>
                    <Nav.Link href="/Contact" style={{color:"white"}} >Kapcsolat</Nav.Link>
                  </Nav>  
                </Navbar.Collapse>
              </Navbar>
              
            );
            
          }
        }
           
               
          
            
             
              
            