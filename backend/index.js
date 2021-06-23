
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
var upload = multer({ dest: 'uploads/' })
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

app.post('/create-produk', (req, res) => {
    let data = { nama_produk: req.body.nama_produk, harga: req.body.harga, kategori: req.body.kategori, gambar:req.body.gambar };
    let sql = "INSERT INTO produk SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        console.log({results:results})
        res.json({results:results});
        
    });
});
app.get('/tampil', (req,res) => {
    let data = { id_produk: req.query.idproduk };
    let sql = "SELECT * FROM produk WHERE id_produk = " + req.query.idproduk;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({results:results});
    });
})
app.get('/produk',(req,res) => {
    let sql = "SELECT * FROM produk, kategori where produk.kategori=kategori.id_kategori";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.json({results:results});
        });
})
app.get('/kategori',(req,res) => {
    let sql = "SELECT * FROM kategori";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.json({results:results});
        });
})

app.post('/regis',(req,res) => {
    let data = { email: req.body.email,  role: '2', nama_user: req.body.nama, password: req.body.password, };
    let sql = "INSERT INTO user SET ? ";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.json({results:results});
        });
})


app.post('/login',(req,res) => {
    let data = { email: req.body.email, password: req.body.password };
    let sql = "SELECT * FROM user WHERE email = '" + req.body.email + "' AND password = '" + req.body.password + "'";
    let query = conn.query(sql, data, (err, results) => {
        if (results.length > 0) {
            res.json({success: true, results: results});
        } else {
            res.json({results: false});
        }
});
});


app.post('/inputkeranjang', (req, res) => {
    let data = { id_user: req.body.id_user, id_produk: req.body.id_produk, kuantitas_produk: req.body.kuantitas_produk };
    let sql = "INSERT INTO keranjang SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({results:results});
    });
});

app.get('/tampilkeranjang', (req,res) => {
    let data = { iduser: req.query.iduser };
    let sql = "select * from keranjang join produk on keranjang.id_produk = produk.id_produk where keranjang.id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
<<<<<<< HEAD
        
    //let sql2 = "SELECT * FROM produk WHERE produk.id_produk = " + results[0].id_produk;
    
    //let query2 = conn.query2(sql2, (err, results) => {
=======
>>>>>>> 7caae43135caffbc3f9241618c9e7fc349e1e4b3
        if (err) throw err;
        res.json({results:results});
    //});
    })
})

<<<<<<< HEAD
=======
app.get('/tampilco', (req,res) => {
    let data = { iduser: req.query.iduser };
    let sql = "select * from keranjang join produk on keranjang.id_produk = produk.id_produk where keranjang.id_user = " + req.query.iduser;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({results:results});
    });
})

app.get('/listpesanan', (req,res) => {
    let data = { id_produk: req.query.idproduk };
    let sql = "SELECT * FROM produk WHERE id_produk = " + req.query.idproduk;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.json({results:results});
    });
})



app.post("/api/image", upload.single('image'), (req, res) => {
    // console.log(req.file);
        let data = {file_bayar: req.file.path, id_user: req.body.id_user, status_pembayaran: 1, }
        const sql = "INSERT INTO transaksi SET ?";
        conn.query(sql, data, (err, results) => {
            // console.log(results);
            // console.log(req.body);
            // console.log(req.body.tampilproduk);
            // if (err) throw err;
            // const sql1 ="INSERT INTO produk_transaksi VALUES ?";
            // let arry=[]; 
            // for(let i = 0; i< req.body.tampilproduk.length; i++){
            //     arry[i] = [results.insertId, tampilproduk[i].id_produk,  req.body.id_user, tampilproduk[i].kuantitas_produk];
            // }
            // conn.query1(sql1, (err, results) => {
            //     if (err) throw err;
            // })
            })

            res.json({results:results});
});



>>>>>>> 7caae43135caffbc3f9241618c9e7fc349e1e4b3
app.listen(3001, () => {
    console.log('Server is running at port 8000');
  });

