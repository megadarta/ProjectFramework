import React, { useState, useEffect } from 'react';
import '../../css/Pembayaran.css';
import satu from '../../asset/satu.png';
import dua from '../../asset/dua.png';
import tiga from '../../asset/tiga.png';
import beli1 from '../../asset/JAKET2.jpg';
import NavbarPage from '../NavbarPage';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import swal from 'sweetalert';

function Pembayaran(kirim) {
    const [tampilco, setTampilCO] = useState([]);
    const [tampiluser, setTampilUser] = useState([0]);
    const urlParams = new URLSearchParams(window.location.search);
    const iduser = urlParams.get('iduser');
    const [alamat, setAlamat] = useState();
    const [transaksi, setTransaksi] = useState([0]);
    var bayar = 0;
    var ongkir = 10000;
    const image = React.createRef();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/tampilco?iduser=${iduser}`).then(res => res.json()).then(data => {
            setTampilCO(data.results);
        });
    }, [])
    useEffect(() =>
    {
        fetch(`http://localhost:3001/tampiluser?iduser=${iduser}`).then(res => res.json()).then(data => {
            setTampilUser(data.results);
        });
    }, [])

    function tambahalamat(){
        fetch('http://localhost:3001/tambahalamat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ alamat: alamat, id_user: kirim.user.id_user })
                }).then(res => res.json()).then(data => {
                    // console.log(data)
                    
                    swal("Success!", "Alamat berhasil ditambahkan", "success");
                });
    }

    function imageHandler(e) {
        e.preventDefault();
        const imageInput = image.current.files[0];
        // console.log(tampilco);
        var formData = new FormData();
        formData.append('image', imageInput);
        formData.append('id_user', kirim.user.id_user);
        formData.append('tampilproduk', tampilco);
        formData.append('alamat', alamat);
        if(image.current.files[0]==null && tampiluser[0].alamat == null){
            swal("Error!", "Anda harus upload bukti pembayaran dan mengisi alamat terlebih dahulu", "error");       
        }
        
        else if(image.current.files[0]==null){
            swal("Error!", "Anda harus upload bukti pembayaran terlebih dahulu", "error");       
        }
        else if(tampiluser[0].alamat == null){
            swal("Error!", "Anda harus mengisikan alamat terlebih dahulu", "error");
        }
        else{   
            fetch(`http://localhost:3001/api/image`, {
                method: 'POST',
                body: formData 
            }).then(res => res.json()).then(data => {
                console.log(data.results);
            })
            .then(fetch(`http://localhost:3001/tampiltransaksi?iduser=${iduser}`).then(res => res.json()).then(data => {
                console.log(data.results);
                // console.log(data.results);
                if(data.results.length==1){
                    history.push(`/konfirmasi?idtransaksi=${data.results[0].id_transaksi}`);
                }
                else{
                    history.push(`/konfirmasi?idtransaksi=${data.results[data.results.length-1].id_transaksi}`);
                }
                
            }));
            }
            // console.log(transaksi);
            
        }
    
    return (
        <div className="full">
            <NavbarPage user={kirim.user} />
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
                        <button onClick={tambahalamat}>SIMPAN ALAMAT</button>
                    </div>
                    {/* keterangan1 */}

                    <div className="isian-alamat">
                        <textarea class="form-control textarea-alamat" placeholder="isikan alamat" onChange={e => setAlamat(e.target.value)} value={tampiluser[0].alamat}></textarea>
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
                            <div className="card-info">
                                <div className="detail-pembayaran">Detail Pembayaran</div>
                                <hr></hr>
                                <div className="total-belanja">Total Belanja : Rp. {bayar}</div>
                                <div className="ongkos-kirim">Ongkos Kirim : Rp. {ongkir}</div>
                                <hr></hr>
                                <div className="total-seluruh">Total Keseluruhan : Rp. {bayar + ongkir}</div>
                                <div className="upload-bayar">
                                    <input type="file" name="image" ref={image} />
                                </div>
                                <Button className="btn-beli mt-3 align-center" style={{ width: "50%" }} type="submit">BAYAR</Button>
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
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Pembayaran;