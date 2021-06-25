
//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
var cors = require('cors');
const app = express();
const multer = require('multer');
const { isBuffer } = require('util');
var upload = multer({ dest: 'uploads/' })

var produk = multer({ dest: 'produk/' })
// app.options('*', cors());  

//konfigurasi koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ngethrift'
});
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));

//CORS
// app.use(cors({
//     origin: true,
//     methods: ["GET", "POST"],
//     credentials: true,
// }));


app.get('/tampil', (req, res) => {
    let data = { id_produk: req.query.idproduk };
    let sql = "SELECT * FROM produk WHERE id_produk = " + req.query.idproduk;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})
app.get('/produk', (req, res) => {
    let sql = "SELECT * FROM produk, kategori where produk.kategori=kategori.id_kategori";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})
app.get('/kategori', (req, res) => {
    let sql = "SELECT * FROM kategori";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.post('/regis', (req, res) => {
    let data = { email: req.body.email, role: '2', nama_user: req.body.nama, password: req.body.password, };
    let sql = "INSERT INTO user SET ? ";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})


app.post('/login', (req, res) => {
    let data = { email: req.body.email, password: req.body.password };
    let sql = "SELECT * FROM user WHERE email = '" + req.body.email + "' AND password = '" + req.body.password + "'";
    let query = conn.query(sql, data, (err, results) => {
        if (results.length > 0) {
            res.json({ success: true, results: results });
        } else {
            res.json({ results: false });
        }
    });
});

//hapus
app.post('/hapusproduk', (req, res) => {
    let data = { email: req.body.email, password: req.body.password };
    let sql = "SELECT * FROM user WHERE email = '" + req.body.email + "' AND password = '" + req.body.password + "'";
    let query = conn.query(sql, data, (err, results) => {
        if (results.length > 0) {
            res.json({ success: true, results: results });
        } else {
            res.json({ results: false });
        }
    });
});

//edit produk
app.post('/editproduk', (req, res) => {
    let sql = "UPDATE user SET nama_produk = " + req.body.nama + ", harga = " + req.body.harga + ", AND kategori " + req.body.kategori;
    let query = conn.query(sql, function(err, results){
        if (err) throw err;
        res.json({ success: true, results: results });
    });
});

//hapus produk
app.get('/hapusproduk', (req, res) => {
    let sql = "DELETE from produk WHERE id_produk = " + req.query.id;
    let query = conn.query(sql, function(err, results){
        if (err) throw err;
        res.json({results: results });
    });
});

app.post('/inputkeranjang', (req, res) => {
    let data = { id_user: req.body.id_user, id_produk: req.body.id_produk, kuantitas_produk: req.body.kuantitas_produk };
    let sql = "INSERT INTO keranjang SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
});

app.get('/tampilkeranjang', (req, res) => {
    let data = { iduser: req.query.iduser };
    let sql = "select * from keranjang join produk on keranjang.id_produk = produk.id_produk where keranjang.id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/tampilco', (req, res) => {
    let data = { iduser: req.query.iduser };
    let sql = "select * from keranjang join produk on keranjang.id_produk = produk.id_produk where keranjang.id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/tampiluser', (req, res) => {
    let sql = "select * from user where id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/tampilpes', (req, res) => {
    let sql = "select nama_user, transaksi.id_transaksi, email, alamat, file_bayar, nama_status, gambar, GROUP_CONCAT(DISTINCT nama_produk SEPARATOR ', ') as listproduk, status_pembayaran from transaksi, produk_transaksi, produk, status_pembayaran, user WHERE transaksi.id_transaksi=produk_transaksi.id_transaksi AND produk_transaksi.id_produk=produk.id_produk AND transaksi.id_user=user.id_user AND transaksi.status_pembayaran=status_pembayaran.id_status GROUP BY transaksi.id_transaksi";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/notatransaksi', (req, res) => {
    let sql = "select * from transaksi";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/tampilstatus', (req, res) => {
    let sql = "select * from status_pembayaran";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.post('/ubahstatus', (req, res) => {
    console.log(req.body.status);
    console.log(req.body.id_transaksi);
    let sql = "UPDATE `transaksi` SET `status_pembayaran`= 2 WHERE id_transaksi = " + req.body.id_transaksi;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
})

app.get('/tampiltransaksi', (req, res) => {
    let data = { id_user: req.query.iduser, file_bayar: req.query.bayar };
    let sql = "SELECT * FROM transaksi WHERE id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });

        // console.log(results);
    });
})

app.get('/ambiltransaksi', (req, res) => {
    // let data = { id_user: req.query.iduser, file_bayar: req.query.bayar };
    let sql = "SELECT * FROM transaksi WHERE id_transaksi = " + req.query.idtransaksi;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
        // console.log(results);
    });
})

app.get('/ambilproduknya', (req, res) => {
    let sql = "SELECT * FROM keranjang WHERE id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
        // console.log(results);
    });
})

app.get('/transaksi', (req, res) => {
    let sql = "SELECT * FROM transaksi, status_pembayaran WHERE id_user = " + req.query.id + " AND status_pembayaran.id_status=transaksi.status_pembayaran";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
        // console.log(results);
    });
})

app.delete('/hapuskeranjang', (req, res) => {
    console.log(req.body.hapus);
    const sql = "DELETE FROM keranjang WHERE id_user = " + req.body.hapus;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
        // console.log(results);
    });
})

app.post("/api/image", upload.single('image'), (req, res) => {
    // console.log(req.file);
    let data = { file_bayar: req.file.path, id_user: req.body.id_user, status_pembayaran: 1, }
    const sql = "INSERT INTO transaksi SET ?";
    conn.query(sql, data, (err, results) => {
        res.json({ results: results });
    })
});

app.post('/api/gambar',  produk.single('img'), (req, res) => {
    let data = { nama_produk: req.body.nama_produk, harga: req.body.harga, kategori: req.body.kategori, gambar: req.file.path };
    let sql = "INSERT INTO produk SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        console.log({ results: results })
        // res.json({ results: results });

    });
});

app.post('/tambahalamat', (req, res) => {
    // console.log(req.body.alamat);
    const sql = "UPDATE USER SET ALAMAT = '" + req.body.alamat + "' WHERE ID_USER = " + req.body.id_user;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
});


app.post('/inputproduktransaksi', (req, res) => {
    console.log(req.body.data);
    console.log(req.body.id_transaksi);
    var values = [];
    // let i;
    const sql = "INSERT INTO produk_transaksi (id_user, id_produk, kuantitas_produk, id_transaksi) VALUES ?";
    for( var i=0;i<req.body.data.length;i++) {
         values[i] = [req.body.data[i].id_user, req.body.data[i].id_produk, req.body.data[i].kuantitas_produk, req.body.id_transaksi]
    }
    let query = conn.query(sql, [values], (err, results) => {
        if (err) throw err;
        res.json({ results: results });
    });
  
    
});

app.listen(3001, () => {
    console.log('Server is running at port 8000');
});
