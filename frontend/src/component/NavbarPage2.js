import React from 'react';
import { Form, Navbar, Nav, FormControl, NavDropdown, InputGroup, Button, Image } from 'react-bootstrap';
import gambar from '../asset/logo.png';
import gambartas from '../asset/keranjang.png';
import mega from '../asset/user.svg';
import '../css/Navbar.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function NavbarPage2(kirim) {
    
    const history = useHistory();

    function logout(){
        sessionStorage.removeItem("user");
    }
    function klikkeranjang(){
        if(sessionStorage.length!=0){        
            swal("susses!", "Anda harus login terlebih dahulu", "error");
            // history.push(`/chekout?iduser=${kirim.user.id_user}`);
        }
        else{
            console.log(sessionStorage);
            swal("Error!", "Anda harus login terlebih dahulu", "error");
        }
    }
    return (
        <Navbar className="p-3 dosar-nav" expand="lg" sticky="top">
            <Navbar.Brand href="/" className="">
                {/* Ngethrift */}
                <img
                    src={gambar}
                    width="110"
                    className="d-inline-block align-top mx-3"
                    alt="DOSAR"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className=" mx-auto">
                    <FormControl type="text" placeholder="Search" className="searchtxt searchbar"/>
                    <a href="/"><Button className="searchbtn searchbar">Search</Button></a>
                </Form>
                
                     <Nav className="mx-auto">
                                    <Nav.Link onClick={klikkeranjang} className="d-flex align-items-center mr-5">
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
                                    {/* <div className="p-3">{kirim.user?.nama_user}</div> */}
                                    <div className="d-flex">
                                        <div>
                                            <Button href="/login">Login</Button>
                                        </div>
                                        <div>
                                            <Button href="/regis">Register</Button>
                                        </div>
                                    </div>
                                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarPage2;