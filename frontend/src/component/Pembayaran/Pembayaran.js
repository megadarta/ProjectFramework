import React from 'react';
import '../../css/Pembayaran.css';
import satu from '../../asset/satu.png';
import dua from '../../asset/dua.png';
import tiga from '../../asset/tiga.png';
import beli1 from '../../asset/JAKET2.jpg';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import {Button} from 'react-bootstrap';

function Pembayaran() {
    return (
        <div className="full">
            <NavbarPage />
            <div className="container d-flex flex-lg-row flex-column">
                {/* kiri  */}
                <div className="kiri-upload">
                    {/* satu */}
                    <div className="d-flex">
                        <div>
                            <img src={satu} className="icon-pembayaran"></img>
                        </div>
                        <div className="alamat align-self-center">
                            Alamat Pengiriman
                        </div>
                    </div>
                    {/* keterangan1 */}

                    <div className="isian-alamat">
                        <textarea class="form-control textarea-alamat" value="Lamongan" disabled></textarea>
                    </div>

                    {/* dua */}
                    <div className="d-flex">
                        <div>
                            <img src={dua} className="icon-pembayaran"></img>
                        </div>
                        <div className="alamat align-self-center">
                            Total Pesanan
                        </div>
                    </div>
                    {/* keterangan1 */}

                    <div className="isian-pesanan">
                        <div className="d-flex card-list">
                            <img src={beli1} className="produk-bayar"></img>
                            <div className="ml-4">
                                <div className="nama-produk-beli">Jaket</div>
                                <div className="jumlah-produk-beli">Jumlah : 3</div>
                                <div className="total-produk-beli">Total : 90.000</div>
                            </div>
                        </div>
                        <div className="d-flex card-list">
                            <img src={beli1} className="produk-bayar"></img>
                            <div className="ml-4">
                                <div className="nama-produk-beli">Jaket</div>
                                <div className="jumlah-produk-beli">Jumlah : 3</div>
                                <div className="total-produk-beli">Total : 90.000</div>
                            </div>
                        </div>
                        <div className="d-flex card-list">
                            <img src={beli1} className="produk-bayar"></img>
                            <div className="ml-4">
                                <div className="nama-produk-beli">Jaket</div>
                                <div className="jumlah-produk-beli">Jumlah : 3</div>
                                <div className="total-produk-beli">Total : 90.000</div>
                            </div>
                        </div>
                    </div>

                    {/* tiga */}
                    <div className="d-flex tiga">
                        <div>
                            <img src={tiga} className="icon-pembayaran"></img>
                        </div>
                        <div className="alamat align-self-center">
                            Upload Bukti pembayaran
                        </div>
                    </div>
                    {/* keterangan3 */}

                    <div className="upload-bayar">
                        <input type="file" className="file-up"></input>
                    </div>
                </div>

                {/* kanan */}
                <div className="kanan-bayar">
                    <div>
                    <div className="kanan-atas"></div>
                    <div className="card-info">
                        <div className="detail-pembayaran">Detail Pembayaran</div>
                        <hr></hr>
                        <div className="total-belanja">Total Belanja : Rp. 270.000</div>
                        <div className="ongkos-kirim">Ongkos Kirim : Rp. 10.000</div>
                        <hr></hr>
                        <div className="total-seluruh">Total Keseluruhan : Rp. 280.000</div>
                        <Button className="btn-beli mt-3 align-center" style={{ width: "50%" }}>BAYAR</Button>
                    </div>
                    </div>

                    <div className="bawah-kanan">
                        <div className="info-bank-atas"></div>
                        <div className="info-bank-bawah">
                            <span>Pembayaraan dapat dilakukan di :</span>
                            <ul>
                                <li>BRI : 192-909-000-999 ( a.n NgethriftYuk )</li>
                                <li>Mandiri : 9898-76879-899 (a.n NgethriftYuk )</li>
                                <li>BCA : 1298-989-999-888 ( a.n NgethriftYuk )</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;