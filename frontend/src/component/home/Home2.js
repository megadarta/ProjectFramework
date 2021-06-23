import '../../css/Home.css';
import NavbarPage from '../NavbarPage';
import '../../css/Produk.css';
import CardProduk from './CardProduk';
import Corousel from './Corousel';
import PilihKategori from './PilihKategori';
import Footer from '../Footer';
import NavbarPage2 from '../NavbarPage2';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function Home2(kirim) {
    const history = useHistory();
    const [produks, getProduks] = useState([]);

    useEffect(() => {
            fetch('http://localhost:3001/produk').then(res => res.json()).then(data =>
            getProduks(data.results));
        
    }, [])

return (
    <div className="home">
        
        <NavbarPage2 />
        <Corousel />
        
        <div className="container">
        <PilihKategori />
        <div className="list-produk">
            <div className="d-flex justify-content-center judul-produk">PRODUK</div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            {
                    
                    produks.map((x) =>
                <div className="col"><CardProduk user={kirim.user}  x={x} /></div>
            
                        )}    </div>
            
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Home2;