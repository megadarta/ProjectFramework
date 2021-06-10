import React from 'react';
import { Form, Navbar, Nav, FormControl, NavDropdown, InputGroup, Button, Image } from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import gambartas from '../asset/shopping-bag-icon.png';
import mega from '../asset/user.svg';
import '../css/Navbar.css';

function NavbarPage() {
    return (
        <Navbar className="p-3 dosar-nav" bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/" className="">
                Ngethrift
                {/* <img
                    src={gambar}
                    width="150"
                    className="d-inline-block align-top mx-2"
                    alt="DOSAR"
                /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className=" mx-auto">
                    <FormControl type="text" placeholder="Search" className="searchtxt searchbar"/>
                    <a href="/"><Button className="searchbtn searchbar">Search</Button></a>
                </Form>
                
                     <Nav className="mx-auto">
                                    <Nav.Link href="/cart" className="d-flex align-items-center mr-5">
                                        <img
                                            src={gambartas}
                                            width="30px"
                                            height="35px"
                                            className="d-inline-block align-top"
                                            alt="DOSAR"
                                        />
                                        <a className="ml-2" style={{ position: "relative" }}>
                                            <p className="m-0"><b>Kantong Belanja</b></p>
                                            <div className="d-flex justify-content-center align-items-center" style={{ 
                                                position: "absolute", 
                                                left: "-20px",
                                                top: "15px",
                                                backgroundColor: "red",
                                                borderRadius: "20px",
                                                color: "white",
                                                width: "24px"
                                            }}>
                                                
                                            </div> 
                                        </a>
                                    </Nav.Link>
                                    <NavDropdown title=
                                            { <Image width="35" src={mega} roundedCircle /> }
                                            id="basic-nav-dropdown">
                                      
                                        <NavDropdown.Item href="/transactions">Riwayat Transaksi</NavDropdown.Item>
                                        <NavDropdown.Item href="/" >Logout</NavDropdown.Item>
                                        {/* <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item> */}
                                    </NavDropdown>
                                </Nav>
                            {/* :   <Nav className="mx-auto">
                                    <Nav.Link href="/login" className="mr-4">
                                        <Button variant="ijo-outline" style={{width: "90px"}}>Login</Button>
                                    </Nav.Link>
                                    <Nav.Link href="/register"><Button variant="ijo">Register</Button></Nav.Link>
                                </Nav>
                        : <div style={{width: "269.33px"}} className="mx-auto"></div> */}
                    {/* } */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPage;