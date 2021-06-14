import React from 'react';
import '../../css/CardChekhout.css';
import produk1 from '../../asset/JAKET2.jpg'

function CardChekhout() {
    return (
        <div className="CardChekhout justify-content-center d-flex flex-lg-row flex-column">
            <div className="img-produk-beli d-flex justify-content-center">
                <div><img src={produk1} style={{width: 100}}></img></div>
            </div>

            <div className="keterangan-produk-beli mb-2 mt-2 ml-4 d-flex flex-column justify-content-center align-items-start">
                <div className="nama-produk-dibeli">
                    <p>JAKET KECE</p>
                </div>
                <div className="harga-dibeli">
                    <p>RP. 30.000</p>
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
                            <div>Rp. 90.000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-3 status-pembelian d-flex justify-content-center">
                <div>Belum dibayar</div>
            </div>
        </div>
    );
}

export default CardChekhout;