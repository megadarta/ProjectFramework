import React from 'react';
import { Form, Navbar, Nav, FormControl, NavDropdown, InputGroup, Button, Image } from 'react-bootstrap';
import gambar from '../asset/logo2.png';
import gambartas from '../asset/keranjang.png';
import logouser from '../asset/logouser.png';
import '../css/Navbar.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function NavbarPage(kirim) {
    
    const history = useHistory();

    function logout(){
        sessionStorage.removeItem("user");
    }
    function klikkeranjang(){
        if(sessionStorage.length!=0){        
            console.log(sessionStorage.length);
            // swal("susses!", "Anda harus login terlebih dahulu", "error");
            history.push(`/chekout?iduser=${kirim.user.id_user}`);
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
                    width="200"
                    className="d-inline-block align-top mx-3"
                    alt="DOSAR"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline className=" mx-auto">
                    <FormControl type="text" placeholder="Search" className="searchtxt searchbar"/>
                    <a href="/"><Button className="searchbtn searchbar" style={{border: "#B36A40"}}>Go</Button></a>
                </Form>
                     <Nav className="mx-auto">
                     <Nav.Link href="/chekout" className="d-flex align-items-center mr-5">
                                        <img
                                            src={gambartas}
                                            width="35px"
                                            height="30px"
                                            className="d-inline-block align-top"
                                            alt="DOSAR"
                                        />
                                        <a className="ml-2" style={{ position: "relative" }} href="/chekout">
                                            {/* <p className="m-0"><b>Kantong Belanja</b></p> */}
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
                                    <div className="username p-3">
                                        Jihan
                                    </div>
                                    <NavDropdown title=
                                            { <Image width="40" height="40" src={logouser} roundedCircle /> }
                                            id="basic-nav-dropdown">    
                                        <NavDropdown.Item href="/transactions">Riwayat Transaksi</NavDropdown.Item>
                                        <NavDropdown.Item href="/login" >Logout</NavDropdown.Item>
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