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
              <><Navbar bg="dark-p3" variant='dark' expand="lg" collapseOnSelect style={{ backgroundColor: '#346751' }} className='flexSB'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/" style={{ color: "white" }}>Főoldal</Nav.Link>
                    <Nav.Link href="/Menu" style={{ color: "white" }}>Menü</Nav.Link>
                    <NavDropdown title="Továbbiak" style={{ color: "white" }} id="basic-nav-dropdown">
                      <NavDropdown.Item href="/">Kosár</NavDropdown.Item>
                      <NavDropdown.Item href="/">Galéria</NavDropdown.Item>
                      <NavDropdown.Divider />
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='justify-content-end'>
                  <Navbar.Text>
                  </Navbar.Text>
                </Navbar.Collapse>

              </Navbar>
               {/* <div className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604213410393-89f141bb96b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')", height: '400px' }}> 
                </div>  */}
              </>
              
            );
            
          }
        }