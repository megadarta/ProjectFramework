import React, { useState, useEffect } from 'react';
import '../css/Konfirmasi.css';
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import NavbarPage from './NavbarPage';
import verif from '../asset/verif.png';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function Konfirmasi(kirim) {
    const urlParams = new URLSearchParams(window.location.search);
    const idtransaksi = urlParams.get('idtransaksi');
    const [tampilco, setTampilCO] = useState([]);
    const [datatransaksi, setDataTransaksi] = useState([]);
    // const [dataproduk, setDataProduk] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/ambiltransaksi?idtransaksi=${idtransaksi}`).then(res => res.json()).then(data => {
            setDataTransaksi(data.results);
            console.log(data.results);
        }
        );
    }, [])

    function simpantransaksi(){
            fetch(`http://localhost:3001/ambilproduknya?iduser=${datatransaksi[0].id_user}`)
            .then(res => res.json())
            .then(data => {
                var dataproduk = data.results;
                console.log(dataproduk)
                fetch('http://localhost:3001/inputproduktransaksi', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: dataproduk, id_transaksi: datatransaksi[0].id_transaksi })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    console.log(datatransaksi[0].id_user)
                    fetch(`http://localhost:3001/hapuskeranjang`,{
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({hapus: datatransaksi[0].id_user})
                    }).then(res => res.json()).then(data => {
                        // setDataTransaksi(data.results);
                        console.log(data.results);
                    })
                })
            }
            );     
            history.push(`/riwayat?idtransaksi=${datatransaksi[0].id_transaksi}`);
    }

return (
    <div>
        <NavbarPage />
    <div className="container">
    <div className="konfirmasi d-flex flex-column justify-content-center align-items-center">
        <div className="konfir">
        <div className="atas-konfirmasi"></div>
        <div className="cverif">
            <img src={verif} className="verif"></img>
        </div>
        <div className="text-konfirmasi">
            <p>Terima kasih!</p>
            <p>Pesananmu akan segera diproses</p>
        </div>
        <div className="btn-konfir-class">
            <Button className="btn-konfir" style={{ width: "100px" }} onClick={simpantransaksi}>OK</Button>
        </div>
        </div>
    </div>
    </div>
        <Footer />
    </div>
);
}

export default Konfirmasi;