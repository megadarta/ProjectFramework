import React, { useState, useEffect } from 'react';
import '../../css/Home.css';
import NavbarPage from '../NavbarPage';
import '../../css/Produk.css';
import CardProduk from './CardProduk';
import Corousel from './Corousel';
import PilihKategori from './PilihKategori';
import Footer from '../Footer';

import { useHistory } from 'react-router';


function Home(kirim) {

    const history = useHistory();
    const [produk, getProduk] = useState([]);

    useEffect(() => {
        
        if (sessionStorage.length==0) {
            
            history.push("/home");
            
        
        }
        else{
            
        fetch('http://localhost:3001/produk').then(res => res.json()).then(data =>
        getProduk(data.results));
        }
    }, [])


    
return (
    <div className="home">
        
        <NavbarPage user={kirim.user}/>
        <Corousel />
        
        <div className="container">
        <PilihKategori />
        <div className="list-produk">
            <div className="d-flex justify-content-center judul-produk">PRODUK</div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" >
            {
                    produk.map((x) =>
                <div className="col"><CardProduk user={kirim.user} x={x} /></div>
            
            )}
            </div>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Home;