import React from 'react';
import '../css/Konfirmasi.css';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import NavbarPage from './NavbarPage';
import verif from '../asset/verif.png';
function Konfirmasi() {
return (
    <div>
        <NavbarPage />
    <div className="container">
    <div className="konfirmasi d-flex flex-column justify-content-center align-items-center">
        <div className="konfir">
        <div className="atas-konfirmasi"></div>
        <div className="cverif">
            <img src={verif} className="verif"></img>
        </div>
        <div className="text-konfirmasi">
            <p>Terima kasih!</p>
            <p>Pesananmu akan segera diproses</p>
        </div>
        <div className="btn-konfir-class">
            <a href="/">
                <Button className="btn-konfir" style={{ width: "100px", backgroundColor:"#B36A40", border:"#B36A40"}}>OK</Button>
            </a>
        </div>
        </div>
    </div>
    </div>
        <Footer />
    </div>
);
}

export default Konfirmasi;