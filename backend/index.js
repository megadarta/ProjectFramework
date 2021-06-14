
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
app.use(cors());
//konfigurasi koneksi
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ngethrift'
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));

app.post('/create-produk', (req, res) => {
    let data = { nama_produk: req.body.nama_produk, harga: req.body.harga, kategori: req.body.kategori };
    let sql = "INSERT INTO produk SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.json({results:results});
    });
});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
  });