import React from 'react';
import '../../css/Chekhout.css';
import NavbarPage from '../NavbarPage';
import { Button } from 'react-bootstrap';
import Footer from '../Footer';
import CardChekhout from './CardChekhout';

function Chekhout() {
return (
    <div>
    <NavbarPage />
    <div className="container chekout">
        <div ><a href="/home" className="back-co">Kembali</a></div>
        <div className="d-flex flex-column justify-content-center ">
            <div className="co-atas d-flex justify-content-center align-items-center">
                Daftar Belanja
            </div>
            <div className="list-dibeli">
                <div className="produk-dibeli d-flex justify-content-center">
                    <CardChekhout />
                </div>
                <div className="produk-dibeli d-flex justify-content-center">
                    <CardChekhout />
                </div>
                <div className="produk-dibeli d-flex justify-content-center">
                    <CardChekhout />
                </div>
            </div>
        </div>
        
        <div className="harga-co d-flex justify-content-between">
            <div className="ml-3 mt-3 mb-3">
                <div>Total</div>
                <div>Rp. 270.000</div>
            </div>
            <div className="ml-3 mt-4 mb-3 mr-4">
                <Button className="btn-co" style={{ width: "100%" }}>CHEKHOUT</Button>
            </div>
        </div>

    </div>
    <Footer />
    </div>
);
}

export default Chekhout;