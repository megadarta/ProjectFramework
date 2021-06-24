import React, { useState, useEffect } from 'react';
import '../../css/Pembayaran.css';
import satu from '../../asset/satu.png';
import dua from '../../asset/dua.png';
import tiga from '../../asset/tiga.png';
import beli1 from '../../asset/JAKET2.jpg';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';

function Pembayaran(kirim) {
    const [alamat, setAlamat] = useState();
    const [tampilco, setTampilCO] = useState([]);
    const urlParams = new URLSearchParams(window.location.search);
    const iduser = urlParams.get('iduser');
    var bayar = 0;
    var ongkir = 10000;
    const image = React.createRef();

    useEffect(() => {
        fetch(`http://localhost:3001/tampilco?iduser=${iduser}`).then(res => res.json()).then(data => {
            setTampilCO(data.results);
            console.log(data.results);

        }

        );
    }, [])

    function imageHandler(e) {
        e.preventDefault();
        const imageInput = image.current.files[0];
        console.log(tampilco);
        var formData = new FormData();
        formData.append('image', imageInput);
        formData.append('id_user', kirim.user.id_user);
        formData.append('tampilproduk', tampilco);
        fetch(`http://localhost:3001/api/image`, {
            method: 'POST',
            body: formData 
        }).then(res => res.json()).then(data => {
            console.log(data)
        });
    }
    return (
        <div className="full">
            <NavbarPage user={kirim.user} />
            <div className="container d-flex flex-lg-row flex-column    ">
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
                        <textarea class="form-control textarea-alamat" placeholder="Isikan alamat" onChange={e => setAlamat(e.target.value)}></textarea>
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
                        {
                            tampilco.map((x) =>
                                <div className="d-flex card-list">
                                    <img src={'http://localhost:3001/' + x.gambar} className="produk-bayar"></img>
                                    <div className="ml-4">
                                        <div className="nama-produk-beli">{x.nama_produk}</div>
                                        <div className="jumlah-produk-beli">Jumlah : {x.kuantitas_produk}</div>
                                        <div className="total-produk-beli">Total : {x.harga}</div>

                                        <div display="none">{bayar = bayar + (x.kuantitas_produk * x.harga)}</div>
                                    </div>
                                </div>
                            )}
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

                </div>

                {/* kanan */}
                <form encType="multipart/form-data" onSubmit={imageHandler}>
                    <div className="kanan-bayar">
                        <div>
                            <div className="kanan-atas"></div>
                            <div className="card-info" style={{fontSize:"14px"}}>
                                <div className="detail-pembayaran">Detail Pembayaran</div>
                                <hr></hr>
                                <div className="ongkos-kirim" style={{fontSize:"14px"}}>Ongkos Kirim : Rp {ongkir}</div>
                                <div className="total-seluruh" style={{fontSize:"14px"}}>Total Keseluruhan : Rp {bayar + ongkir}</div>
                                <hr></hr>
                                <div className="upload-bayar">
                                    <input type="file" name="image" ref={image} />
                                </div>
                                <a href="/konfirmasi">
                                    <Button className="btn-beli align-center" style={{ width: "50%", backgroundColor:"#B36A40", border:"#B36A40" }} >BAYAR</Button>
                                </a>
                            </div>
                        </div>

                        <div className="bawah-kanan">
                            <div className="info-bank-atas"></div>
                            <div className="info-bank-bawah" style={{fontSize:"14px"}}>
                                <span>Pembayaraan dapat dilakukan di :</span>
                                <ul>
                                    <li>BRI : 192-909-000-999 ( a.n Ngethrift )</li>
                                    <li>Mandiri : 9898-76879-899 (a.n Ngethrift )</li>
                                    <li>BCA : 1298-989-999-888 ( a.n Ngethrift )</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;