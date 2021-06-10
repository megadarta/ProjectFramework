import React from 'react';
import '../css/Home.css';
import NavbarPage from './NavbarPage';
import '../css/Produk.css';
import CardProduk from './CardProduk';

function Home() {
return (
    <div className="home">
        <NavbarPage />
        <div className="list-produk">
            <div className="d-flex justify-content-center judul-produk"><b>PRODUK</b></div>
            <div className="d-flex flex-md-row flex-column justify-content-center cardproduk-home">
                <div className="mt-2 ml-2"><CardProduk /></div>
                <div className="mt-2 ml-2"><CardProduk /></div>
                <div className="mt-2 ml-2"><CardProduk /></div>
                <div className="mt-2 ml-2"><CardProduk /></div>
                <div className="mt-2 ml-2"><CardProduk /></div>
                
            </div>
        </div>
    </div>
);
}

export default Home;