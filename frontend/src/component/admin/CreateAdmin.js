import React from 'react';
import '../../css/CreateAdmin.css';
import NavbarAdmin from './NavbarAdmin';


function CreateAdmin() {
    // const [produk_nama, setNama] = useState();
    // const [kategori, setKategori] = useState();
    // const [harga, setHarga] = useState();
    // const [produk, setProduk] = useState([]);
    // const [pilkategori, getKategori] = useState([]);
    // const [gambar, setGambar] = useState();

    // function submitProduk(e) {
    //     e.preventDefault();
    //     console.log(produk_nama);
    //     console.log(kategori);
    //     console.log(harga);

    //     fetch('http://localhost:3001/create-produk', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ nama_produk: produk_nama, kategori, harga, gambar })
    //     }).then(res => res.json()).then(data => console.log(data));
    // }

    // useEffect(() => {
    //     fetch('http://localhost:3001/produk').then(res => res.json()).then(data =>
    //         setProduk(data.results)
    //     );
    // })
    // useEffect(() => {
    //     fetch('http://localhost:3001/kategori').then(res => res.json()).then(data =>
    //         getKategori(data.results)
    //     );
    // })

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
                                <h2>List <b>Admin</b></h2>
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
                                <th>Username</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="tbody-pesanan">
                            {/* {
                                produk.map((x) =>
                                    <tr>
                                        <td>{x.nama_produk}</td>
                                        <td>{x.nama_kategori}</td>
                                        <td>{x.harga}</td>
                                        <td>
                                            <td>
                                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" style={{color:"#0000ff"}}>&#xE254;</i></a>
                                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete" style={{color:"#ff0000"}}>&#xE872;</i></a>
                                            </td>
                                        </td>
                                    </tr>
                            )} */}

                        </tbody>
                    </table>

                </div>
            </div>

            {/* tambah data */}
            <div id="addEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form  method="post">
                            <div class="modal-header">
                                <h4 class="modal-title">Add Admin</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label>Username</label>
                                    <input class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="text" class="form-control"></input>
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

            {/* Edit Modal HTML */}
            <div id="editEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Employee</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>Nama</label>
                                    <input type="text" class="form-control" required></input>
                                </div>
                                <div class="form-group">
                                    <label>Kategori</label>
                                    <input type="email" class="form-control" required></input>
                                </div>
                                <div class="form-group">
                                    <label>Harga</label>
                                    <textarea class="form-control" required></textarea>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" class="btn btn-info" value="Save"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Delete Modal HTML */}
            <div id="deleteEmployeeModal" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">Delete Employee</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p class="text-warning"><small>This action cannot be undone.</small></p>
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

export default CreateAdmin;