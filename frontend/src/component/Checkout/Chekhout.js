import React, { useState , useEffect } from 'react';
import '../../css/Chekhout.css';
import NavbarPage from '../NavbarPage';
import { Button } from 'react-bootstrap';
import Footer from '../Footer';
import CardChekhout from './CardChekhout';

function Chekhout(kirim) {

    const [tampilkeranjang, setTampilKeranjang] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const iduser = urlParams.get('iduser');
    var bayar = 0;

    useEffect(() => {
        fetch(`http://localhost:3001/tampilkeranjang?iduser=${iduser}`).then(res => res.json()).then(data => {
            setTampilKeranjang(data.results);
            console.log(data.results);

        }

        );
    }, [])

    return (
        <div>
            <NavbarPage user={kirim.user} />
            <div className="container chekout">
                <div className="back mb-1"><a href="/" className="back-co">Kembali</a></div>
                <div className="d-flex flex-column justify-content-center ">
                    <div className="co-atas d-flex justify-content-center align-items-center" style={{fontSize:"20px"}}>
                        DAFTAR BELANJA
                    </div>
                    <div className="list-dibeli">
                        <div className="produk-dibeli d-flex justify-content-center">
                            <div>
                                {
                                    tampilkeranjang.map((x) =>
                                        <div className="CardChekhout justify-content-center d-flex flex-lg-row flex-column">
                                            <div className="img-produk-beli d-flex justify-content-center">
                                                <div><img src={'http://localhost:3001/' + x.gambar} style={{ width: 100 }}></img></div>
                                            </div>
                                            <div className="keterangan-produk-beli mb-2 mt-2 ml-4 d-flex flex-column justify-content-center align-items-start">
                                                <div className="nama-produk-dibeli">
                                                    <p>{x.nama_produk}</p>
                                                </div>
                                                <div className="harga-dibeli" style={{fontSize:"14px"}}>
                                                    <p>Rp {x.harga}</p>
                                                </div>
                                                <div className="beli-button">
                                                    <div className="d-flex mt-2">
                                                        <div className="text-kuantitas-dibeli">
                                                            <div>Sub Total: Rp {x.kuantitas_produk * x.harga}</div>
                                                            <div display="none">Total: Rp {bayar = bayar + (x.kuantitas_produk * x.harga)}</div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="status-pembelian d-flex justify-content-center">
                                                <div>Kuantitas : {x.kuantitas_produk}</div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="harga-co d-flex justify-content-between">
                    <div className="ml-4 mt-3 mb-3">
                        <div className="mt-2">Total Pembelian : Rp {bayar}</div>
                    </div> 
                    <div className="mt-3 mb-3 mr-4">
                        <Button href={`/pembayaran?iduser=${kirim.user?.id_user}`} className="btn-co" style={{ width: "100%", backgroundColor: "#B36A40", border: "#B36A40" }}>CHECKOUT</Button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Chekhout;