import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import gambar from '../../asset/ONESET1.jpg';
import'../../css/CardProduk.css';


function CardProduk() {
    const [produk, getProduk] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/produk').then(res => res.json()).then(data =>
            getProduk(data.results)
        )
    }, [])
    
    return (
        <div className="d-flex">
        {
            produk.map((x) => 
        <div className="card-produk">
            
        
            <Card className="product">
                <a href={`/detail-produk?idproduk=${x.id_produk}`}>
                    <Card.Img variant="top" src={'http://localhost:3001/' + x.gambar} className="gambar-produk" />
                </a>
                <Card.Body>
                    <Card.Title className="text-truncate m-0">
                        <a href={`/detail-produk?idproduk=${x.id_produk}`} style={{ fontWeight: "600", fontSize: "12px", color: 'black'}}>{x.nama_produk}</a>
                    </Card.Title>
                    <Card.Text className="mt-3">
                        <b style={{ fontWeight: "600", fontSize: "14px", color: 'black'}}>{x.harga}</b>
            </Card.Text>
                    <Button className="btn-beli" style={{ width: "100%" }}>Masukkan Keranjang</Button>

                    {/* <Button variant="ijo" className="btn-kantong" style={{ width: "100%" }} >+ Kantong</Button> */}
                    
                </Card.Body>
            </Card>
            
        </div>
        ) }
        </div>
    );
}

export default CardProduk;