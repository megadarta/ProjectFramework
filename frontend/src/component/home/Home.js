import React from 'react';
import '../../css/Home.css';
import NavbarPage from '../NavbarPage';
import '../../css/Produk.css';
import CardProduk from './CardProduk';
import Corousel from './Corousel';
import PilihKategori from './PilihKategori';
import Footer from '../Footer';

function Home() {
return (
    <div className="home">
        
        <NavbarPage />
        <Corousel />
        
        <div className="container">
        <PilihKategori />
        <div className="list-produk">
            <div className="d-flex justify-content-center judul-produk">PRODUK</div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col"><CardProduk /></div>
            </div>
            
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Home;