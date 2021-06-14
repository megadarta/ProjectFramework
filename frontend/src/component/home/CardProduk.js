import React from 'react';
import { Card, Button} from 'react-bootstrap';
import gambar from '../../asset/ONESET1.jpg';
import'../../css/CardProduk.css';

function CardProduk() {
    return (
        <div className="card-produk">
            <Card className="product">
                <a href="">
                    <Card.Img variant="top" src={gambar} className="gambar-produk" />
                </a>
                <Card.Body>
                    <Card.Title className="text-truncate m-0">
                        <a href="" style={{ fontWeight: "600", fontSize: "12px", color: 'black'}}>BAJU</a>
                    </Card.Title>
                    <Card.Text className="mt-3">
                        <b style={{ fontWeight: "600", fontSize: "14px", color: 'black'}}>Rp. 30.000</b>
            </Card.Text>
                    <Button className="btn-beli" style={{ width: "100%" }}>BELI</Button>

                    {/* <Button variant="ijo" className="btn-kantong" style={{ width: "100%" }} >+ Kantong</Button> */}
                    
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardProduk;