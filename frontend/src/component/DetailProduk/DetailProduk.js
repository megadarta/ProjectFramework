import React from 'react';
import '../../css/DetailProduk.css';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import produk1 from "../../asset/JAKET2.jpg"
import CardProduk from '../home/CardProduk';
import {Button} from 'react-bootstrap';

function DetailProduk() {
    return (
        <div>
            <NavbarPage />
            <div className="container">
                <div className="detail-produk d-flex flex-column flex-lg-row">
                    <div className="img-detail-produk">
                        <img src={produk1}></img>
                    </div>
                    <div className="list-detail-produk">
                        <div className="card-detail-atas"></div>
                        <div className="nama-produk-detail">
                            <p>JAKET KECE</p>
                        </div>
                        <div className="harga-detail">
                            <p>RP. 30.000</p>
                        </div>
                        <div className="beli-detail">
                            <div className="text-kuantitas">Kuantitas</div>
                            <div className="d-flex mt-2">
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-kuantitas btn-minus">-</button>
                                    <input type="text" class="value-kuantitas" value="3"></input>
                                    <button type="button" class="btn btn-kuantitas btn-plus">+</button>
                                </div>
                                <div className="ml-3 text-kuantitas">
                                    <div>Sub Total</div>
                                    <div>Rp. 90.000</div>
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
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                        <div className="col"><CardProduk /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DetailProduk;