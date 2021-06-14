import React from 'react';
import '../../css/PilihKategori.css';
import baju from '../../asset/JAKET1.jpg';
import { Card } from 'react-bootstrap';

function PilihKategori() {
    return (
        <div className="Container PilihKategori ">

            <div className="d-flex justify-content-center judul-produk">KATEGORI</div>
            <div className="  justify-content-center row row-cols-auto">
                <div class="col col-kategori">
                    <Card className="kategori">
                        <a href="">
                        <div className="d-flex">
                            <div>
                                <Card.Img variant="top" src={baju} className="img-kategori" />
                            </div>
                            <div className="text-kategori align-self-center">
                            <Card.Text>
                                <b>DEWASA</b>
                            </Card.Text>
                            </div>
                        </div>
                        </a>
                    </Card>
                </div>
                <div class="col col-kategori"><Card className="kategori">
                    <a href="">
                    <div className="d-flex">
                            <div>
                                <Card.Img variant="top" src={baju} className="img-kategori" />
                            </div>
                            <div className="text-kategori align-self-center">
                            <Card.Text>
                                <b>DEWASA</b>
                            </Card.Text>
                            </div>
                        </div>
                    </a>
                </Card></div>
                <div class="col col-kategori"><Card className="kategori">
                    <a href="">
                    <div className="d-flex">
                            <div>
                                <Card.Img variant="top" src={baju} className="img-kategori" />
                            </div>
                            <div className="text-kategori align-self-center">
                            <Card.Text>
                                <b>DEWASA</b>
                            </Card.Text>
                            </div>
                        </div>
                    </a>
                </Card></div>

            </div>
        </div>
    );
}

export default PilihKategori;