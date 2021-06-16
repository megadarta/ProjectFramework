import React, { useEffect, useState } from 'react';
import '../../css/CardChekhout.css';
import produk1 from '../../asset/JAKET2.jpg'

function CardChekhout(kirim) {
    const [tampilkeranjang, setTampilKeranjang] = useState([]);
    const [bayar, setBayar] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3001/tampilkeranjang?iduser=${kirim.user?.id_user}`).then(res => res.json()).then(data => {
            setTampilKeranjang(data.results);
            console.log(data.results);
           
        }

        );
    }, [])


    return (
        <div>
        {
            tampilkeranjang.map((x) => 
        <div className="CardChekhout justify-content-center d-flex flex-lg-row flex-column">
            
            
            <div className="img-produk-beli d-flex justify-content-center">
                <div><img src={'http://localhost:3001/' + x.gambar} style={{width: 100}}></img></div>
            </div>
            <div className="keterangan-produk-beli mb-2 mt-2 ml-4 d-flex flex-column justify-content-center align-items-start">
                <div className="nama-produk-dibeli">
                    <p>{x.nama_produk}</p>
                </div>
                <div className="harga-dibeli">
                    <p>{x.harga}</p>
                </div>
                <div className="beli-button">
                    <div className="d-flex mt-2">
                        <div class="btn-group " role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-kuantitas btn-minus">-</button>
                            <input type="text" class="value-kuantitas" value="3"></input>
                            <button type="button" class="btn btn-kuantitas btn-plus">+</button>
                        </div>
                        <div className="ml-3 text-kuantitas-dibeli">
                            <div>Sub Total</div>
                            <div>{x.kuantitas_produk * x.harga}</div>
                            <div style={{display: "none"}}>{kirim.setBayar = kirim.setBayar + x.kuantitas_produk * x.harga}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 status-pembelian d-flex justify-content-center">
                <div>Belum dibayar</div>
            </div>
            </div>
            )}
            </div>
    );
}

export default CardChekhout;