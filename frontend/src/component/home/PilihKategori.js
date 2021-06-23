import React, { useEffect, useState } from 'react';
import '../../css/PilihKategori.css';
import baju from '../../asset/JAKET1.jpg';
import { Card } from 'react-bootstrap';

function PilihKategori() {

    const [kategori, getKategori] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/kategori').then(res => res.json()).then(data =>
            getKategori(data.results)
        );
    },[])
    
    return (

        <div className="Container PilihKategori ">

            <div className="d-flex justify-content-center judul-produk">KATEGORI</div>
            <div className="justify-content-center row row-cols-auto">
                {
                    kategori.map((y) =>
                        <div class="col col-kategori align-self-center d-flex justify-content-center">
                            <Card className="kategori align-center">
                                <a href="">
                                    <div className="d-flex">
                                        <div className="text-kategori text-center">
                                            {/* <Card.Text> */}
                                                <b className="text-center nama-kategori">{y.nama_kategori}</b>
                                            {/* </Card.Text> */}
                                        </div>
                                    </div>
                                </a>
                            </Card>
                        </div>



                    )
                }


            </div>
        </div>
    );
}

export default PilihKategori;