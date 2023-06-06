// Import package mysql
const mysql = require('mysql');

// Buat koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todos'
});

// Terhubung ke database
connection.connect((error) => {
  if (error) {
    console.error('Koneksi database gagal: ', error);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

// Contoh query
// connection.query('SELECT * FROM nama_tabel', (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });

// Tutup koneksi database setelah selesai
connection.end();
