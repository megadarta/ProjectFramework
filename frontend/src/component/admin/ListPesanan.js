import React, { useState , useEffect } from 'react';
import '../../css/ListPesanan.css';
import NavbarAdmin from './NavbarAdmin';

function ListPesanan() {
    useEffect(() => {
        fetch(`http://localhost:3001/listpesanan`
        ).then(res => res.json()).then(data => {
            // setTampilList(data.results);
            console.log(data.results);
        }

        );
    }, [])
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
                                        {/* <th>Telepon</th> */}
                                        <th>Pesanan</th>
                                        <th>Bukti Pembayaran</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody-pesanan">
                                    {

                                    
                                    <tr>
                                        <td>Megy</td>
                                        <td>mega28102001@Gmail.com</td>
                                        <td>Lamongan</td>
                                        {/* <td>088996031198</td> */}
                                        <td>
                                            <tr>
                                                <td>baju</td>
                                                <td>1</td>
                                            </tr>

                                            <tr>
                                                <td>celana</td>
                                                <td>2</td>
                                            </tr>
                                        </td>
                                        <td>file</td>
                                        <td>
                                            <select class="form-select select-status-pesanan tbody-pesanan">
                                                <option value="1">Menunggu</option>
                                                <option value="2">Terverifikasi</option>
                                            </select>
                                        </td>
                                    </tr>
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