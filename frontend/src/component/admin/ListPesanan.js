import React, { useState, useEffect } from 'react';
import '../../css/ListPesanan.css';
import NavbarAdmin from './NavbarAdmin';
import { Button } from 'react-bootstrap';

function ListPesanan() {
    const [tampilpes, setTampilpes] = useState([]);
    const [tampilstatus, setTampilstatus] = useState([]);
    const [status, setUbahStatus] = useState([]);
    const [stts, setStatus] = useState([]);
    const [id, setid] = useState([]);



    useEffect(() => {
        fetch('http://localhost:3001/tampilpes').then(res => res.json()).then(data =>
            setTampilpes(data.results)
        );
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/tampilstatus',).then(res => res.json()).then(data =>
            setTampilstatus(data.results)
        );
    },[])

    function ubahstatus(){
        fetch('http://localhost:3001/ubahstatus', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: stts, id_transaksi:  id})
        }).then(res => res.json()).then(data =>
            setUbahStatus(data.results)
        )
    }

    return (
        <div className="d-flex">
            <div class="navbaradmin">
                <NavbarAdmin />
            </div>
            <div class="kanan-admin-pesanan">
                <div className="tabel-pesanan">
                    <div class="table-responsive">
                        <div class="table-wrapper">
                            <div class="table-title">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h2>List <b>Pesanan</b></h2>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-pesanan">
                                <thead className="thead-pesanan">
                                    <tr>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Pesanan</th>
                                        <th>Bukti Pembayaran</th>
                                        <th>Status Pembayaran</th>
                                        <th>Ubah Status</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody-pesanan">
                                    {
                                        tampilpes.map((x) =>

                                            <tr>
                                                <td>{x.nama_user}</td>
                                                <td>{x.email}</td>
                                                <td>{x.alamat}</td>
                                                <td>{x.listproduk}</td>
                                                <td>{x.file_bayar}</td>
                                                <td>{x.nama_status}</td>
                                                <td>
                                                    <Button  onClick={e => {
                                                                            console.log(x.id_transaksi)
                                                                            fetch('http://localhost:3001/ubahstatus', {
                                                                                method: "POST",
                                                                                headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                },
                                                                                body: JSON.stringify({ id_transaksi:  x.id_transaksi})
                                                                            }).then(res => res.json()).then(data =>
                                                                                console.log(data.results)
                                                                            )
                                                                            window. location. reload(true)
                                                                        }}>VERIFIKASI
                                                        
                                                    </Button>

                                                   
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPesanan;