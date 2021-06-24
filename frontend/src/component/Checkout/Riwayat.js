import React, { useState , useEffect } from 'react';
import '../../css/Chekhout.css';
import NavbarPage from '../NavbarPage';
import { Button } from 'react-bootstrap';
import Footer from '../Footer';
import CardChekhout from './CardChekhout';

function Riwayat(kirim) {

    const [transaksi, setTransaksi] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const idtransaksi = urlParams.get('idtransaksi');
    var bayar = 0;

    useEffect(() => {
        fetch(`http://localhost:3001/transaksi?idtransaksi=${idtransaksi}`).then(res => res.json()).then(data => {
            setTransaksi(data.results);
            console.log(data.results);
        }
        );
    }, [])

    return (
        <div>
            <NavbarPage user={kirim.user} />
            <div className="container chekout">
                {/* <div ><a href="/home" className="back-co">Kembali</a></div> */}
                <div className="d-flex flex-column justify-content-center ">
                    <div className="co-atas d-flex justify-content-center align-items-center">
                        Daftar Checkout
                    </div>
                    <div className="list-dibeli">
                        <div className="produk-dibeli d-flex justify-content-center">
                            <div>
                                {
                                    transaksi.map((x) =>
                                        <div className="CardChekhout justify-content-center d-flex flex-lg-row flex-column">
                                            <div className="keterangan-produk-beli mb-2 mt-2 ml-4 d-flex flex-column justify-content-center align-items-start">
                                                <div className="nama-produk-dibeli">
                                                    <p>Nota Pembelian : {x.id_transaksi}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="status-pembelian d-flex justify-content-center">
                                                    <div>Status : {x.nama_status}</div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="harga-co d-flex justify-content-between">
                    <div className="ml-3 mt-3 mb-3">
                       
                    </div>
                    <div className="ml-3 mt-4 mb-3 mr-4">
                        <Button href="/" className="btn-co" style={{ width: "100%", backgroundColor: "#B36A40" }}>OKE</Button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Riwayat;