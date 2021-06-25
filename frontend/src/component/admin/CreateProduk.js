import React, { useEffect, useState } from 'react';
import '../../css/CreateProduk.css';
import NavbarAdmin from './NavbarAdmin';
import { useHistory } from 'react-router';
import {Button} from 'react-bootstrap';

import swal from 'sweetalert';
// import cors from 'cors';

function CreateProduk() {
    const [produk_nama, setNama] = useState();
    const [kategori, setKategori] = useState();
    const [harga, setHarga] = useState();
    const [produk, setProduk] = useState([]);
    const [pilkategori, getKategori] = useState([]);
    const [gambar, setGambar] = useState();
    const history = useHistory();
    const img = React.createRef();
    const [inputNama, updateNama] = useState();
    const [inputKategori, updateKategori] = useState();
    const [inputHarga, updateHarga] = useState();

    function submitProduk(e) {
        e.preventDefault();
        const imageInput = img.current.files[0];
        
        var formData = new FormData();
        formData.append('img', imageInput);
        formData.append('kategori', kategori);
        formData.append('harga', harga);
        formData.append('nama_produk', produk_nama)

        fetch('http://localhost:3001/api/gambar', {
            method: 'POST',
            body: formData 
        }).then(res => res.json()).then(data => {
            console.log(data)

        })

    }

    // function aksihapus(){
        
    // }

    useEffect(() => {
        fetch('http://localhost:3001/produk').then(res => res.json()).then(data =>
            setProduk(data.results)
        );
    },[])

    useEffect(() => {
        fetch('http://localhost:3001/kategori').then(res => res.json()).then(data =>
            getKategori(data.results)
        );
    },[])
    
    return (
        <div className="d-flex">
            <div>
                <NavbarAdmin />
            </div>
            <div className="kanan-admin-produk">
                <div className="tabel-pesanan">
                    <div class="table-responsive">

                        <div class="d-flex">
                            <div className="nama-listpro">
                                <h2>List <b>Produk</b></h2>
                            </div>
                            <div class="d-flex icon-atas-produk justify-content-end">
                                <div><a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons ">&#xE147;</i> <span>Add</span></a>
                                    {/* </div><div><a href="#deleteEmployeeModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="table table-pesanan">
                        <thead className="thead-pesanan">
                            <tr>
                                <th>Nama</th>
                                <th>Kategori</th>
                                <th>Harga</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-pesanan">
                            {
                                produk.map((x) =>
                                    <tr>
                                        <td>{x.nama_produk}</td>
                                        <td>{x.nama_kategori}</td>
                                        <td>{x.harga}</td>
                                        <td>
                                            <td>
                                                <Button className="delete" data-toggle="modal" onClick={ 
                                                    e => {fetch(`http://localhost:3001/hapusproduk?id=${x.id_produk}`).then(res => res.json()).then(data => console.log(data.results));
                                                    swal("SUKSES", "Anda berhasil menghapus", "success");
                                                    window. location. reload(true);
                                                    }}>
                                                    <i class="material-icons" data-toggle="tooltip" title="Delete" style={{color:"#ff0000"}}>&#xE872;</i>
                                                </Button>
                                            </td>
                                        </td>
                                    </tr>
                            )}

                        </tbody>
                    </table>

                </div>
            </div>

            {/* tambah data */}
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={submitProduk} method="post">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Produk</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" required onChange={e => setNama(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label>Kategori</label>
                                    <select onChange={e => setKategori(e.target.value)}>
                                        <option >Pilih kategori</option>
                                    {
                                        pilkategori.map((y) =>
                                        
                                            <option value={y.id_kategori}>{y.nama_kategori}</option>
                                        
                                    )}
                                    </select>  
                                </div>
                                <div class="form-group">
                                    <label>Harga</label>
                                    <input class="form-control" required onChange={e => setHarga(e.target.value)}></input>
                                </div>
                                <div className="upload-bayar">
                                    <label>Gambar</label>
                                    <input type="file" name="img" ref={img} />
                                    {/* <input type="text" class="form-control" required onChange={e => setGambar(e.target.value)}></input> */}
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" class="btn btn-success" value="Add"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Edit Modal HTML
            <div id="editEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form onSubmit={aksiedit}>
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Produk</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Nama</label>
                                    <input type="text" class="form-control" onChange={e => updateNama(e.target.value)} required></input>
                                </div>
                                <div class="form-group">
                                    <label>Kategori</label>
                                    <select onChange={e => updateKategori(e.target.value)}>
                                        <option >Pilih kategori</option>
                                    {
                                        pilkategori.map((y) =>
                                            <option value={y.id_kategori}>{y.nama_kategori}</option>
                                    )}
                                    </select> 
                                </div>
                                <div class="form-group">
                                    <label>Harga</label>
                                    <textarea class="form-control" onChange={e => updateHarga(e.target.value)} required></textarea>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" class="btn btn-info" value="Save"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Produk</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Apakah kamu yakin?</p>
                                <p class="text-warning"><small>Tidak bisa dikemabalikan</small></p>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" class="btn btn-danger" value="Delete"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduk;