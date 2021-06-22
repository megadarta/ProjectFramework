import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import gambar from '../../asset/ONESET1.jpg';
import '../../css/CardProduk.css';
// import swal from 'sweetalert';
import { useHistory } from 'react-router';

function CardProduk(kirim) {
    const history = useHistory();
    const [hasiltotal, setHasiltotal] = useState();
    const [jumlahbeli, setJumlahBeli] = useState(1);

    function cekbeli(e) {

        if (sessionStorage.length != 0) {

            swal("Berhasil!", "Barang dimasukkan di keranjang", "success");
            history.push(`/chekout?iduser=${kirim.user.id_user}`);

                e.preventDefault();
             
        
                fetch('http://localhost:3001/inputkeranjang', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id_user: kirim.user.id_user, id_produk: kirim.x.id_produk, kuantitas_produk: jumlahbeli })
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    // kirim.setUser(kirim.user);
                    history.push(`/chekout?iduser=${kirim.user.id_user}`);
                });
            
        }
        else {
            swal("Error!", "Anda harus login terlebih dahulu", "error");
        }
    }

    function tambahjumlah() {
        setJumlahBeli(jumlahbeli + 1);
        setHasiltotal((jumlahbeli + 1) * kirim.x.harga);
    }

    function kurangjumlah() {
        if (jumlahbeli > 1) {
            setJumlahBeli(jumlahbeli - 1);
            setHasiltotal((jumlahbeli - 1) * kirim.x.harga);
        }
    }

    return (
        <div className="d-flex">

            <div className="d-flex card-kirim">
                        <Card className="product" style={{width:"250px"}}>
                            <a href={`/detail-produk?idproduk=${kirim.x.id_produk}`}>
                                <Card.Img variant="top" src={'http://localhost:3001/' + kirim.x.gambar} className="gambar-kirim" style={{height: "200px", objectFit: "cover"}} />
                            </a>
                            <Card.Body>
                                <Card.Title className="text-truncate m-0">
                                    <a href={`/detail-produk?idproduk=${kirim.x.id_produk}`} style={{ fontWeight: "600", fontSize: "12px", color: 'black' }}>{kirim.nama_produk}</a>
                                </Card.Title>
                                <Card.Text className="mt-4">
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-kuantitas btn-minus" onClick={kurangjumlah}>-</button>
                                        <input type="text" class="value-kuantitas" Value={jumlahbeli}></input>
                                        <button type="button" class="btn btn-kuantitas btn-plus" onClick={tambahjumlah}>+</button>
                                    </div>
                                    <b style={{ fontWeight: "600", fontSize: "14px", color: 'black' }}>Rp {kirim.x.harga}</b>
                                </Card.Text>
                                <Button className="btn-beli" style={{ width: "100%", backgroundColor: "#B36A40", border: "#B36A40"}} onClick={cekbeli}>Beli</Button>
                            </Card.Body>
                        </Card>
                 
            </div>

        </div>
    );
}

export default CardProduk;