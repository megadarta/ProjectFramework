import React, { useEffect, useState } from 'react';
import '../../css/DetailProduk.css';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import produk1 from "../../asset/JAKET2.jpg"
import CardProduk from '../home/CardProduk';
import {Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

function DetailProduk() {
    const urlParams = new URLSearchParams(window.location.search);
    const idproduk = urlParams.get('idproduk');
    const [tampil, setTampil] = useState([]);

    const [jumlahbeli, setJumlahBeli] = useState(1);
    const [hasiltotal, setHasiltotal] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3001/tampil?idproduk=${idproduk}`).then(res => res.json()).then(data => {
        setTampil(data.results)
        setHasiltotal(data.results[0].harga);
        console.log(data.results)
    }
        
    );
    },[])

    function tambahjumlah(){
        setJumlahBeli(jumlahbeli+1);
    }
    function kurangjumlah(){
        if(jumlahbeli > 1 ){
        setJumlahBeli(jumlahbeli-1);
        }
    }
    return (
        <div>
            <NavbarPage />
            <div className="container">
                <div className="detail-produk d-flex flex-column flex-lg-row">
                    <div className="img-detail-produk">
                        <img className="img-detail-produk" src={'http://localhost:3001/' + tampil[0]?.gambar}></img>
                    </div>
                    <div className="list-detail-produk">
                        <div className="card-detail-atas"></div>
                        <div className="nama-produk-detail">
                            <p>{tampil[0]?.nama_produk}</p>
                        </div>
                        <div className="harga-detail">
                            <p>{tampil[0]?.harga}</p>
                        </div>
                        <div className="beli-detail">
                            <div className="text-kuantitas">Kuantitas</div>
                            <div className="d-flex mt-2">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-kuantitas btn-minus" onClick={kurangjumlah}>-</button>
                                    <input type="text" class="value-kuantitas" Value={jumlahbeli}></input>
                                    <button type="button" class="btn btn-kuantitas btn-plus" onClick={tambahjumlah}>+</button>
                                </div>
                                <div className="ml-3 text-kuantitas">
                                    <div>Sub Total</div>
                                    <div>{hasiltotal}</div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-beli-detail">
                            <Button className="btn-beli" style={{ width: "100%" }}>Masukkan Keranjang</Button>
                        </div>
                    </div>
                </div>
                <div className="list-produk">
                    <div className="d-flex justify-content-center judul-produk">PRODUK LAINNYA</div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                        <div className="col"><CardProduk /></div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduk;